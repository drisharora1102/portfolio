import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Star } from 'lucide-react';

const education = [
  {
    school: 'DePaul University',
    location: 'Chicago, IL',
    degree: 'Master of Science in Computer Science',
    concentration: 'Data Science',
    period: 'Jan 2025 – Jun 2026',
    gpa: '4.0',
  },
  {
    school: 'Amity University',
    location: 'Uttar Pradesh, India',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    concentration: 'Data Science and Analytics',
    period: 'Sep 2020 – Jun 2024',
    gpa: '9.42/10',
  },
];

export default function About() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary animate-pulse" />
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <Card className="group p-6 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {edu.school}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1.5 group-hover:text-foreground transition-colors">
                        <motion.span 
                          className="w-1 h-1 rounded-full bg-muted-foreground group-hover:bg-primary"
                          whileHover={{ scale: 2 }}
                        />
                        {edu.location}
                      </p>
                    </div>
                    <motion.div 
                      className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-mono text-primary h-fit"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(147, 51, 234, 0.2)' }}
                    >
                      {edu.period}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-foreground font-medium group-hover:translate-x-1 transition-transform duration-300">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Concentration: {edu.concentration}
                    </p>
                  </div>

                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-chart-3/20 to-chart-3/10 border border-chart-3/30 w-fit"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' }}
                  >
                    <Star className="w-4 h-4 text-chart-3" />
                    <span className="text-sm font-mono text-chart-3 font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
