import { Button } from '@relume_io/relume-ui';
import React from 'react';
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import Contact2 from '../../assets/Contact2.png';

export const ContactSection = (props) => {
  const { tagline, heading, description, contacts, image } = {
    ...Contact15Defaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div>
          <div className="mb-12 grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:mb-20 md:grid-cols-[1fr_.75fr] md:gap-x-20 md:gap-y-16">
            <div className="rb-12 max-w-lg">
              <p className="mb-3 font-bold md:mb-4">{tagline}</p>
              <h2 className="rb-5 mb-5 text-3xl font-normal md:mb-6 md:text-4xl lg:text-5xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
            <div className="flex flex-col">
              <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-6 py-2">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex flex-row">
                    <div className="mr-4 md:mb-4">{contact.icon}</div>
                    <div>
                      <h3 className="mb-2 text-md font-normal leading-[1.4] md:text-xl">
                        {contact.title}
                      </h3>
                      <p>{contact.description}</p>
                      {contact.title === 'Office' && contact.button ? (
                        <div className="mt-5 md:mt-6">
                          <Button {...contact.button}>{contact.button.title}</Button>
                        </div>
                      ) : (
                        contact.link && (
                          <a className="underline" href={contact.link.url}>
                            {contact.link.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={image.src} className="w-full object-cover" alt={image.alt} />
        </div>
      </div>
    </section>
  );
};

export const Contact15Defaults = {
  tagline: 'Connect',
  heading: 'Get In Touch',
  description: 'We’re here to help you with any inquiries or support you may need.',
  contacts: [
    {
      icon: <BiEnvelope className="size-6" />,
      title: 'Email',
      link: {
        label: 'info@proceduservices.com',
        url: '#',
      },
    },
    {
      icon: <BiPhone className="size-6" />,
      title: 'Phone',
      link: {
        label: '+1 (803) 404-3475',
        url: '#',
      },
    },
    {
      icon: <BiMap className="size-6" />,
      title: 'Office',
      description: '123 Sample St, Sydney NSW 2000 AU',
    },
  ],
  image: {
    src: Contact2,
    alt: 'Relume placeholder image',
  },
};
