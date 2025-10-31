import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Download, Code2 } from 'lucide-react';
import resumePdf from '@assets/Drishti Arora DePaul University_1759465873986.pdf';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Data Scientist | ML Researcher | AI Innovator';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Drishti_Arora_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-300% animate-gradient">
                Drishti Arora
              </span>
            </h1>

            <div className="h-8 mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground font-mono">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-primary ml-1"
                />
              </p>
            </div>

            <p className="text-lg text-foreground/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Turning messy data into money making decisions
            </p>

            <div className="flex justify-center mb-12">
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 backdrop-blur-sm"
                data-testid="button-download-resume"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="mailto:drishtiarora1102@gmail.com"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border hover-glow group"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/aroradrishti/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border hover-glow group"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/aroradrishti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border hover-glow group"
                data-testid="link-github"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://leetcode.com/u/drishtiarora1102/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border hover-glow group"
                data-testid="link-leetcode"
              >
                <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
