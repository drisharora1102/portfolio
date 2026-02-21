import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Cpu, Code, Database, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const skillCategories = [
  {
    title: 'Domain Expertise',
    icon: Cpu,
    iconClass: 'text-primary',
    iconBoxClass: 'from-primary/20 to-primary/10 border-primary/30',
    skills: [
      'Data Science & Analytics',
      'Machine Learning',
      'Deep Learning',
      'LLMs',
      'Statistical Modeling',
      'Data Visualization',
      'Human-Robot Interaction',
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
    iconClass: 'text-accent',
    iconBoxClass: 'from-accent/20 to-accent/10 border-accent/30',
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
    iconClass: 'text-chart-3',
    iconBoxClass: 'from-chart-3/20 to-chart-3/10 border-chart-3/30',
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
    iconClass: 'text-chart-4',
    iconBoxClass: 'from-chart-4/20 to-chart-4/10 border-chart-4/30',
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
    <div className="py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Skills & Expertise</h2>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
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
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover:border-primary/30 transition-all duration-300 hover-scale h-full">
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br border ${category.iconBoxClass}`}>
                        <Icon className={`w-5 h-5 ${category.iconClass}`} />
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
                            className="font-mono text-xs sm:text-sm px-3 py-1.5 border-border/50 bg-background/40 hover:bg-primary/10 hover:border-primary/30 transition-all cursor-pointer badge-pulse"
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
        </motion.div>
      </div>
    </div>
  );
}
