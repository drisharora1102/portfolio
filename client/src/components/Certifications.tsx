import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  'IBM Data Science Professional Certificate',
  'Google Data Analytics Professional Certificate',
  'Developer Virtual Experience Program, Accenture',
  'Data Analytics Consulting Virtual Internship, KPMG',
  'DSE200X: Python for Data Science, UC San Diego',
  'CCNAv7: Introduction to Networks, Cisco',
  'Data Analytics & Visualization Virtual Experience, Accenture',
  'HKU100X: Blockchain and Fintech, HKU',
];

const achievements = [
  'Awarded 100% Merit Scholarship throughout B.Tech program; ranked first in the department (Gold Medalist)',
  'Awarded "Best Leadership Quality" Salver',
  'Featured in a Salesforce promotional video for the Virtual Internship Program',
  'Secured the prestigious AWS AI & ML Scholarship for AI Programming with Python Nanodegree; selected from a pool of 2000 shortlisted candidates worldwide',
];

export default function Certifications() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12">Certifications & Achievements</h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="p-8 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover-scale">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-accent icon-spin-hover" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex gap-3 items-start p-4 rounded-lg bg-gradient-to-r from-background/50 to-card/30 border border-border/30 hover:border-accent/30 transition-all hover-lift cursor-pointer"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="p-8 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover-scale">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-chart-4 icon-spin-hover" />
                Achievements
              </h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex gap-3 items-start p-4 rounded-lg bg-gradient-to-r from-background/50 to-card/30 border border-border/30 hover:border-chart-4/30 transition-all hover-lift cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-chart-4 mt-2 flex-shrink-0" />
                    <p className="text-foreground/90 leading-relaxed">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
