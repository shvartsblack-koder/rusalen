import React, { useEffect } from 'react';
import { MotionConfig } from 'framer-motion';
import DpoHero from '@/components/dpo/DpoHero';
import ModularScheme from '@/components/dpo/ModularScheme';
import MissionSection from '@/components/dpo/MissionSection';
import TrajectoriesSection from '@/components/dpo/TrajectoriesSection';
import BlocksSection from '@/components/dpo/BlocksSection';
import ValuesSection from '@/components/dpo/ValuesSection';
import CommunitySection from '@/components/dpo/CommunitySection';
import OrganizationsSection from '@/components/dpo/OrganizationsSection';
import DpoFaq from '@/components/dpo/DpoFaq';
import DpoContacts from '@/components/dpo/DpoContacts';

const PAGE_TITLE = 'ДПО РУСАЛЕН — программы для психологов и профессиональное развитие';
const PAGE_DESCRIPTION =
  'Психиатрия для психологов, анонсы направлений ДПО и модульное обучение. Клиническое мышление, психологические методы и психофизиология в РУСАЛЕН';

export default function Education() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute('content') || '';
    if (meta) {
      meta.setAttribute('content', PAGE_DESCRIPTION);
    } else {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', PAGE_DESCRIPTION);
      document.head.appendChild(meta);
    }
    return () => {
      document.title = prevTitle;
      meta.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div>
        <DpoHero />
        <ModularScheme />
        <MissionSection />
        <TrajectoriesSection />
        <BlocksSection />
        <ValuesSection />
        <CommunitySection />
        <OrganizationsSection />
        <DpoFaq />
        <DpoContacts />
      </div>
    </MotionConfig>
  );
}