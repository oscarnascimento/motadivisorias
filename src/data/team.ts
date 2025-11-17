import type { TeamMember, SectionContent } from '@/types/index.ts';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Cheyenne Workman',
    position: 'Head Chef',
    description: 'A visionary leader driving innovation and collaboration.',
    image: '/assets/img/chef-1.png',
    alt: 'Cheyenne Workman'
  },
  {
    id: '2',
    name: 'Corey Rosser',
    position: 'Kitchen Manager',
    description: 'Leading teams to build smart, scalable solutions.',
    image: '/assets/img/chef-2.png',
    alt: 'Corey Rosser'
  },
  {
    id: '3',
    name: 'Marilyn Westervelt',
    position: 'Sous Chef',
    description: 'Crafting intuitive and engaging user experiences.',
    image: '/assets/img/chef-3.png',
    alt: 'Marilyn Westervelt'
  },
  {
    id: '4',
    name: 'Ryan Passaquindici Arcand',
    position: 'Culinary Director',
    description: 'Bringing designs to life with seamless interfaces.',
    image: '/assets/img/chef-4.png',
    alt: 'Ryan Passaquindici Arcand'
  }
];

export const teamSectionContent: SectionContent = {
  title: 'Get to Know Our Amazing Team',
  description: 'Meet the Passionate Experts Behind Our Success and Learn More About Their Roles .'
};
