import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Multi-head Attention based Vision Transformer Network for Breast Cancer Classification',
    description: 'Developed a hybrid architecture for breast cancer classification integrating a Deep Convolutional GAN for data augmentation, a modified U-Net for lesion segmentation and a multi-head attention-based Vision Transformer for classification.',
    achievements: [
      'Optimized the classifier to reduce the number of trainable parameters to approximately 9 million',
      'Achieved classification accuracy of 92.72% and a recall of 92.31% on the BreakHis dataset',
    ],
    technologies: ['PyTorch', 'Computer Vision', 'GANs', 'Vision Transformer', 'U-Net'],
    featured: true,
  },
  {
    title: 'Hybrid Feature Extraction for Melanoma Diagnosis',
    description: 'Developed a robust skin lesion classification system by combining deep learning CNN features with rotation-invariant Local Binary Patterns (LBP).',
    achievements: [
      'Achieved 85.2% accuracy and 0.91 AUC using XGBoost',
      'Engineered a hybrid feature extraction pipeline that improved model generalization and sensitivity for early-stage melanoma detection',
    ],
    technologies: ['CNN', 'XGBoost', 'LBP', 'Medical Imaging', 'Feature Engineering'],
    featured: false,
  },
  {
    title: 'Quora Insincere Questions Classification using BERT Framework',
    description: 'Built a BERT-based NLP model to classify insincere questions, improving automated content moderation.',
    achievements: [
      'Designed an optimized data preprocessing and text encoding pipeline for efficient large-scale inference',
      'Implemented BERT fine-tuning for question classification task',
    ],
    technologies: ['BERT', 'NLP', 'Transformers', 'Hugging Face', 'Python'],
    featured: false,
  },
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-12 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary animate-pulse" />
            Academic Projects
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`group p-0 overflow-hidden backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer ${
                    project.featured ? 'border-primary/40 shadow-lg shadow-primary/5' : ''
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  data-testid={`project-${index}`}
                >
                  <div className="p-6 hover-elevate">
                    {project.featured && (
                      <motion.div 
                        className="flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 w-fit"
                        whileHover={{ scale: 1.05 }}
                        animate={{ 
                          boxShadow: ['0 0 0px rgba(147, 51, 234, 0)', '0 0 20px rgba(147, 51, 234, 0.4)', '0 0 0px rgba(147, 51, 234, 0)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-mono text-primary uppercase tracking-wider font-semibold">
                          Featured
                        </span>
                      </motion.div>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-semibold text-foreground leading-tight flex-1 group-hover:text-primary transition-colors duration-300">
                        {project.title}
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

                    <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <Badge
                            variant="outline"
                            className="font-mono text-xs border-primary/30 bg-primary/5 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
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
                    <div className="px-6 pb-6 border-t border-border/50">
                      <div className="space-y-3 mt-4">
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        {project.achievements.map((achievement, achIndex) => (
                          <motion.div 
                            key={achIndex} 
                            className="flex gap-3 items-start group/item hover:translate-x-2 transition-transform duration-200"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                              whileHover={{ scale: 2 }}
                            />
                            <p className="text-sm text-foreground/80 group-hover/item:text-foreground transition-colors">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
