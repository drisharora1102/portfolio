import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Cpu, Code, Database, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Domain Expertise',
    icon: Cpu,
    color: 'text-primary',
    skills: [
      'Data Science & Analytics',
      'Machine Learning',
      'Deep Learning',
      'LLMs',
      'Statistical Modeling',
      'Data Visualization',
      'Human-Robot Interaction (ROS)',
      'Conversational Speech Systems',
      'Recommender Systems',
      'Chatbot Development',
      'Algorithm Design',
      'Database Management',
    ],
  },
  {
    title: 'Technical Skills',
    icon: Code,
    color: 'text-accent',
    skills: [
      'Python',
      'R',
      'Java',
      'C/C++',
      'SQL',
      'Scikit-learn',
      'PyTorch',
      'Keras/TensorFlow',
      'Hugging Face Transformers',
      'NLP',
      'Computer Vision',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: Database,
    color: 'text-chart-3',
    skills: [
      'MySQL',
      'Oracle Database',
      'Neo4J',
      'Tableau',
      'Matplotlib',
      'Seaborn',
      'Plotly',
      'Flask',
      'ROS',
      'Git/GitHub',
    ],
  },
  {
    title: 'Soft Skills',
    icon: Lightbulb,
    color: 'text-chart-4',
    skills: [
      'Problem-Solving',
      'Critical Thinking',
      'Communication',
      'Data Storytelling',
      'Business Acumen',
      'Leadership',
    ],
  },
];

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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory
    ? skillCategories.filter((cat) => cat.title === selectedCategory)
    : skillCategories;

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Skills & Expertise</h2>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card/50 text-muted-foreground border border-border hover-elevate'
              }`}
              data-testid="filter-all"
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category.title
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-card/50 text-muted-foreground border border-border hover-elevate'
                }`}
                data-testid={`filter-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover:border-primary/30 transition-all duration-300 hover-elevate h-full">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br from-${category.color.split('-')[1]}/20 to-${category.color.split('-')[1]}/10 border border-${category.color.split('-')[1]}/30`}>
                        <Icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + skillIndex * 0.02 }}
                        >
                          <Badge
                            variant="outline"
                            className="font-mono text-xs px-3 py-1.5 border-border/50 bg-background/40 hover:bg-primary/10 hover:border-primary/30 transition-all"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-8 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    className="flex gap-3 items-start p-4 rounded-lg bg-gradient-to-r from-background/50 to-card/30 border border-border/30 hover:border-accent/30 transition-all hover-elevate"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-sm text-foreground/80 leading-relaxed">{cert}</p>
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
