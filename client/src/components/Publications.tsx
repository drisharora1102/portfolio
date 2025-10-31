import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: 'BCED-Net: Breast Cancer Ensemble Detection Network using Transfer Learning and XGBoost Classifier using Mammography images',
    journal: 'Osong Public Health and Research Perspectives',
    type: 'Journal',
    status: 'Published',
    link: 'https://ophrp.org/journal/view.php?number=793',
  },
  {
    title: 'Performance Evaluation of Machine Learning Classifiers for Brain Stroke Prediction',
    journal: 'International Journal of Bioinformatics Research and Applications',
    type: 'Journal',
    status: 'Published',
    link: 'https://www.inderscience.com/info/inarticle.php?artid=137369',
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
    link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=Drishti%20Arora%20skin%20cancer%20PuneCon',
  },
  {
    title: 'Advancements in Breast Cancer Detection: A Comprehensive Review of Deep Learning Techniques',
    journal: 'IEEE International Conference on Artificial Intelligence for Innovations in Healthcare Industries (ICAIIHI-2023)',
    type: 'Conference',
    status: 'Published',
    link: 'https://www.researchgate.net/publication/377713158',
  },
  {
    title: 'Quora Question Sincerity Detection Using BERT-Based Framework',
    journal: '14th International Conference on Cloud Computing, Data Science & Engineering',
    type: 'Conference',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=Drishti%20Arora%20Quora%20BERT',
  },
  {
    title: 'Structured Implementation of ML Algorithms for Cardiovascular Disease Detection',
    journal: '5th International Conference on Computing, Power, and Communication Technologies (IC2PCT)',
    type: 'Conference',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=Drishti%20Arora%20cardiovascular',
  },
];

export default function Publications() {
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

          <div className="flex gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-chart-3" />
              <span className="text-muted-foreground text-sm">
                {publications.filter(p => p.status === 'Published').length} Published
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-muted-foreground text-sm">
                {publications.filter(p => p.status === 'Submitted').length} Under Review
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className="p-6 backdrop-blur-md bg-gradient-to-br from-card/80 to-card/40 border-card-border/50 hover:border-primary/30 transition-all duration-300 hover-lift hover-glow"
                  data-testid={`publication-${index}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant={pub.type === 'Journal' ? 'default' : 'secondary'}
                          className="text-xs font-mono px-2.5 py-0.5"
                        >
                          {pub.type}
                        </Badge>
                        <Badge
                          variant={pub.status === 'Published' ? 'default' : 'outline'}
                          className={`text-xs font-mono px-2.5 py-0.5 ${
                            pub.status === 'Published'
                              ? 'bg-chart-3/20 text-chart-3 border-chart-3/30'
                              : 'border-accent/30 text-accent bg-accent/5'
                          }`}
                        >
                          {pub.status}
                        </Badge>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-sm text-muted-foreground italic">{pub.journal}</p>
                    </div>

                    {pub.status === 'Published' && pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 p-2.5 hover-elevate active-elevate-2 rounded-md border border-border bg-background/50"
                        onClick={(e) => e.stopPropagation()}
                        data-testid={`link-publication-${index}`}
                      >
                        <ExternalLink className="w-4 h-4 text-primary" />
                      </a>
                    )}
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
