import type { TestimonialData, TestimonialsSectionContent } from '@/types/index.ts';

export const testimonialsSectionContent: TestimonialsSectionContent = {
  title: 'Customers Feedback',
  description: "From career changes to dream jobs, here's how FlyonUI helped."
};

export const testimonialsData: TestimonialData[] = [
  {
    id: '1',
    name: 'Craig Bator',
    role: 'Food Blogger',
    avatar: '/assets/img/avatars/7.png',
    comment:
      '"Chef Marilyn\'s  signature curry is hands-down the best I have ever had. The flavors are bold and unforgettable!"',
    stars: ['filled', 'filled', 'filled', 'filled', 'filled'], // 5 full stars
    alt: 'Craig Bator'
  },
  {
    id: '2',
    name: 'Lindsey Saris',
    role: 'Travel Chef Reviewer',
    avatar: '/assets/img/avatars/2.png',
    comment:
      '"Takahiro\'s sushi is pure perfection. So fresh, delicate, and beautifully presented — a five-star experience."',
    stars: ['filled', 'filled', 'filled', 'filled', 'half'], // 4.5 stars
    alt: 'Lindsey Saris'
  },
  {
    id: '3',
    name: 'Alexandra Lee',
    role: 'Master Chief Judge',
    avatar: '/assets/img/avatars/3.png',
    comment:
      'The ambiance is amazing, and the food is even better! The grilled salmon was perfectly cooked. A must-try place!',
    stars: ['filled', 'filled', 'filled', 'filled', 'filled'], // 5 full stars
    alt: 'Alexandra Lee'
  },
  {
    id: '4',
    name: 'Jason Wu',
    role: 'Food Blogger',
    avatar: '/assets/img/avatars/12.png',
    comment:
      'The service was exceptional. From the moment we walked in, the staff made us feel like family.',
    stars: ['filled', 'filled', 'filled', 'filled', 'filled'], // 5 full stars
    alt: 'Jason Wu'
  }
];
