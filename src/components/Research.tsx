import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText, Award } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "Efficient Attention Mechanisms for Large Language Models",
      authors: "Your Name, et al.",
      venue: "NeurIPS 2024",
      year: "2024",
      citations: 45,
      link: "#",
      tags: ["LLM", "Attention", "Efficiency"]
    },
    {
      title: "Multimodal Learning with Vision-Language Transformers",
      authors: "Your Name, et al.",
      venue: "CVPR 2024",
      year: "2024",
      citations: 32,
      link: "#",
      tags: ["Multimodal", "Vision-Language", "Transformers"]
    },
    {
      title: "Neural Architecture Search for Edge Devices",
      authors: "Your Name, et al.",
      venue: "ICML 2023",
      year: "2023",
      citations: 78,
      link: "#",
      tags: ["NAS", "Edge Computing", "Optimization"]
    }
  ];

  const ongoingResearch = [
    {
      title: "Federated Learning for Privacy-Preserving AI",
      description: "Developing novel federated learning algorithms that maintain model performance while ensuring differential privacy.",
      status: "In Progress",
      tags: ["Federated Learning", "Privacy", "Distributed Systems"]
    },
    {
      title: "Few-Shot Learning for Domain Adaptation",
      description: "Exploring meta-learning approaches for rapid adaptation to new domains with limited labeled data.",
      status: "In Progress",
      tags: ["Few-Shot Learning", "Meta-Learning", "Transfer Learning"]
    }
  ];

  const awards = [
    {
      title: "Best Paper Award",
      organization: "NeurIPS 2024",
      year: "2024",
      description: "Recognition for outstanding research contribution in efficient transformer architectures"
    },
    {
      title: "Outstanding Reviewer",
      organization: "ICML 2023",
      year: "2023",
      description: "Acknowledged for exceptional peer review contributions"
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
            <TabsTrigger value="awards">Awards & Recognition</TabsTrigger>
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
