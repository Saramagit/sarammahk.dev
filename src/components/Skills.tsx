import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Deep Learning & AI",
    skills: ["PyTorch", "TensorFlow", "RAG", "CAG", "LLMs", "Scikit-learn"]
  },
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "SQL", "Shell Scripting", "JavaScript"]
  },
  {
    category: "Data Science & Analytics",
    skills: ["Pandas", "NumPy", "SciPy", "Tableau", "PowerBI", "Seaborn", "Shiny"]
  },
  {
    category: "Tools & Platforms",
    skills: ["N8n", "PostgreSQL", "Git", "AWS Cloud", "Google Cloud", "Docker", "GitLab"]
  },
  {
    category: "Specializations",
    skills: ["Computer Vision", "NLP", "Recommender Systems", "Privacy Preservation", "Big Data"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-primary mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="text-foreground/80 hover:text-secondary transition-colors cursor-default"
                    >
                      {skill}
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

export default Skills;
