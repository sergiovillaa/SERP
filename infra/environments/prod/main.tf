terraform {
  required_version = ">= 1.6.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

locals {
  environment = "prod"

  common_tags = {
    Project     = var.project_name
    Environment = local.environment
    ManagedBy   = "terraform"
  }
}

module "network" {
  source             = "../../modules/aws-network"

  project_name       = var.project_name
  environment        = local.environment
  vpc_cidr           = var.vpc_cidr
  public_subnet_cidr = var.public_subnet_cidr
  availability_zone  = var.availability_zone
  ssh_cidr_blocks    = var.ssh_cidr_blocks
  app_ports          = var.app_ports

  tags               = local.common_tags
}

module "ec2" {
  source = "../../modules/aws-ec2"

  project_name       = var.project_name
  environment        = local.environment
  ami_id             = var.ami_id
  instance_type      = var.instance_type
  key_name           = var.key_name
  subnet_id          = module.network.public_subnet_id
  security_group_ids = [module.network.ec2_security_group_id]

  user_data = file("${path.module}/../../../scripts/bootstrap.sh")

  tags = local.common_tags
}
