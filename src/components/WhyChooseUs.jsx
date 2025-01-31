import React, { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    title: "Expert Guidance & Mentorship",
    description: "Receive tailored support from industry leaders to refine your business strategy."
  },
  {
    title: "Access to Capital & Resources",
    description: "Unlock funding and essential resources to fuel your startup’s growth."
  },
  {
    title: "Impact-Driven Ecosystem",
    description: "Join a collaborative network focused on innovation and long-term success."
  }
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px -100px 0px", 
      threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimationTriggered(true);
        }
      });
    }, options);

    cardRefs.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 transition-transform duration-500 ${animationTriggered ? 'bg-gradient-to-r from-teal-200 to-blue-400' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Us for TEN Incubation & TEN Funding?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              ref={(el) => (cardRefs.current[index] = el)} 
              className={`text-center p-6 rounded-lg shadow-lg transform transition-all duration-300
                ${animationTriggered ? 'animate-fade-up' : ''}
                hover:shadow-2xl`} 
              style={{
                backgroundColor:
                  index === 0
                    ? '#E0F7FA' 
                    : index === 1
                    ? '#F1F8E9' 
                    : '#E8F5E9', 
              }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-900">{reason.title}</h3>
              <p className="text-blue-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
