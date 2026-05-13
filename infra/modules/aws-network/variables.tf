variable "project_name" {
  type        = string
  description = "Project name used for naming resources."
}

variable "environment" {
  type        = string
  description = "Environment name."
}

variable "vpc_cidr" {
  type        = string
  description = "CIDR block for the VPC."
}

variable "public_subnet_cidr" {
  type        = string
  description = "CIDR block for the public subnet."
}

variable "availability_zone" {
  type        = string
  description = "Availability zone for the public subnet."
}

variable "ssh_cidr_blocks" {
  type        = list(string)
  description = "CIDR blocks allowed to access SSH."
  default     = []
}

variable "app_ports" {
  type        = list(number)
  description = "Application ports exposed from the EC2 instance."
  default     = [80]
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to AWS resources."
  default     = {}
}
