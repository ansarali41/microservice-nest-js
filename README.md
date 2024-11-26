# NestJS Microservices Project

This project contains three main services:

-   API Gateway
-   User Service
-   Post Service

## Project Structure

nest-microservices/
├── api-gateway/
├── user-service/
├── post-service/
└── package.json

## Prerequisites

-   Node.js (v14 or later)
-   MySQL
-   npm or yarn

## Installation

1. Install root dependencies:

    ```bash
    npm install
    ```

2. Install all service dependencies:

    ```bash
    npm run install:all
    ```

3. Configure environment variables:
   Create `.env` files in each service directory and configure your variables.

4. Start all services in development mode:

## API Documentation

Once the services are running, you can access the Swagger documentation at:
http://localhost:3000/api

## Services

### API Gateway

-   Port: 3000
-   Main entry point for all client requests
-   Handles request routing to appropriate microservices

### User Service

-   Port: 3001
-   Handles user-related operations
-   Connected to user_service_db database

### Post Service

-   Port: 3002
-   Handles post-related operations
-   Connected to post_service_db database
