import type { FAQData } from '@/types/index.ts';

export const faqData: FAQData = {
  section: {
    title: 'Frequently Asked Questions',
    description:
      'Levarage artificial intelligence algorithms to provide users with valuable insights'
  },
  items: [
    {
      id: '1',
      question: 'Do you offer home delivery?',
      answer:
        'Yes, we do! You can place your order directly through our website or via trusted food delivery platforms like Swiggy and Zomato. We ensure that all dishes are packed with care and delivered promptly, so you can enjoy restaurant-quality food in the comfort of your home.',
      learnMoreLink: '#',
      learnMoreText: 'Learn more'
    },
    {
      id: '2',
      question: 'How can I book a table?',
      answer:
        "Booking a table is simple and quick. Just head over to our reservation page, choose your preferred date and time, and confirm your booking in a few clicks. You'll receive a confirmation instantly. Prefer to speak with someone? You can also call us directly.",
      learnMoreLink: '#',
      learnMoreText: 'Learn more'
    },
    {
      id: '3',
      question: 'What are your opening hours?',
      answer:
        "We're open every day from 11:00 AM to 11:00 PM, offering both lunch and dinner service. On weekends, we also serve a special brunch menu from 10:00 AM to 1:00 PM. Holiday hours may vary, so be sure to check our website or follow us on social media for real-time updates and special announcements.",
      learnMoreLink: '#',
      learnMoreText: 'Learn more'
    },
    {
      id: '4',
      question: 'What are your payment options ?',
      answer:
        'We offer several payment options for your convenience, including credit/debit card payments, bank transfers, and online payment gateways. We also offer flexible payment plans for select travel packages.',
      learnMoreLink: '#',
      learnMoreText: 'Learn more'
    },
    {
      id: '5',
      question: 'Do you offer vegan options?',
      answer:
        'Yes, we do! We offer a variety of vegan dishes that are both flavorful and satisfying. Our menu includes plant-based starters, mains, and even desserts.',
      learnMoreLink: '#',
      learnMoreText: 'Learn more'
    }
  ]
};
