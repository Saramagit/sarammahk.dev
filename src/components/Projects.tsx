import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Large Language Model Framework",
    description: "Open-source framework for efficient training and inference of large language models with custom attention mechanisms.",
    tech: ["PyTorch", "CUDA", "Triton", "Python"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Multimodal Vision-Language Model",
    description: "Research project combining vision transformers with LLMs for image understanding and generation tasks.",
    tech: ["JAX", "Flax", "Transformers", "Diffusion"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Real-time Object Detection System",
    description: "Production-ready object detection pipeline using custom YOLOv8 architecture with TensorRT optimization.",
    tech: ["PyTorch", "TensorRT", "ONNX", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Neural Architecture Search Platform",
    description: "Automated ML platform for discovering optimal neural architectures using evolutionary algorithms and reinforcement learning.",
    tech: ["PyTorch", "Ray", "MongoDB", "React"],
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
