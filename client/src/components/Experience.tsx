import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    role: 'Research Assistant',
    company: 'DePaul University',
    supervisor: 'Prof. Bamshad Mobasher & Prof. Roselyne Tchoua',
    period: 'Apr 2025 - present',
    project: 'ReDDDoT (Responsible Design, Development and Deployment of Technologies) Platform',
    achievements: [
      'Designed and implemented a recommender system using Graph Neural Networks and Knowledge Graphs to match migrants with essential resources',
      'Built an entity-linking pipeline for migrant profiles, integrating multilingual data and created an interactive dashboard using React to visualize resource connections and recommendation pathways',
      'Improved matching efficiency by 35%, reducing manual intervention in connecting migrants to services',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'DePaul University',
    supervisor: 'Prof. Casey Bennett',
    period: 'Mar 2025 - present',
    project: 'Conversational Dementia Speech System with Social Robots',
    achievements: [
      'Developed biomarker detection modules to analyze speech impairments for early dementia diagnosis, annotated the clinical speech datasets and enhanced detection performance by ~18% over baseline models',
      'Engineered and deployed an LLM integrating the biomarkers on QT Robot via ROS for real-time patient interaction',
      'Implemented sound source triangulation on QT Robot to accurately localize patient speech and improved interactive response precision',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Haier Appliances India Pvt Ltd',
    location: 'Uttar Pradesh, India',
    period: 'Jun 2023 – Jul 2023',
    achievements: [
      'Analyzed sales data resulting in a 5% increase in profit margins by optimizing pricing strategies and identifying untapped target markets',
      'Developed data-driven recommendations that improved product positioning and promotional campaigns contributing to a 12% growth in sales',
    ],
  },
  {
    role: 'Developer Intern',
    company: 'Salesforce',
    location: 'Virtual Internship',
    period: 'May 2023 – Jul 2023',
    achievements: [
      'Gained hands-on experience in developing and customizing Salesforce applications through comprehensive virtual training',
      'Engineered a custom case escalation trigger using Apex that automatically routed high-priority customer support tickets to senior technicians, reducing average response time for critical issues by 20%',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'MedValue Offshore Solutions, Inc',
    location: 'IL, USA',
    period: 'Jan 2023 – Mar 2023',
    achievements: [
      'Developed a classification model to automatically triage medical insurance claims by analyzing unstructured text in patient reports',
      'Streamlined the claims processing workflow with this model, directly contributing to a 15% increase in decision-making efficiency',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'rSTAR Technologies',
    location: 'New Delhi, India',
    period: 'Aug 2022 – Nov 2022',
    achievements: [
      'Designed and deployed a conversational AI chatbot using NLP techniques to automate responses for customer service inquiries',
      'Resolved over 30% of initial queries leading to a 15% reduction in support ticket volume',
    ],
  },
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary animate-pulse" />
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-primary/50 hidden md:block" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="absolute -left-1.5 top-8 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block z-10"
                    whileHover={{ scale: 1.5, boxShadow: '0 0 12px rgba(147, 51, 234, 0.6)' }}
                  />

                  <Card className="group md:ml-8 p-0 overflow-hidden backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.01]">
                    <div
                      className="cursor-pointer p-6 hover-elevate"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      data-testid={`experience-${index}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <motion.div 
                              className="flex-shrink-0"
                              animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {expandedIndex === index ? (
                                <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                              )}
                            </motion.div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-primary font-medium text-lg group-hover:translate-x-2 transition-transform duration-300">{exp.company}</p>
                            {exp.supervisor && (
                              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                {exp.supervisor}
                              </p>
                            )}
                            {exp.location && (
                              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{exp.location}</p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-mono text-primary group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                        {exp.period}
                      </div>

                      {exp.project && (
                        <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-accent/5 border-l-2 border-accent rounded-r-md group-hover:from-accent/20 group-hover:to-accent/10 group-hover:border-l-4 transition-all duration-300">
                          <p className="text-sm font-medium text-accent">
                            {exp.project}
                          </p>
                        </div>
                      )}
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? 'auto' : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border/50">
                        <div className="space-y-3 mt-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div 
                              key={achIndex} 
                              className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                            >
                              <motion.div 
                                className="w-1.5 h-1.5 rounded-full bg-chart-3 mt-2 flex-shrink-0"
                                whileHover={{ scale: 2, backgroundColor: 'rgb(var(--accent))' }}
                              />
                              <p className="text-sm text-foreground/90 leading-relaxed group-hover/item:text-foreground transition-colors">
                                {achievement}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
