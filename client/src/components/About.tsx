import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

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

const achievements = [
  'Awarded 100% Merit Scholarship throughout B.Tech program; ranked first in the department (Gold Medalist)',
  'Awarded "Best Leadership Quality" Salver',
  'Featured in a Salesforce promotional video for the Virtual Internship Program',
  'Secured the prestigious AWS AI & ML Scholarship for AI Programming with Python Nanodegree; selected from a pool of 2000 shortlisted candidates worldwide',
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
            <GraduationCap className="w-8 h-8 text-primary" />
            Education
          </h2>

          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 backdrop-blur-md bg-card/50 border-card-border hover-elevate">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {edu.school}
                      </h3>
                      <p className="text-muted-foreground text-sm">{edu.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-foreground font-medium mb-1">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Concentration: {edu.concentration}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-sm font-mono text-primary font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 flex items-center gap-3">
            <Award className="w-8 h-8 text-accent" />
            Achievements
          </h2>

          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                <p className="text-foreground/90 leading-relaxed">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
