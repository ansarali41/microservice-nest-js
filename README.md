# NestJS Microservices Project

A scalable microservices architecture showcasing service communication, database management, and containerization using NestJS, MySQL, and Docker.

## System Architecture

Our microservices ecosystem consists of:

### 1. API Gateway (Port 4000)
- Central entry point for all client requests
- Routes traffic to appropriate microservices
- Handles request/response transformation
- Swagger API documentation
- Load balancing and service discovery

### 2. User Service (Port 4001)
- Manages user-related operations
- Features:
  - User registration and authentication
  - Profile management
  - JWT token handling
- Dedicated MySQL instance (Port 3307)

### 3. Post Service (Port 4002)
- Handles all post-related operations
- Features:
  - Create, read, update, delete posts
  - Post metadata management
  - Content validation
- Dedicated MySQL instance (Port 3308)

## Technology Stack

- **Framework**: NestJS with TypeScript
- **Databases**: MySQL 8.0
- **Containerization**: Docker & Docker Compose
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest & Supertest
- **Node Version**: 18.x

## Getting Started

### Prerequisites
- Docker Desktop
- Node.js 18+
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd microservice-nest-js
```

2. Set up environment variables:

Create `.env` for User Service:
```env
DB_HOST=user-db
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=user_service_db
```

Create `.env` for Post Service:
```env
DB_HOST=post-db
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_DATABASE=post_service_db
```

3. Start the services:
```bash
# Build and start all services
docker-compose up -d --build
```

4. Verify the deployment:
```bash
# Check running containers
docker ps

# Check service logs
docker-compose logs -f
```

### Service URLs
- API Gateway: http://localhost:4000
- User Service: http://localhost:4001
- Post Service: http://localhost:4002

## Development

### Local Development
```bash
# Install dependencies for each service
cd api-gateway && npm install
cd ../user-service && npm install
cd ../post-service && npm install

# Run services in development mode
npm run start:dev
```

### Docker Commands
```bash
# Start services
docker-compose up -d

# Rebuild a specific service
docker-compose up -d --build [service-name]

# View logs
docker-compose logs -f [service-name]

# Stop all services
docker-compose down

# Clean up volumes
docker-compose down -v
```

## API Documentation

Access Swagger documentation at:
- Gateway API: http://localhost:4000/api
- User Service: http://localhost:4001/api
- Post Service: http://localhost:4002/api

## Testing

Run tests for each service:
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Troubleshooting

### Common Issues

1. **Database Connection Failures**
   - Check if MySQL containers are healthy
   - Verify environment variables
   - Ensure ports are not in use

2. **Service Discovery Issues**
   - Check if all services are running
   - Verify network connectivity
   - Check service names in docker-compose.yml

3. **Build Failures**
   - Clear Docker cache: `docker builder prune`
   - Remove node_modules: `rm -rf node_modules`
   - Rebuild: `docker-compose up -d --build`

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
