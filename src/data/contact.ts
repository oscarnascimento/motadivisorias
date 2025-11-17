import type { ContactData } from '@/types/index.ts';

export const contactData: ContactData = {
  section: {
    title: 'Get in Touch to Reserve Your Table',
    description:
      "Whether you're planning a casual dinner or a special celebration, we're here to make your experience seamless."
  },
  form: {
    title: 'Book a Table',
    buttonText: 'Book a Reservation',
    fields: {
      name: {
        label: 'Your Name',
        placeholder: 'Enter your name here...',
        id: 'username'
      },
      phone: {
        label: 'Phone Number',
        placeholder: '+1 (212) 555-1234',
        id: 'userphone'
      },
      date: {
        label: 'Enter The Date',
        placeholder: '06/11/25',
        id: 'userdate'
      },
      time: {
        label: 'Enter Time',
        placeholder: '06:00:00',
        id: 'usertime'
      },
      message: {
        label: 'Message',
        placeholder: 'Enter your message',
        id: 'usermessage'
      }
    }
  },
  info: {
    email: {
      title: 'Email/Phone',
      email: 'johndoe@gmail.com',
      phone: '+148 589 2001 2466'
    },
    location: {
      title: 'Our Location',
      address: ['Office 149,', '450 South Brand Brooklyn', 'San Diego County,', 'CA 91905, USA']
    },
    hours: {
      text: 'Opening Hours',
      hours: '9AM - 11PM',
      schedule: 'Everyday'
    }
  }
};
