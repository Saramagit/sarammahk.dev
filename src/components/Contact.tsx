import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-foreground/80 mb-8">
            I'm always interested in hearing about new opportunities, collaborations, or just
            having a chat about technology. Feel free to reach out!
          </p>
          <Button
            size="lg"
            className="bg-gradient-secondary hover:opacity-90 text-lg px-8"
            asChild
          >
            <a href="mailto:john.anderson@email.com">
              <Mail className="mr-2" size={20} />
              Send me an email
            </a>
          </Button>
          
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-gradient-secondary hover:text-secondary-foreground transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-gradient-secondary hover:text-secondary-foreground transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-gradient-secondary hover:text-secondary-foreground transition-all"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-foreground/60">© 2024 John Anderson. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
