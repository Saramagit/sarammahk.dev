const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I'm a PhD candidate in Electrical and Computer Engineering at Toronto Metropolitan University, 
            specializing in Recommender Systems, Deep Learning, Generative AI, LLMs, and Transformer-Based Models. 
            With over 10 years of experience in academia and industry, I bridge the gap between cutting-edge AI 
            research and real-world applications.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            My research focuses on developing novel transformer architectures for network intrusion detection, 
            out-of-distribution detection, and recommender systems. I've worked on optimizing AI models for 
            IoT environments using heterogeneous computing (CPU/GPU) and exploring advanced techniques in 
            computer vision, NLP, and privacy preservation.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            As an educator, I'm passionate about making AI accessible and engaging. I've taught courses on 
            Machine Learning, Business Intelligence, Financial Analytics, and Data Science at Humber College 
            and St. Clair's College, continuously updating curricula to reflect the rapid advancements in the field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
