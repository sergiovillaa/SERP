variable "project_name" {
  type        = string
  description = "Project name used for naming resources."
}

variable "environment" {
  type        = string
  description = "Environment name."
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

variable "subnet_id" {
  type        = string
  description = "Subnet ID where the EC2 instance will be launched."
}

variable "security_group_ids" {
  type        = list(string)
  description = "Security group IDs attached to the EC2 instance."
}

variable "user_data" {
  type        = string
  description = "User data script used to bootstrap the EC2 instance."
  default     = null
}

variable "root_volume_size" {
  type        = number
  description = "Root EBS volume size in GiB."
  default     = 20
}

variable "tags" {
  type        = map(string)
  description = "Tags applied to AWS resources."
  default     = {}
}
