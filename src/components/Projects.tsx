import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Transformer-based Network Intrusion Detection System (TNIDS)",
    description: "Developed a NIDS optimized for IoT environments, achieving high accuracy and F1 scores by exploring various transformer architectures and classification heads.",
    tech: ["PyTorch", "Transformers", "Python", "Big Data"]
  },
  {
    title: "TNIDS Extension - Heterogeneous Computing Architecture",
    description: "Extended TNIDS with high-performance AI computing using CPU/GPU heterogeneous architecture for real-time Big Data intrusion detection with improved performance and energy efficiency.",
    tech: ["PyTorch", "CUDA", "Transformers", "Big Data Analytics"]
  },
  {
    title: "Deep Neural Network for Contractor Selection",
    description: "Implemented DNN at PledgX to analyze multidimensional contractor performance data, improving selection accuracy by 20% through peer group categorization.",
    tech: ["TensorFlow", "Python", "Pandas", "NumPy"]
  },
  {
    title: "Hybrid Recommender System",
    description: "Developed a hybrid recommender system for PostBeyond specializing in content distribution and employee social sharing.",
    tech: ["Python", "Scikit-learn", "Matrix Factorization"]
  },
  {
    title: "Time Series Prediction for Retail Operations",
    description: "Machine learning regression model for Hudson's Bay Company resulting in 2% quality increase and 10% cost reduction.",
    tech: ["Python", "Scikit-learn", "R", "Statistical Analysis"]
  },
  {
    title: "Out-of-Distribution Detection Research",
    description: "Advanced research focused on enhancing model robustness through out-of-distribution detection techniques.",
    tech: ["PyTorch", "Python", "Deep Learning"]
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
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
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
