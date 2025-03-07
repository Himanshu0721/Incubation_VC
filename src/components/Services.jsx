
import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "TEN Incubation",
    description: "Incubation accelerates startup growth by providing mentorship, resources, and a collaborative environment. Transform your ideas into actionable plans with expert guidance and strategic support.",
    icon: "🤝",
    delay: 0.2,
    url: "https://vc-incubation.vercel.app" //change the link
  },
  {
    title: "TEN Funding",
    description: "Funding empowers startups with the capital needed to scale operations, innovate, and achieve market success. Bridge the gap between vision and execution with access to vital investments.",
    icon: "💰",
    delay: 0.3,
    url: "https://ten-funding-lime.vercel.app/"
  },
//   {
//     title: "TEN Internships",
//     description: "Structured internship programs designed to nurture future HR leaders.",
//     icon: "🌱",
//     delay: 0.4,
//     url: "https://internships.entrepreneurshipnetwork.net/"
//   },
//   {
//     title: "TEN HR Consulting",
//     description: "Strategic HR consulting services for organizational transformation.",
//     icon: "📊",
//     delay: 0.5,
//     url: "https://hrconsulting.entrepreneurshipnetwork.net/"
//   },
//   {
//     title: "TEN HR Mentors",
//     description: "Connect with industry-leading HR professionals for personalized guidance.",
//     icon: "🤝",
//     delay: 0.6,
//     url: "https://hr-mentor-nine.vercel.app/"
//   },
// {
//   title: "TEN HR Automation",
//   description: "Generate offer letters, letters of recommendation, completion letters, and more.",
//   icon: "📝",
//   delay: 0.7,
//   url: "https://ten-ivr.vercel.app/"
// }
];

const Services = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <a 
            key={service.title} 
            href={service.url} 
            className="block"
            title={`Learn more about ${service.title}`} 
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Services;
