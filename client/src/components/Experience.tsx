import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Briefcase, CheckCircle2 } from 'lucide-react';
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
            <Briefcase className="w-8 h-8 text-primary" />
            Work Experience
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute left-8 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <Card className="md:ml-20 p-6 backdrop-blur-md bg-card/50 border-card-border hover-elevate">
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      data-testid={`experience-${index}`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                          {exp.supervisor && (
                            <p className="text-sm text-muted-foreground mt-1">
                              Under {exp.supervisor}
                            </p>
                          )}
                          {exp.location && (
                            <p className="text-sm text-muted-foreground">{exp.location}</p>
                          )}
                        </div>
                        <div className="text-sm font-mono text-muted-foreground flex-shrink-0">
                          {exp.period}
                        </div>
                      </div>

                      {exp.project && (
                        <div className="mb-4 px-3 py-2 bg-accent/10 border border-accent/20 rounded-md">
                          <p className="text-sm text-accent font-medium">
                            Project: {exp.project}
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
                      <div className="mt-4 space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 items-start">
                            <CheckCircle2 className="w-4 h-4 text-chart-3 mt-1 flex-shrink-0" />
                            <p className="text-sm text-foreground/90 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
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
