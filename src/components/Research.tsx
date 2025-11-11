import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Award } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "LLM4Rec: A Comprehensive Survey on the Integration of Large Language Models in Recommender Systems—Approaches, Applications and Challenges",
      authors: "S Shehmir, R Kashef",
      venue: "Future Internet 2025: Deep Learning in Recommender Systems",
      year: "2025",
      citations: 5,
      link: "https://scholar.google.ca/citations?user=IKJC5usAAAAJ&hl=en",
      tags: ["LLMs", "Recommender Systems", "Survey", "Deep Learning"]
    },
    {
      title: "Intrusion Detection: Architecture, Classification Heads, and Transformer",
      authors: "N Ibrahim, S Shehmir, A Yadav, R Kashef",
      venue: "Proceedings of IEMTRONICS 2024",
      year: "2025",
      citations: 2,
      link: "https://scholar.google.ca/citations?user=IKJC5usAAAAJ&hl=en",
      tags: ["Intrusion Detection", "Transformers", "IoT", "Cybersecurity"]
    },
    {
      title: "Navigating the Cyber Threat Landscape: An In-Depth Analysis of Attack Detection within IoT Ecosystems",
      authors: "RK Samar Aboulela, Nourhan Ibrahim, Sarama Shehmir, Aman Yadav",
      venue: "AI 5 (2), 704-732",
      year: "2024",
      citations: 16,
      link: "https://scholar.google.ca/citations?user=IKJC5usAAAAJ&hl=en",
      tags: ["Cyber Threat", "IoT", "Attack Detection", "Deep Learning"]
    },
    {
      title: "Impact of Covid-19 on Agile Software Development",
      authors: "AA Zaveri, J Jaafar, E Yafi, S Shehmir",
      venue: "Board Diversity and Corporate Governance, 69-84",
      year: "2024",
      citations: 1,
      link: "https://scholar.google.ca/citations?user=IKJC5usAAAAJ&hl=en",
      tags: ["Agile", "Software Development", "COVID-19"]
    },
    {
      title: "AIRA: An Intelligent Recommendation Agent Application for Movies",
      authors: "AA Zaveri, R Mashood, S Shehmir, M Parveen, N Sami, M Nazar",
      venue: "Journal of Informatics and Web Engineering 2 (2), 72-89",
      year: "2023",
      citations: 15,
      link: "https://scholar.google.ca/citations?user=IKJC5usAAAAJ&hl=en",
      tags: ["Recommender Systems", "Intelligent Agents", "Movies", "AI"]
    }
  ];

  const ongoingResearch = [
    {
      title: "TNIDS Extension: Heterogeneous Computing for Real-Time Intrusion Detection",
      description: "Building on the Transformer-based Network Intrusion Detection System optimized for IoT, developing high-performance AI architecture using CPU/GPU heterogeneous computing for Big Data processing in real-time. Demonstrated significant improvements in performance, accuracy, and energy efficiency.",
      status: "In Progress",
      tags: ["Transformers", "Heterogeneous Computing", "Big Data", "Cybersecurity"]
    },
    {
      title: "Out-of-Distribution Detection for Enhanced Model Robustness",
      description: "Advanced research focused on detecting out-of-distribution samples to enhance model robustness and reliability in real-world AI deployments.",
      status: "In Progress",
      tags: ["Out-of-Distribution", "Model Robustness", "Deep Learning"]
    },
    {
      title: "Recommender Systems with Transformers and LLMs",
      description: "Exploring novel transformer-based architectures and large language models for next-generation recommender systems with improved personalization and explainability.",
      status: "In Progress",
      tags: ["Recommender Systems", "LLMs", "Transformers", "Generative AI"]
    }
  ];

  const awards = [
    {
      title: "PhD Candidate",
      organization: "Toronto Metropolitan University",
      year: "2022-2026",
      description: "Full-time doctoral research in Recommender Systems, Deep Learning, Generative AI, LLMs, and Transformer-Based Models"
    },
    {
      title: "MS in Computer Science",
      organization: "Toronto Metropolitan University",
      year: "2016-2021",
      description: "Master's degree with focus on advanced machine learning and artificial intelligence"
    },
    {
      title: "MS in Software Engineering",
      organization: "Bahria University, Karachi",
      year: "2011-2013",
      description: "Master's degree with specialization in software engineering and system design"
    }
  ];

  return (
    <section id="research" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Publications, ongoing research projects, and contributions to the AI research community
          </p>
        </div>

        <Tabs defaultValue="publications" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="publications">Publications</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing Research</TabsTrigger>
            <TabsTrigger value="awards">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="publications" className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-primary" />
                        {pub.title}
                      </CardTitle>
                      <CardDescription>
                        {pub.authors} • {pub.venue} • {pub.year}
                      </CardDescription>
                    </div>
                    <a
                      href={pub.link}
                      className="text-primary hover:text-secondary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-sm text-muted-foreground">
                      Citations: {pub.citations}
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {pub.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="ongoing" className="space-y-6">
            {ongoingResearch.map((research, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    <span>{research.title}</span>
                    <Badge variant="outline" className="text-primary border-primary">
                      {research.status}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{research.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    {research.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="awards" className="space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    {award.title}
                  </CardTitle>
                  <CardDescription>
                    {award.organization} • {award.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Research;
