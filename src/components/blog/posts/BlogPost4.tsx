export const BlogPost4Content = `
# API Design Best Practices: RESTful Services That Scale

Building APIs that stand the test of time requires careful planning and adherence to proven design principles. Here's what I've learned from designing APIs for various applications.

## RESTful Design Principles

### 1. Resource-Based URLs
URLs should represent resources, not actions:

\`\`\`
✅ Good
GET /api/users/123
POST /api/users
PUT /api/users/123
DELETE /api/users/123

❌ Bad
GET /api/getUser/123
POST /api/createUser
PUT /api/updateUser/123
DELETE /api/deleteUser/123
\`\`\`

### 2. HTTP Methods Usage
Use HTTP methods correctly:

- **GET**: Retrieve data
- **POST**: Create new resources
- **PUT**: Update entire resource
- **PATCH**: Partial updates
- **DELETE**: Remove resources

### 3. Status Codes
Return appropriate HTTP status codes:

\`\`\`
200 OK - Successful GET, PUT, PATCH
201 Created - Successful POST
204 No Content - Successful DELETE
400 Bad Request - Invalid request
401 Unauthorized - Authentication required
404 Not Found - Resource doesn't exist
500 Internal Server Error - Server error
\`\`\`

## Response Structure

### 1. Consistent Response Format
\`\`\`json
{
  "data": {},
  "message": "Success",
  "status": "success",
  "timestamp": "2024-03-15T10:30:00Z"
}
\`\`\`

### 2. Error Handling
\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed",
    "details": [
      {
        "field": "email",
        "message": "Email is required"
      }
    ]
  },
  "status": "error",
  "timestamp": "2024-03-15T10:30:00Z"
}
\`\`\`

## Pagination and Filtering

### 1. Pagination
\`\`\`
GET /api/users?page=1&limit=20&offset=0
\`\`\`

### 2. Filtering and Sorting
\`\`\`
GET /api/users?filter=active&sort=created_at&order=desc
\`\`\`

## Authentication and Security

### 1. JWT Authentication
\`\`\`typescript
// JWT middleware
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
};
\`\`\`

### 2. Rate Limiting
\`\`\`typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});
\`\`\`

## Documentation

### 1. OpenAPI/Swagger
Use OpenAPI specification for API documentation:

\`\`\`yaml
openapi: 3.0.0
info:
  title: User API
  version: 1.0.0
paths:
  /users:
    get:
      summary: Get all users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: List of users
\`\`\`

## Conclusion

Well-designed APIs are the backbone of modern applications. By following these best practices, you can create APIs that are intuitive, maintainable, and scalable, providing a great developer experience for your API consumers.
`;