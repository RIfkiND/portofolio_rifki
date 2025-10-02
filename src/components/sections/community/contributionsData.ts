import { 
  SiMedium, SiHashnode
} from "react-icons/si";
import { 
  FaCode, 
} from "react-icons/fa";

export const contributions = [
  // Project
  {
    id: 1,
    title: "Go REST API Template",
    description: "A production-ready Go REST API template with authentication, middleware, database integration, and comprehensive documentation following best practices.",
    icon: FaCode,
    category: "Open Source",
    type: "Template",
    tech: ["Go", "Gin", "PostgreSQL", "JWT", "Docker"],
    link: "https://github.com/RifkiND/go-rest-api-template"
  },

  // Blog Posts

  {
    id: 3,
    title: "Database N+1 Query Problem",
    description: "Deep dive into the N+1 query problem in database operations, how to identify it, and various solutions using eager loading and query optimization techniques.",
    icon: SiMedium,
    category: "Blog",
    type: "Guide",
    tech: ["Database", "Performance", "Laravel", "Optimization"],
    link: "https://medium.com/@rifki/solving-n1-query-problem"
  },
  {
    id: 4,
    title: "Advanced Laravel Query Optimization",
    description: "Exploring advanced query optimization techniques in Laravel including database indexing, query caching, and performance monitoring strategies.",
    icon: SiHashnode,
    category: "Blog",
    type: "Article",
    tech: ["Laravel", "Database", "Performance", "Caching"],
    link: "https://hashnode.com/@rifki/laravel-query-optimization"
  }
];

export const categories = ["All", "Open Source", "Blog"];
export const types = ["All", "Template", "Tutorial", "Guide", "Article"];