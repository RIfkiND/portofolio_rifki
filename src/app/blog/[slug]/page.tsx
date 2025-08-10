"use client";
import { useParams } from "next/navigation";
import Sidebar from "@/components/SideBar/Sidebar";
import TabSection from "@/components/Header/TabSection";
import { SiMarkdown } from "react-icons/si";
import { VscCalendar, VscWatch, VscTag, VscArrowLeft } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Line from "@/components/ui/line";

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [readingProgress, setReadingProgress] = useState(0);

  // Calculate reading progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to render markdown-like content with syntax highlighting
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
      // Handle headers
      if (line.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8 border-b border-neutral-700 pb-2">
            <span className="text-blue-400"># </span>
            {line.substring(2)}
          </h1>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-white mb-4 mt-6">
            <span className="text-green-400">## </span>
            {line.substring(3)}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-white mb-3 mt-4">
            <span className="text-yellow-400">### </span>
            {line.substring(4)}
          </h3>
        );
      }
      
      // Handle code blocks
      if (line.startsWith('```')) {
        const language = line.substring(3).trim();
        return (
          <div key={index} className="my-4">
            <div className="bg-neutral-800 border border-neutral-600 rounded-t-lg px-3 py-2 text-xs text-gray-400">
              <span className="text-purple-400">💻</span> {language || 'code'}
            </div>
          </div>
        );
      }
      if (line === '```') {
        return <div key={index} className="bg-neutral-900 border-x border-b border-neutral-600 rounded-b-lg h-2"></div>;
      }
      
      // Handle code inside blocks (indented lines after ```)
      if (line.startsWith('    ') || line.startsWith('\t')) {
        return (
          <div key={index} className="bg-neutral-900 border-x border-neutral-600 px-4 py-1">
            <code className="text-green-400 text-sm">
              {line.substring(line.startsWith('\t') ? 1 : 4)}
            </code>
          </div>
        );
      }

      // Handle inline code
      const codeRegex = /`([^`]+)`/g;
      if (codeRegex.test(line)) {
        const parts = line.split(codeRegex);
        return (
          <p key={index} className="text-gray-300 leading-relaxed mb-4">
            {parts.map((part, i) => 
              i % 2 === 1 ? (
                <code key={i} className="bg-neutral-800 text-green-400 px-2 py-1 rounded text-sm border border-neutral-600">
                  {part}
                </code>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        );
      }

      // Handle lists
      if (line.startsWith('- ')) {
        return (
          <div key={index} className="flex items-start mb-2 ml-4">
            <span className="text-blue-400 mr-2">•</span>
            <span className="text-gray-300">{line.substring(2)}</span>
          </div>
        );
      }
      if (line.match(/^\d+\. /)) {
        const number = line.match(/^(\d+)\. /)?.[1];
        return (
          <div key={index} className="flex items-start mb-2 ml-4">
            <span className="text-yellow-400 mr-2 font-mono">{number}.</span>
            <span className="text-gray-300">{line.substring(line.indexOf('. ') + 2)}</span>
          </div>
        );
      }

      // Handle checkboxes
      if (line.includes('- [ ]') || line.includes('- [x]')) {
        const checked = line.includes('- [x]');
        const text = line.substring(line.indexOf(']') + 2);
        return (
          <div key={index} className="flex items-center mb-2 ml-4">
            <span className={`mr-2 ${checked ? 'text-green-400' : 'text-gray-500'}`}>
              {checked ? '✓' : '☐'}
            </span>
            <span className={`${checked ? 'text-gray-400 line-through' : 'text-gray-300'}`}>
              {text}
            </span>
          </div>
        );
      }

      // Handle blockquotes
      if (line.startsWith('> ')) {
        return (
          <div key={index} className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-neutral-800/50">
            <span className="text-blue-300 italic">{line.substring(2)}</span>
          </div>
        );
      }

      // Handle horizontal rules
      if (line.trim() === '---') {
        return <hr key={index} className="border-neutral-600 my-8" />;
      }

      // Handle bold and italic
      let processedLine = line;
      // Bold
      processedLine = processedLine.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');
      // Italic
      processedLine = processedLine.replace(/\*(.*?)\*/g, '<em class="text-blue-300 italic">$1</em>');
      
      // Regular paragraphs
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      }
      
      return (
        <p key={index} className="text-gray-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: processedLine }}>
        </p>
      );
    });
  };

  // Function to generate table of contents
  const generateTOC = (content: string) => {
    const lines = content.split('\n');
    const tocItems: React.ReactElement[] = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('## ')) {
        const title = line.substring(3);
        tocItems.push(
          <div key={index} className="flex items-center hover:text-blue-400 cursor-pointer transition-colors">
            <span className="text-blue-400 mr-2">▶</span>
            <span>{title}</span>
          </div>
        );
      } else if (line.startsWith('### ')) {
        const title = line.substring(4);
        tocItems.push(
          <div key={index} className="flex items-center ml-4 hover:text-green-400 cursor-pointer transition-colors text-gray-400">
            <span className="text-green-400 mr-2">▷</span>
            <span>{title}</span>
          </div>
        );
      }
    });
    
    return tocItems.length > 0 ? tocItems : (
      <div className="text-gray-500 italic">No sections found</div>
    );
  };

  // Blog post data (in a real app, this would come from a CMS or API)
  const blogPosts: Record<string, any> = {
    "vscode-portfolio-nextjs": {
      title: "Building a VSCode-Inspired Portfolio with Next.js",
      content: `# Building a VSCode-Inspired Portfolio with Next.js

## Introduction
Creating a portfolio that stands out in today's competitive tech landscape requires creativity and technical skill. In this post, I'll walk you through how I built this VSCode-inspired portfolio using Next.js, TypeScript, and Tailwind CSS.

## The Concept
The idea was simple: create a portfolio that feels like working in Visual Studio Code. This includes:
- File explorer sidebar
- Tabbed interface
- Terminal integration
- Code editor styling
- Authentic VSCode color schemes

## Technical Implementation

### 1. Project Structure
\`\`\`
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── skill/
│   ├── experience/
│   ├── project/
│   └── blog/
├── components/
│   ├── Body/
│   ├── Header/
│   ├── SideBar/
│   └── Terminal/
└── hooks/
\`\`\`

### 2. State Management with Zustand
I used Zustand for managing:
- Tab states
- Sidebar visibility
- Terminal state
- File selection

### 3. Route Synchronization
Created a custom hook to sync file tabs with Next.js routes:
\`\`\`typescript
export function useRouteSync() {
  const pathname = usePathname();
  const { setSelectedFile } = useTabStore();
  
  useEffect(() => {
    // Sync current route with selected file
  }, [pathname]);
}
\`\`\`

## Key Features

### Interactive File System
- Click files in sidebar to open tabs
- Close tabs with X button
- Navigate between open files

### Terminal Integration
- Execute "files" as commands
- View file contents in terminal
- Command history support

### Responsive Design
- Mobile-friendly layout
- Adaptive sidebar behavior
- Touch-friendly interactions

## Challenges Faced

### 1. Hydration Issues
Next.js hydration with Zustand required careful handling:
\`\`\`typescript
useEffect(() => {
  setHydrated(true);
}, []);

if (!hydrated) return null;
\`\`\`

### 2. Icon Persistence
Icons couldn't be serialized to localStorage, so I created a mapping system:
\`\`\`typescript
const getIconForFile = (fileName: string) => {
  const iconMap = {
    "rifki.md": <FaMarkdown className="text-blue-400" />,
    "skill.go": <SiGo className="text-cyan-400" />,
    // ...
  };
  return iconMap[fileName];
};
\`\`\`

### 3. Terminal Simulation
Creating a realistic terminal experience required:
- Command parsing
- Output formatting
- History management
- Proper scrolling behavior

## Performance Optimizations

### Code Splitting
Next.js automatic code splitting ensures fast page loads.

### Image Optimization
Using Next.js Image component for optimized loading.

### Lazy Loading
Components load only when needed.

## Future Enhancements

- [ ] Add more interactive terminal commands
- [ ] Implement file editing simulation
- [ ] Add syntax highlighting to code blocks
- [ ] Create more file types (JSON, CSS, etc.)
- [ ] Add dark/light theme toggle

## Conclusion
Building this VSCode-inspired portfolio was an exciting challenge that combined creativity with technical skills. The result is a unique, interactive showcase that demonstrates both my development abilities and attention to detail.

The project showcases my experience with:
- Next.js and React
- TypeScript
- State management
- UI/UX design
- Performance optimization

Feel free to explore the code and reach out if you have any questions!

---

*This portfolio is open source and available on GitHub. Contributions and feedback are welcome!*`,
      date: "2025-01-15",
      readTime: "5 min",
      tags: ["Next.js", "TypeScript", "Portfolio", "VSCode"],
      status: "Published"
    },
    "laravel-backend-best-practices": {
      title: "Backend Development Best Practices with Laravel",
      content: `# Backend Development Best Practices with Laravel

## Introduction
Laravel is one of the most popular PHP frameworks for backend development. In this comprehensive guide, I'll share essential practices for building scalable and maintainable backend APIs using Laravel.

## Project Structure

### 1. Follow MVC Architecture
\`\`\`
app/
├── Http/
│   ├── Controllers/
│   ├── Middleware/
│   └── Requests/
├── Models/
├── Services/
└── Repositories/
\`\`\`

### 2. Use Repository Pattern
\`\`\`php
interface UserRepositoryInterface
{
    public function create(array $data): User;
    public function findById(int $id): ?User;
    public function update(int $id, array $data): bool;
}
\`\`\`

## API Design

### RESTful Routes
\`\`\`php
Route::apiResource('users', UserController::class);
Route::apiResource('posts', PostController::class);
\`\`\`

### Response Consistency
\`\`\`php
return response()->json([
    'status' => 'success',
    'data' => $data,
    'message' => 'Operation completed successfully'
], 200);
\`\`\`

## Security Best Practices

### 1. Authentication with Sanctum
\`\`\`php
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [UserController::class, 'profile']);
});
\`\`\`

### 2. Input Validation
\`\`\`php
class CreateUserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
        ];
    }
}
\`\`\`

### 3. Rate Limiting
\`\`\`php
Route::middleware('throttle:60,1')->group(function () {
    // API routes
});
\`\`\`

## Database Optimization

### 1. Eloquent Relationships
\`\`\`php
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
\`\`\`

### 2. Query Optimization
\`\`\`php
// Eager loading to prevent N+1 queries
$users = User::with('posts')->get();

// Use select to limit columns
$users = User::select('id', 'name', 'email')->get();
\`\`\`

### 3. Database Indexes
\`\`\`php
Schema::table('posts', function (Blueprint $table) {
    $table->index(['user_id', 'created_at']);
});
\`\`\`

## Error Handling

### Global Exception Handler
\`\`\`php
public function render($request, Throwable $exception)
{
    if ($request->expectsJson()) {
        return response()->json([
            'status' => 'error',
            'message' => $exception->getMessage()
        ], 500);
    }
    
    return parent::render($request, $exception);
}
\`\`\`

## Testing

### Feature Tests
\`\`\`php
public function test_user_can_create_post()
{
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)
        ->postJson('/api/posts', [
            'title' => 'Test Post',
            'content' => 'Test content'
        ]);
    
    $response->assertStatus(201);
}
\`\`\`

## Performance Tips

### 1. Caching
\`\`\`php
$posts = Cache::remember('posts', 3600, function () {
    return Post::with('user')->get();
});
\`\`\`

### 2. Queue Jobs
\`\`\`php
dispatch(new SendEmailJob($user));
\`\`\`

### 3. Database Connection Optimization
\`\`\`php
'mysql' => [
    'options' => [
        PDO::ATTR_PERSISTENT => true,
    ],
],
\`\`\`

## Deployment Best Practices

### 1. Environment Configuration
\`\`\`bash
php artisan config:cache
php artisan route:cache
php artisan view:cache
\`\`\`

### 2. Zero-Downtime Deployment
Use tools like Laravel Envoy or Deployer for smooth deployments.

## Conclusion
Following these best practices will help you build robust, scalable Laravel applications. Remember to always:
- Write tests
- Use proper error handling
- Optimize database queries
- Implement proper security measures
- Monitor performance

Happy coding! 🚀`,
      date: "2024-12-20",
      readTime: "8 min",
      tags: ["Laravel", "PHP", "Backend", "API"],
      status: "Published"
    },
    "government-project-sindara": {
      title: "Working on Government Projects: SINDARA Experience",
      content: `# Working on Government Projects: SINDARA Experience

## Introduction
Working on government projects brings unique challenges and responsibilities. In this post, I'll share my experience developing SINDARA, a national education platform for Indonesia's Ministry of Education.

## Project Overview
SINDARA (Sistem Informasi Nasional Data Referensi Aplikasi) is a comprehensive education platform designed to:
- Manage national education data
- Provide unified access to educational resources
- Support government education initiatives
- Ensure data security and compliance

## Key Challenges

### 1. Security Requirements
Government projects require the highest security standards:
- Multi-layer authentication
- Data encryption at rest and in transit
- Regular security audits
- Compliance with national security protocols

### 2. Scale and Performance
The platform needed to handle:
- Millions of student records
- Thousands of concurrent users
- High availability requirements
- Disaster recovery capabilities

### 3. Regulatory Compliance
- Data privacy laws
- Government accessibility standards
- Documentation requirements
- Audit trail maintenance

## Technical Architecture

### Backend Infrastructure
\`\`\`
├── API Gateway
├── Authentication Service
├── Data Processing Layer
├── Database Cluster
└── Monitoring & Logging
\`\`\`

### Security Implementation
- JWT with refresh tokens
- Role-based access control (RBAC)
- API rate limiting
- Input sanitization
- SQL injection prevention

### Performance Optimization
- Database indexing strategies
- Caching layers (Redis)
- Load balancing
- CDN implementation
- Query optimization

## Development Process

### 1. Requirements Gathering
- Stakeholder meetings with ministry officials
- User research with educators
- Technical requirement analysis
- Security assessment

### 2. Agile Implementation
- 2-week sprints
- Regular stakeholder reviews
- Continuous integration/deployment
- Automated testing

### 3. Quality Assurance
- Code reviews
- Automated testing
- Security testing
- Performance testing
- User acceptance testing

## Lessons Learned

### 1. Communication is Key
- Regular updates to stakeholders
- Clear documentation
- Translation considerations (Bahasa Indonesia)
- Cultural sensitivity

### 2. Security First Mindset
- Implement security from day one
- Regular security reviews
- Incident response planning
- Staff security training

### 3. Scalability Planning
- Design for growth from the start
- Monitor performance metrics
- Plan for traffic spikes
- Implement graceful degradation

## Impact and Results

### Quantitative Metrics
- 2M+ registered users
- 99.9% uptime achieved
- <2s average response time
- Zero security incidents

### Qualitative Benefits
- Improved education data management
- Enhanced accessibility for remote areas
- Streamlined administrative processes
- Better decision-making capabilities

## Technical Stack
- **Backend**: Laravel, PHP 8.1
- **Database**: PostgreSQL, Redis
- **Infrastructure**: Docker, Kubernetes
- **Monitoring**: Prometheus, Grafana
- **CI/CD**: GitLab CI, Ansible

## Challenges and Solutions

### Challenge: Data Migration
**Problem**: Migrating legacy data from multiple systems
**Solution**: Created ETL pipelines with data validation and rollback capabilities

### Challenge: Performance at Scale
**Problem**: Slow queries with large datasets
**Solution**: Implemented database sharding and caching strategies

### Challenge: Security Compliance
**Problem**: Meeting strict government security requirements
**Solution**: Implemented comprehensive security framework with regular audits

## Future Considerations

### 1. Continuous Improvement
- Regular user feedback collection
- Performance monitoring
- Security updates
- Feature enhancements

### 2. Technology Evolution
- Cloud migration planning
- Microservices adoption
- AI/ML integration opportunities
- Mobile app development

## Conclusion
Working on SINDARA was an incredible experience that taught me:
- The importance of robust architecture
- Government project complexities
- Security-first development
- Large-scale system design
- Stakeholder management

This project reinforced my passion for building systems that make a real difference in people's lives. The opportunity to contribute to Indonesia's education sector was both challenging and rewarding.

## Key Takeaways for Developers
1. **Security is non-negotiable** in government projects
2. **Documentation** is crucial for compliance
3. **Performance testing** should start early
4. **Stakeholder communication** makes or breaks projects
5. **Continuous learning** is essential for complex systems

---

*Note: Specific technical details have been generalized to respect project confidentiality and security requirements.*`,
      date: "2024-11-30",
      readTime: "6 min",
      tags: ["Government", "Education", "Indonesia", "Backend"],
      status: "Published"
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="flex flex-col h-screen" style={{ overflow: 'hidden' }}>
        <div className="flex flex-1" style={{ overflow: 'hidden' }}>
          <Sidebar />
          <div className="flex flex-col flex-1" style={{ overflow: 'hidden' }}>
            <TabSection />
            <div className="flex-1 bg-neutral-900 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <h1 className="text-2xl mb-4">Blog Post Not Found</h1>
                <button 
                  onClick={() => router.push('/blog')}
                  className="text-blue-400 hover:text-blue-300"
                >
                  ← Back to Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const lineCount = post.content.split('\n').length + 10;

  return (
    <div className="flex flex-col h-screen" style={{ overflow: 'hidden' }}>
      <div className="flex flex-1" style={{ overflow: 'hidden' }}>
        <Sidebar />
        <div className="flex flex-col flex-1" style={{ overflow: 'hidden' }}>
          <TabSection />
          <div className="flex-1 bg-neutral-900" style={{ height: '100%' }}>
            <div className="h-full flex flex-col relative bg-neutral-900 text-gray-300 font-mono overflow-hidden">
              {/* Sticky Header */}
              <div className="sticky top-0 left-0 w-full bg-neutral-900 px-4 py-2 flex items-center z-50 border-b border-neutral-700">
                <button 
                  onClick={() => router.push('/blog')}
                  className="mr-3 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <VscArrowLeft className="w-4 h-4" />
                </button>
                <SiMarkdown className="mr-2 text-purple-400" />
                <span className="text-sm">src &gt; blog &gt; {slug}.md</span>
                <span className="ml-auto text-xs text-gray-500">
                  {post.status} • {post.readTime}
                </span>
                
                {/* Reading Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
              </div>

              {/* Layout */}
              <div className="flex items-start flex-1 overflow-y-auto">
                {/* VS Code-like Line Numbers */}
                <div className="w-12 bg-neutral-900 sticky top-0">
                  <Line line={lineCount} />
                </div>

                {/* Blog Post Content */}
                <div className="flex-1 p-6 pb-32">
                  {/* Meta Info */}
                  <div className="mb-6 p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h1 className="text-2xl font-bold text-white">{post.title}</h1>
                      <span className={`px-3 py-1 text-sm rounded ${
                        post.status === 'Published' 
                          ? 'bg-green-900 text-green-400 border border-green-600' 
                          : 'bg-yellow-900 text-yellow-400 border border-yellow-600'
                      }`}>
                        {post.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <VscCalendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <VscWatch className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mt-3">
                      <VscTag className="w-4 h-4 text-gray-400" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-neutral-700 text-blue-400 rounded border border-neutral-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Table of Contents */}
                  <div className="mb-8 p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                      <span className="text-purple-400 mr-2">📋</span>
                      Table of Contents
                    </h3>
                    <div className="space-y-1 text-sm">
                      {generateTOC(post.content)}
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden">
                    {/* Code Editor Header */}
                    <div className="bg-neutral-900 px-4 py-2 border-b border-neutral-700 flex items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="ml-3 text-xs text-gray-400">{slug}.md</span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="blog-content">
                        {renderContent(post.content)}
                      </div>
                    </div>
                  </div>

                  {/* Back Button */}
                  <div className="mt-12 pt-8 border-t border-neutral-700">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => router.push('/blog')}
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        <VscArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Blog</span>
                      </button>
                      
                      {/* Reading stats */}
                      <div className="text-xs text-gray-500 space-y-1">
                        <div>📖 Thanks for reading!</div>
                        <div>⏱️ Read in {post.readTime}</div>
                      </div>
                    </div>
                    
                    {/* Share/Feedback section */}
                    <div className="mt-6 p-4 bg-neutral-800 border border-neutral-700 rounded-lg">
                      <div className="text-center">
                        <h4 className="text-white font-bold mb-2">Found this helpful?</h4>
                        <p className="text-gray-400 text-sm mb-4">
                          I&apos;d love to hear your thoughts or answer any questions!
                        </p>
                        <div className="flex justify-center space-x-4">
                          <span className="px-3 py-1 bg-neutral-700 text-blue-400 rounded text-xs border border-neutral-600">
                            💬 Comment
                          </span>
                          <span className="px-3 py-1 bg-neutral-700 text-green-400 rounded text-xs border border-neutral-600">
                            📧 Email
                          </span>
                          <span className="px-3 py-1 bg-neutral-700 text-purple-400 rounded text-xs border border-neutral-600">
                            🔗 Share
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
