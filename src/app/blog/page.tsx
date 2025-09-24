"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Backend Systems with NestJS and PostgreSQL",
    slug: "building-scalable-backend-nestjs-postgresql",
    excerpt: "Learn how to architect and build robust backend systems using NestJS framework with PostgreSQL database, including best practices for scalability and performance.",
    content: `# Building Scalable Backend Systems with NestJS and PostgreSQL

As a backend developer, I've worked with various frameworks and databases, but the combination of NestJS and PostgreSQL has consistently delivered exceptional results for enterprise-level applications.

## Why NestJS?

NestJS brings structure and scalability to Node.js applications through its TypeScript-first approach and decorator-based architecture. Here's what makes it special:

### 1. Enterprise-Ready Architecture
- Built-in dependency injection
- Modular architecture
- TypeScript support out of the box
- Extensive testing capabilities

### 2. Developer Experience
- Familiar Angular-like syntax
- Excellent CLI tools
- Built-in validation and serialization
- Comprehensive documentation

## PostgreSQL: The Reliable Choice

PostgreSQL remains my database of choice for most backend applications:

- **ACID Compliance**: Ensures data integrity
- **Advanced Features**: JSON support, full-text search, custom types
- **Performance**: Excellent query optimization
- **Scalability**: Handles large datasets efficiently

## Implementation Best Practices

### 1. Project Structure
\`\`\`
src/
├── modules/
│   ├── users/
│   ├── auth/
│   └── posts/
├── common/
├── config/
└── database/
\`\`\`

### 2. Database Integration
Using TypeORM for seamless PostgreSQL integration:

\`\`\`typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Post, post => post.author)
  posts: Post[];
}
\`\`\`

### 3. Performance Optimization
- Connection pooling
- Query optimization
- Caching strategies
- Database indexing

## Conclusion

The NestJS and PostgreSQL combination provides a solid foundation for building scalable backend systems. The framework's enterprise-grade features combined with PostgreSQL's reliability make it an excellent choice for modern applications.
    `,
    author: "Rifki Noviandra",
    publishedAt: "2024-03-15",
    readTime: "8 min read",
    category: "Backend Development",
    tags: ["NestJS", "PostgreSQL", "TypeScript", "Backend", "Scalability"],
    image: "/images/projects/hasilbumi.png",
    featured: true
  },
  {
    id: 2,
    title: "Modern Frontend Development with React and TypeScript",
    slug: "modern-frontend-react-typescript",
    excerpt: "Explore the latest patterns and best practices in React development using TypeScript, including hooks, context API, and performance optimization techniques.",
    content: `# Modern Frontend Development with React and TypeScript

React with TypeScript has become the standard for building maintainable and scalable frontend applications. In this post, I'll share insights from my experience developing modern web applications.

## The Power of TypeScript in React

TypeScript transforms React development by providing:

### Type Safety
- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code

### Enhanced Developer Experience
- Refactoring confidence
- Better team collaboration
- Reduced runtime errors

## Essential React Patterns

### 1. Custom Hooks
Custom hooks help encapsulate logic and promote reusability:

\`\`\`typescript
const useApi = <T>(url: string): ApiResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
\`\`\`

### 2. Context API for State Management
For complex state management without external dependencies:

\`\`\`typescript
interface AppContextType {
  user: User | null;
  theme: Theme;
  updateUser: (user: User) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
\`\`\`

### 3. Error Boundaries
Graceful error handling in React components:

\`\`\`typescript
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }
}
\`\`\`

## Performance Optimization

### 1. Memoization
- React.memo for component memoization
- useMemo for expensive calculations
- useCallback for function memoization

### 2. Code Splitting
- Dynamic imports
- Lazy loading components
- Route-based splitting

### 3. Bundle Optimization
- Tree shaking
- Minimize bundle size
- Optimize images and assets

## Conclusion

React with TypeScript provides an excellent foundation for modern frontend development. The combination of React's flexibility and TypeScript's type safety creates a powerful development environment that scales well with team size and project complexity.
    `,
    author: "Rifki Noviandra",
    publishedAt: "2024-03-10",
    readTime: "6 min read",
    category: "Frontend Development",
    tags: ["React", "TypeScript", "Frontend", "JavaScript", "Hooks"],
    image: "/images/projects/diklat.png",
    featured: true
  },
  {
    id: 3,
    title: "Database Design Patterns for Modern Applications",
    slug: "database-design-patterns-modern-applications",
    excerpt: "Comprehensive guide to database design patterns, normalization strategies, and optimization techniques for building efficient data models.",
    content: `# Database Design Patterns for Modern Applications

Effective database design is crucial for application performance and maintainability. Here are key patterns and strategies I've learned through building various database-driven applications.

## Fundamental Design Principles

### 1. Normalization vs. Denormalization
Understanding when to normalize and when to denormalize:

**Normalization Benefits:**
- Eliminates data redundancy
- Maintains data integrity
- Reduces storage requirements

**Denormalization Benefits:**
- Improves query performance
- Simplifies complex queries
- Reduces join operations

### 2. Indexing Strategies
Proper indexing can dramatically improve performance:

\`\`\`sql
-- Composite index for common query patterns
CREATE INDEX idx_user_posts_date 
ON posts(user_id, created_at DESC);

-- Partial index for specific conditions
CREATE INDEX idx_active_users 
ON users(email) 
WHERE status = 'active';
\`\`\`

## Common Design Patterns

### 1. Entity-Attribute-Value (EAV)
For flexible, schema-less data:

\`\`\`sql
CREATE TABLE entities (
    id SERIAL PRIMARY KEY,
    entity_type VARCHAR(50)
);

CREATE TABLE attributes (
    id SERIAL PRIMARY KEY,
    entity_id INTEGER REFERENCES entities(id),
    attribute_name VARCHAR(100),
    attribute_value TEXT
);
\`\`\`

### 2. Polymorphic Associations
For flexible relationships:

\`\`\`sql
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT,
    commentable_id INTEGER,
    commentable_type VARCHAR(50)
);
\`\`\`

### 3. Audit Trail Pattern
For tracking data changes:

\`\`\`sql
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    table_name VARCHAR(50),
    operation VARCHAR(10),
    old_values JSONB,
    new_values JSONB,
    changed_at TIMESTAMP DEFAULT NOW(),
    changed_by INTEGER
);
\`\`\`

## Performance Optimization

### 1. Query Optimization
- Use EXPLAIN ANALYZE to understand query execution
- Avoid N+1 queries
- Use appropriate JOIN types

### 2. Connection Pooling
- Implement connection pooling
- Configure pool sizes appropriately
- Monitor connection usage

### 3. Caching Strategies
- Database-level caching
- Application-level caching
- Query result caching

## Conclusion

Good database design is the foundation of any successful application. By following these patterns and principles, you can build databases that are both performant and maintainable, supporting your application's growth over time.
    `,
    author: "Rifki Noviandra",
    publishedAt: "2024-03-05",
    readTime: "10 min read",
    category: "Database",
    tags: ["Database", "PostgreSQL", "MySQL", "Design Patterns", "Performance"],
    image: "/images/projects/sindara.png",
    featured: false
  },
  {
    id: 4,
    title: "API Design Best Practices: RESTful Services That Scale",
    slug: "api-design-best-practices-restful-services",
    excerpt: "Essential guidelines for designing RESTful APIs that are maintainable, scalable, and developer-friendly, with real-world examples.",
    content: `# API Design Best Practices: RESTful Services That Scale

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
    `,
    author: "Rifki Noviandra",
    publishedAt: "2024-02-28",
    readTime: "7 min read",
    category: "API Development",
    tags: ["API", "REST", "Backend", "Design Patterns", "Best Practices"],
    image: "/images/projects/hasilbumi.png",
    featured: false
  },
  {
    id: 5,
    title: "DevOps Essentials: Docker, CI/CD, and Deployment Strategies",
    slug: "devops-essentials-docker-cicd-deployment",
    excerpt: "A practical guide to modern DevOps practices including containerization with Docker, setting up CI/CD pipelines, and deployment strategies.",
    content: `# DevOps Essentials: Docker, CI/CD, and Deployment Strategies

Modern software development requires efficient deployment and operations practices. Here's my experience with essential DevOps tools and strategies.

## Containerization with Docker

### 1. Dockerfile Best Practices
\`\`\`dockerfile
# Multi-stage build for smaller images
FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### 2. Docker Compose for Development
\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

## CI/CD Pipeline Setup

### 1. GitHub Actions
\`\`\`yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to production
        run: |
          # Deployment commands
\`\`\`

### 2. Quality Gates
- Automated testing
- Code coverage requirements
- Security scanning
- Performance benchmarks

## Deployment Strategies

### 1. Blue-Green Deployment
- Zero-downtime deployments
- Easy rollback capability
- Full environment testing

### 2. Rolling Deployment
- Gradual rollout
- Resource efficient
- Continuous availability

### 3. Canary Deployment
- Risk mitigation
- Performance monitoring
- Gradual traffic shifting

## Monitoring and Logging

### 1. Application Monitoring
\`\`\`javascript
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.APP_VERSION
  });
});
\`\`\`

### 2. Centralized Logging
- Structured logging
- Log aggregation
- Real-time monitoring
- Alert configuration

## Infrastructure as Code

### 1. Terraform Example
\`\`\`hcl
resource "aws_instance" "app_server" {
  ami           = "ami-0c55b159cbfafe1d0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "AppServer"
    Environment = "production"
  }
}
\`\`\`

## Conclusion

DevOps practices are essential for modern software delivery. By implementing containerization, automated pipelines, and proper monitoring, teams can deliver software faster and more reliably while maintaining high quality standards.
    `,
    author: "Rifki Noviandra",
    publishedAt: "2024-02-20",
    readTime: "9 min read",
    category: "DevOps",
    tags: ["DevOps", "Docker", "CI/CD", "Deployment", "Infrastructure"],
    image: "/images/projects/diklat.png",
    featured: false
  }
];

const categories = ["All", "Backend Development", "Frontend Development", "Database", "API Development", "DevOps"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => 
    selectedCategory === "All" || post.category === selectedCategory
  );

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="bg-neutral-900/50 backdrop-blur-sm border-b border-neutral-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="text-sm text-gray-400">
              {filteredPosts.length} Articles
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern software development. 
            Sharing my journey as a backend developer and the lessons learned along the way.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden bg-neutral-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full">
                    <span className="text-xs text-white font-medium">Featured</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <span className="bg-neutral-800 px-3 py-1 rounded-full">{post.category}</span>
                    <span>{post.readTime}</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-neutral-800 text-gray-400 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Posts */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                layout
              >
                <div className="relative h-40 overflow-hidden bg-neutral-800">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.featured && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-1 rounded-full">
                      <span className="text-xs text-white font-medium">Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-400">
                    <span className="bg-neutral-800 px-2 py-1 rounded">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                    
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* Newsletter CTA */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-neutral-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about backend development, 
              system design, and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}