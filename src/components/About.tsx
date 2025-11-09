const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            I'm a passionate full stack developer with over 5 years of experience building
            scalable web applications. I specialize in React, Node.js, and cloud technologies,
            with a keen eye for creating intuitive user experiences.
          </p>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            My approach combines technical excellence with creative problem-solving. I believe
            in writing clean, maintainable code and staying current with industry best practices
            and emerging technologies.
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed">
            When I'm not coding, you'll find me contributing to open-source projects, writing
            technical articles, or exploring new frameworks and tools to expand my skill set.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
