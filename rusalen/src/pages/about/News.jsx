import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import PageHero from '../../components/shared/PageHero';
import GlassCard from '../../components/shared/GlassCard';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from 'lucide-react';

export default function News() {
  const { data: news = [] } = useQuery({
    queryKey: ['news'],
    queryFn: () => base44.entities.NewsArticle.list('-created_date'),
    initialData: [],
  });

  return (
    <div>
      <PageHero label="Новости" title="Новости РУСАЛЕН" description="Последние новости, события и достижения центра" />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {news.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Новости будут опубликованы в ближайшее время</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article, i) => (
                <GlassCard key={article.id} delay={i * 0.08}>
                  {article.image_url && (
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 -mx-2 -mt-2">
                      <img src={article.image_url} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  {article.created_date && (
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono mb-2">
                      <Calendar className="w-3 h-3" />
                      {format(new Date(article.created_date), 'd MMMM yyyy', { locale: ru })}
                    </span>
                  )}
                  <h3 className="font-semibold mb-2">{article.title}</h3>
                  {article.summary && <p className="text-xs text-muted-foreground line-clamp-3">{article.summary}</p>}
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}