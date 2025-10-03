import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const publications = [
  {
    title: 'BCED-Net: Breast Cancer Ensemble Detection Network using Transfer Learning and XGBoost Classifier using Mammography images',
    journal: 'Osong Public Health and Research Perspectives',
    type: 'Journal',
    status: 'Published',
  },
  {
    title: 'Performance Evaluation of Machine Learning Classifiers for Brain Stroke Prediction',
    journal: 'International Journal of Bioinformatics Research and Applications',
    type: 'Journal',
    status: 'Published',
  },
  {
    title: 'Multi-head Attention based Vision Transformer Network for Breast Cancer Classification using GAN-Augmented Pathological Images',
    journal: 'Applied Soft Computing Journal',
    type: 'Journal',
    status: 'Submitted',
  },
  {
    title: 'A Novel CNN Architecture for Acrylamide Detection in Carbohydrate-Rich Food Products',
    journal: 'Journal of Food Control',
    type: 'Journal',
    status: 'Submitted',
  },
  {
    title: 'Combining Deep Features with the Invariant Local Binary Pattern features for Skin Cancer Classification',
    journal: '2023 IEEE Pune Section\'s International Conference (IEEE PuneCon2023)',
    type: 'Conference',
    status: 'Published',
  },
  {
    title: 'Advancements in Breast Cancer Detection: A Comprehensive Review of Deep Learning Techniques',
    journal: 'IEEE International Conference on Artificial Intelligence for Innovations in Healthcare Industries (ICAIIHI-2023)',
    type: 'Conference',
    status: 'Published',
  },
  {
    title: 'Quora Question Sincerity Detection Using BERT-Based Framework',
    journal: '14th International Conference on Cloud Computing, Data Science & Engineering',
    type: 'Conference',
    status: 'Published',
  },
  {
    title: 'Structured Implementation of ML Algorithms for Cardiovascular Disease Detection',
    journal: '5th International Conference on Computing, Power, and Communication Technologies (IC2PCT)',
    type: 'Conference',
    status: 'Published',
  },
];

export default function Publications() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newSet = new Set(expandedIndices);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedIndices(newSet);
  };

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            Publications
          </h2>

          <p className="text-muted-foreground mb-12">
            {publications.filter(p => p.status === 'Published').length} published papers •{' '}
            {publications.filter(p => p.status === 'Submitted').length} under review
          </p>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="p-6 backdrop-blur-md bg-card/50 border-card-border hover-elevate cursor-pointer"
                  onClick={() => toggleExpanded(index)}
                  data-testid={`publication-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant={pub.type === 'Journal' ? 'default' : 'secondary'}
                          className="text-xs font-mono"
                        >
                          {pub.type}
                        </Badge>
                        <Badge
                          variant={pub.status === 'Published' ? 'default' : 'outline'}
                          className={`text-xs font-mono ${
                            pub.status === 'Published'
                              ? 'bg-chart-3/20 text-chart-3 border-chart-3/30'
                              : 'border-accent/30 text-accent'
                          }`}
                        >
                          {pub.status}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-sm text-muted-foreground italic">{pub.journal}</p>
                    </div>

                    <div className="flex-shrink-0 flex items-center gap-2">
                      {pub.status === 'Published' && (
                        <button
                          className="p-2 hover-elevate active-elevate-2 rounded-md"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log('View publication', pub.title);
                          }}
                          data-testid={`link-publication-${index}`}
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </button>
                      )}
                      {expandedIndices.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
