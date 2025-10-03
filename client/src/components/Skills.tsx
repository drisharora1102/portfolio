import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
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
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Skills</h2>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover-elevate'
              }`}
              data-testid="filter-all"
            >
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category.title
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover-elevate'
                }`}
                data-testid={`filter-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-md bg-card/50 border border-card-border rounded-lg p-6 hover-elevate"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-6 h-6 ${category.color}`} />
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
                          className="font-mono text-xs px-3 py-1 border-border/50 bg-background/30 hover-elevate"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 backdrop-blur-md bg-card/50 border border-card-border rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'IBM Data Science Professional Certificate',
                'Google Data Analytics Professional Certificate',
                'Developer Virtual Experience Program, Accenture',
                'Data Analytics Consulting Virtual Internship, KPMG',
                'DSE200X: Python for Data Science, UC San Diego',
                'CCNAv7: Introduction to Networks, Cisco',
                'Data Analytics & Visualization Virtual Experience, Accenture',
                'HKU100X: Blockchain and Fintech, HKU',
              ].map((cert, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
