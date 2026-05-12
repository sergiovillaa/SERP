output "pages_project_name" {
  value = cloudflare_pages_project.frontend.name
}

output "pages_subdomain" {
  value = cloudflare_pages_project.frontend.subdomain
}
