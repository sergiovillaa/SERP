resource "cloudflare_pages_project" "frontend" {
  account_id        = var.account_id
  name              = var.pages_project_name
  production_branch = var.production_branch

  source = {
    type = "github"

    config = {
      owner                          = var.github_owner
      repo_name                      = var.github_repo_name
      production_branch              = var.production_branch
      production_deployments_enabled = true
      preview_deployment_setting     = "all"
      pr_comments_enabled            = true
    }
  }

  build_config = {
    build_command   = "npm ci && npm run build"
    destination_dir = "dist"
    root_dir        = "frontend"
  }

  deployment_configs = {
    production = {
      env_vars = {
        VITE_API_BASE_URL = {
          type  = "plain_text"
          value = var.frontend_api_base_url
        }

        VITE_DATA_MODE = {
          type  = "plain_text"
          value = var.frontend_data_mode
        }
      }
    }
  }
}