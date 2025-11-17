import type { CTAData } from '@/types/index.ts';

export const ctaData: CTAData = {
  content: {
    title: 'Order Now & Satisfy Your Cravings',
    description:
      'Let us bring the flavors you love straight to your door. From classic comfort dishes to chef-curated specials, every bite is made with care and delivered fresh. Skip the wait — your next favorite meal is just a click away.',
    buttonText: 'Read more',
    buttonHref: '#contact-us'
  },
  images: {
    mint: {
      src: '/assets/img/mint.png',
      alt: 'mint',
      class:
        'intersect-once intersect:motion-preset-slide-down-lg intersect:motion-duration-800 intersect:motion-opacity-in-0 intersect:motion-delay-100 absolute end-[21%] top-0 h-20 max-w-sm max-md:hidden'
    },
    pizza: {
      src: '/assets/img/pizza.png',
      alt: 'Pizza',
      class: 'absolute end-0 top-0 h-full max-w-md rounded-br-3xl max-md:hidden rtl:rotate-y-180'
    }
  }
};
