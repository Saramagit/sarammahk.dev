import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Artificial Intelligence Researcher",
    company: "Leni (Internship)",
    period: "Oct 2025 - Present",
    description: "Working on the development of Leni, an AI-powered real estate analytics assistant designed to automate insight generation and decision making for multifamily and commercial properties.",
    achievements: [
      "Building AI-powered analytics assistant for real estate market analysis",
      "Implementing automated insight generation for property investment decisions",
      "Working with N8n, PostgreSQL, and advanced AI technologies"
    ]
  },
  {
    title: "Professor - Machine Learning & Business Intelligence",
    company: "Humber Polytechnic Institute (Longo Faculty of Business)",
    period: "May 2023 - Current",
    description: "Developed and delivered coursework for BIA 5302 and BIA 5402, focusing on foundational and advanced Machine Learning concepts.",
    achievements: [
      "Continuously updated ML curriculum to align with rapid AI advancements",
      "Created innovative learning environment encouraging fresh ideas and unique student projects",
      "Fostered critical thinking and practical application of ML concepts"
    ]
  },
  {
    title: "Machine Learning Intern",
    company: "PledgX",
    period: "June 2023 - May 2024",
    description: "Implemented Deep Neural Networks to enhance contractor selection by analyzing complex, multidimensional performance data.",
    achievements: [
      "Improved contractor selection accuracy by 20% using DNN-based peer grouping",
      "Conducted statistical analyses on large datasets using R and Python",
      "Created visualizations using Tableau and PowerBI to communicate key findings"
    ]
  },
  {
    title: "PhD Candidate - Electrical and Computer Engineering",
    company: "Toronto Metropolitan University",
    period: "2022 - 2026",
    description: "Research focus on Recommender Systems, Deep Learning, Generative AI, LLMs, and Transformer-Based Models.",
    achievements: [
      "Developed Transformer-based Network Intrusion Detection System (TNIDS) optimized for IoT environments",
      "Built high-performance AI computing architecture using heterogeneous computing (CPU/GPU) for real-time intrusion detection",
      "Advanced research in out-of-distribution detection for enhanced model robustness"
    ]
  },
  {
    title: "Junior Data Scientist",
    company: "Hudson's Bay Company (The Bay)",
    period: "March 2018 - March 2021",
    description: "Developed scalable data analyses and machine learning models for retail operations.",
    achievements: [
      "Implemented ML regression model for time series prediction",
      "Achieved 2% increase in quality and 10% reduction in operating costs",
      "Utilized statistical techniques to develop prototypes and scalable analyses"
    ]
  },
  {
    title: "Principal Consultant",
    company: "PostBeyond Inc.",
    period: "Sept 2017 - Feb 2018",
    description: "Developed a hybrid recommender system for a client specializing in content distribution and employee social sharing.",
    achievements: [
      "Built hybrid recommender system combining collaborative and content-based filtering",
      "Specialized in content distribution and employee advocacy platforms",
      "Implemented personalized content recommendation algorithms"
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
