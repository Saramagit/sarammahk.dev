import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Transformer-based Network Intrusion Detection System (TNIDS)",
    description: "Developed a NIDS optimized for IoT environments, achieving high accuracy and F1 scores by exploring various transformer architectures and classification heads.",
    tech: ["PyTorch", "Transformers", "Python", "Big Data"],
    github: "#",
    demo: "#"
  },
  {
    title: "TNIDS Extension - Heterogeneous Computing Architecture",
    description: "Extended TNIDS with high-performance AI computing using CPU/GPU heterogeneous architecture for real-time Big Data intrusion detection with improved performance and energy efficiency.",
    tech: ["PyTorch", "CUDA", "Transformers", "Big Data Analytics"],
    github: "#",
    demo: "#"
  },
  {
    title: "Deep Neural Network for Contractor Selection",
    description: "Implemented DNN at PledgX to analyze multidimensional contractor performance data, improving selection accuracy by 20% through peer group categorization.",
    tech: ["TensorFlow", "Python", "Pandas", "NumPy"],
    github: "#",
    demo: "#"
  },
  {
    title: "Hybrid Recommender System",
    description: "Developed a hybrid recommender system for PostBeyond specializing in content distribution and employee social sharing.",
    tech: ["Python", "Scikit-learn", "Matrix Factorization"],
    github: "#",
    demo: "#"
  },
  {
    title: "Time Series Prediction for Retail Operations",
    description: "Machine learning regression model for Hudson's Bay Company resulting in 2% quality increase and 10% cost reduction.",
    tech: ["Python", "Scikit-learn", "R", "Statistical Analysis"],
    github: "#",
    demo: "#"
  },
  {
    title: "Out-of-Distribution Detection Research",
    description: "Advanced research focused on enhancing model robustness through out-of-distribution detection techniques.",
    tech: ["PyTorch", "Python", "Deep Learning"],
    github: "#",
    demo: "#"
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
