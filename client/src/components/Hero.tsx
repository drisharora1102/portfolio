import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

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

  const stats = [
    { label: 'Publications', value: '8' },
    { label: 'Projects', value: '3' },
    { label: 'GPA', value: '4.0' },
  ];

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-muted-foreground mb-4"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Chicago, IL</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
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

            <p className="text-lg text-foreground/90 mb-8 leading-relaxed max-w-2xl">
              MS in Computer Science at DePaul University, specializing in Data Science. 
              Passionate about developing AI solutions for healthcare and building intelligent systems 
              that make a real-world impact.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                size="lg" 
                className="gap-2"
                data-testid="button-view-projects"
                onClick={() => console.log('View Projects clicked')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 backdrop-blur-sm"
                data-testid="button-download-resume"
                onClick={() => console.log('Download Resume clicked')}
              >
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="mailto:darora1@depaul.edu"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover-elevate active-elevate-2 rounded-md border border-border"
                data-testid="link-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="backdrop-blur-md bg-card/50 border border-card-border rounded-lg p-6 hover-elevate"
                >
                  <div className="text-4xl font-bold font-serif bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
