import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead development of cloud-native applications using React, Node.js, and AWS. Mentor junior developers and architect scalable solutions.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led team of 5 developers on major platform redesign",
      "Implemented CI/CD pipeline reducing deployment time by 75%"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client-facing web applications. Collaborated with design and product teams.",
    achievements: [
      "Built responsive e-commerce platform handling 10k+ daily users",
      "Integrated third-party APIs and payment systems",
      "Improved code coverage from 40% to 85%"
    ]
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2018 - 2019",
    description: "Contributed to front-end development of SaaS product. Learned agile methodologies and modern development practices.",
    achievements: [
      "Developed reusable component library",
      "Participated in code reviews and sprint planning",
      "Assisted in migration from legacy to modern stack"
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
