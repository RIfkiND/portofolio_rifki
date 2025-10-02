import { BlogPost1Content } from './BlogPost1';
import { BlogPost2Content } from './BlogPost2';
import { BlogPost3Content } from './BlogPost3';
import { BlogPost4Content } from './BlogPost4';
import { BlogPost5Content } from './BlogPost5';

export const blogPostContents: Record<string, string> = {
  'building-scalable-backend-nestjs-postgresql': BlogPost1Content,
  'modern-frontend-react-typescript': BlogPost2Content,
  'database-design-patterns-modern-applications': BlogPost3Content,
  'api-design-best-practices-restful-services': BlogPost4Content,
  'devops-essentials-docker-cicd-deployment': BlogPost5Content,
};

export {
  BlogPost1Content,
  BlogPost2Content,
  BlogPost3Content,
  BlogPost4Content,
  BlogPost5Content,
};