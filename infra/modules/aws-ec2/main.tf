locals {
  name_prefix = "${var.project_name}-${var.environment}"
}

resource "aws_instance" "this" {
  ami = var.ami_id
  instance_type = var.instance_type
  key_name = var.key_name
  subnet_id = var.subnet_id
  vpc_security_group_ids = var.security_group_ids
  associate_public_ip_address = true
  user_data = var.user_data
  user_data_replace_on_change = true

  root_block_device {
    volume_size = var.root_volume_size
    volume_type = "gp3"
  }

  tags = merge(var.tags, {
    Name = "${local.name_prefix}-ec2"
  })
}

resource "aws_eip" "this" {
  domain = "vpc"

  tags = merge(var.tags, {
    Name = "${local.name_prefix}-eip"
  })
}

resource "aws_eip_association" "this" {
  instance_id = aws_instance.this.id
  allocation_id = aws_eip.this.id
}