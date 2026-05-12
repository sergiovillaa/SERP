output "backend_ip" {
  description = "Public IP address available for future Cloudflare records."
  value       = local.backend_ip
}
