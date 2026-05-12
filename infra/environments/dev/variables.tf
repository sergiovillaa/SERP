variable "project_name" {
  type        = string
  description = "Project name used for naming resources."
}

variable "aws_region" {
  type        = string
  description = "AWS region where infrastructure will be created."
  default     = "us-east-1"
}

variable "availability_zone" {
  type        = string
  description = "Availability zone for the public subnet."
}

variable "vpc_cidr" {
  type        = string
  description = "CIDR block for the VPC."
}

variable "public_subnet_cidr" {
  type        = string
  description = "CIDR block for the public subnet."
}

variable "ami_id" {
  type        = string
  description = "AMI ID used for the EC2 instance."
}

variable "instance_type" {
  type        = string
  description = "EC2 instance type."
}

variable "key_name" {
  type        = string
  description = "AWS key pair name used to access the EC2 instance."
}

variable "cloudflare_api_token" {
  type        = string
  description = "Cloudflare API token."
  sensitive   = true
}

variable "ssh_cidr_blocks" {
  type = list(string)
  description = "CIDR blocks allowed to access SSH"
}

variable "cloudflare_account_id" {
  type = string
}

variable "pages_project_name" {
  type        = string
  description = "Cloudflare Pages project name."
}

variable "frontend_data_mode" {
  type    = string
  default = "api"
}

variable "app_ports" {
  type        = list(number)
  description = "Application ports exposed from the EC2 instance."
  default     = [80]
}