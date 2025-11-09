import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior AI Research Engineer",
    company: "AI Research Lab",
    period: "2022 - Present",
    description: "Leading research on large language models and multimodal AI systems. Publishing in top-tier conferences and deploying models at scale.",
    achievements: [
      "Published 3 papers at NeurIPS and ICML on efficient transformers",
      "Built distributed training pipeline reducing training time by 70%",
      "Led team developing novel attention mechanism with 40% efficiency gains"
    ]
  },
  {
    title: "Machine Learning Engineer",
    company: "Tech Innovation Corp",
    period: "2020 - 2022",
    description: "Developed and deployed production ML systems for computer vision and NLP applications serving 10M+ users.",
    achievements: [
      "Architected real-time inference system handling 100k requests/sec",
      "Implemented BERT-based model improving accuracy by 25%",
      "Optimized model deployment reducing latency from 500ms to 50ms"
    ]
  },
  {
    title: "AI Research Intern",
    company: "University AI Lab",
    period: "2019 - 2020",
    description: "Conducted research on neural architecture search and automated machine learning under leading AI researchers.",
    achievements: [
      "Co-authored paper on NAS algorithms accepted at CVPR",
      "Developed PyTorch framework for automated hyperparameter tuning",
      "Contributed to open-source AutoML library with 2k+ stars"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg">
                    <Briefcase className="text-secondary-foreground" size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/70">
                      <span className="text-secondary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
