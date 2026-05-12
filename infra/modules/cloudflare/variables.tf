variable "account_id" {
  type = string
}

variable "pages_project_name" {
  type        = string
  description = "Cloudflare Pages project name."
}

variable "frontend_api_base_url" {
  type = string
}

variable "frontend_data_mode" {
  type    = string
  default = "api"
}
