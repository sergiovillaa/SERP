# 🚀 SERP – CRM & Project Management Platform

> Full-Stack Cloud-Ready CRM and Project Management System  
> Built with React, Spring Boot, Docker & CI/CD automation

---

## 📌 Overview

SERP is a **full-stack web application** that integrates two core business functionalities:

- **Customer Relationship Management (CRM)**
- **Project & Task Management System**

The platform allows organizations to manage clients, projects, tasks, and team collaboration in a structured and scalable way.

It is designed with a **cloud-ready architecture**, containerized services, and a complete **CI/CD pipeline with multi-environment deployments (dev & prod)**.

---

## 🎯 Core Features

### 🧑‍💼 CRM Module

- Register and manage Leads  
- Convert Leads into Clients  
- Manage Contacts per Lead/Client  
- Track Opportunities  
- Record client interactions (Activities)  

### 📁 Project Management

- Create projects associated with clients  
- Assign users to projects  
- Create hierarchical tasks and subtasks  
- Assign responsibilities  
- Track status and priorities  
- Attach files and comments  
- Visualize project progress  

---

## 🧱 System Architecture

The system follows a layered architecture:

Users
↓
Cloudflare Edge (Workers / CDN)
↓
Frontend (React + Vite)
↓
Spring Boot Backend (Dockerized)
↓
Database

---

## 🚀 DevOps & CI/CD Pipeline

The infrastructure and deployment flow:

Developer → GitHub Repository
→ GitHub Actions (CI)
• Unit Tests (Vitest)
• Coverage ≥ 85%
• Build Frontend
• Build Docker Image
→ Docker Hub
→ Deploy Dev Environment
→ Manual Approval
→ Deploy Prod Environment
→ Cloudflare Workers / Edge
→ Users

### ✔ Pipeline Guarantees

- Automated unit testing  
- Coverage threshold enforcement  
- Docker image build and push  
- Artifact publishing  
- Multi-environment deployment  
- Production approval gate  

---

## 🏗 Domain Model

Main system entities:

- Lead  
- Cliente  
- Oportunidad  
- Contacto  
- Proyecto  
- Actividad  
- Usuario  
- Tarea  
- Comentario  
- Archivo  

These entities support a real-world CRM + Project Management workflow.

---

## 🛠 Tech Stack

### 🎨 Frontend
- Vite  
- React  
- Tailwind CSS  

### ⚙ Backend
- Spring Framework (Java)  
- Cloudflare Workers  

### 🚀 DevOps & CI/CD
- Docker  
- GitHub Actions  
- Docker Hub  
- Cloudflare Deployment  
- Multi-environment setup (dev & prod)  
- Manual approval for production  

### 🧪 Testing & Quality Assurance
- Vitest  
- Unit Testing  
- Coverage ≥ 85%  
- CI validation  

---

## 🐳 Containerization

The backend and supporting services are containerized using Docker.

Typical setup:

spring-api container
database container

Docker Hub is used as the image registry.

---

## 🌍 Environments

### Development (Dev)
- Automatic deployment on push

### Production (Prod)
- Manual approval required before deployment

---

## 📊 Project Management

Project planning is managed using **GitHub Projects (Kanban Board)**.

Workflow:

- Backlog  
- To Do  
- In Progress  
- Review  
- Done  

Issues are categorized by labels:

- frontend  
- backend  
- devops  
- testing  
- documentation  

---

## ☁ Cloud-Ready Design

Although the backend can run locally during development, the architecture is fully prepared for deployment to:

- AWS (EC2 / ECS)  
- Azure  
- GCP  
- Any container-compatible cloud platform  

---

## 📈 Future Improvements

- Role-based access control  
- Redis caching  
- Microservices migration  
- API Gateway implementation  
- Monitoring & logging integration  

---

## 👨‍💻 Authors

Developed as part of a DevOps and Cloud Engineering academic project.

---

# 🏁 Conclusion

This project demonstrates:

- Full-stack development  
- Domain modeling  
- Containerization  
- CI/CD automation  
- Multi-environment deployment  
- Cloud-native design principles  
- Agile project management  
