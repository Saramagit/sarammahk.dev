import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team workspaces, and productivity analytics.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content generation platform leveraging GPT models for marketing copy and creative writing.",
    tech: ["React", "Python", "FastAPI", "OpenAI API"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather dashboard with forecasts, historical data visualization, and location-based alerts.",
    tech: ["Vue.js", "D3.js", "Express", "Weather API"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-large transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-gradient-secondary hover:opacity-90" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
