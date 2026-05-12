resource "cloudflare_pages_project" "frontend" {
  account_id        = var.account_id
  name              = var.pages_project_name
  production_branch = "main"

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