variable "account_id" {
  type = string
}

variable "project_name" {
  type        = string
  description = "Project name used for naming resources."
}

variable "frontend_api_base_url" {
  type = string
}

variable "frontend_data_mode" {
  type    = string
  default = "api"
}
