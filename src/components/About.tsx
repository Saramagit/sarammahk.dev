const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I'm an AI researcher and engineer specializing in deep learning, natural language processing, 
            and computer vision. My work focuses on developing novel architectures and scalable ML systems 
            that push the boundaries of what's possible with artificial intelligence.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            With expertise spanning research and production deployment, I bridge the gap between 
            cutting-edge AI research and real-world applications. I'm passionate about transformer 
            architectures, multimodal learning, and building efficient inference systems.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            My contributions include published papers in top-tier conferences, open-source ML frameworks, 
            and production systems serving millions of users. I stay at the forefront of AI advancement 
            through continuous research and collaboration with leading institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
