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

variable "github_owner" {
  type        = string
  description = "GitHub owner or organization."
}

variable "github_repo_name" {
  type        = string
  description = "GitHub repository name."
}

variable "production_branch" {
  type        = string
  description = "Branch used for production deployments."
  default     = "main"
}
