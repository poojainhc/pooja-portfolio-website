import React from 'react';

const ExperienceSec = () => {
    const experiences = [
         {
            year: "2025 - 2025",
            title: "Web Developer",
            company: "Manifest tech media",
            type: "Fulltime",
            description: "Built websites, landing pages, and funnels using Wix, WordPress, Shopify, Squarespace, System.io, and GoHighLevel.  I have built full stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), including creating REST APIs and implementing authentication.• Created email automation, workflows, CRM setups, and course pages. • Integrated Zapier, Calendly, Acuity, and other third-party tools. • Performed SEO updates, pixel integration, and end-to-end website testing. • Handled international clients and delivered complete project."},

        {
            year: "2023 - 2025",
            title: "Full Stack Developer",
            company: "Osumare Pvt. Ltd",
            type: "Fulltime",
            description: "I have experience designing responsive websites and landing pages using HTML, CSS, JavaScript, and Bootstrap, with a strong focus on UI/UX improvements and mobile optimization. I have worked on backend development using PHP, Laravel, and MySQL. Additionally, I have built full stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), including creating REST APIs and implementing authentication. I am experienced in integrating frontend and backend systems and managing database operations. I have also handled deployment, API integration, testing, and debugging to ensure smooth application performance."    },
    
        {
            year: "2022- 2022",
            title: "PHP Web Developer",
            company: "Agasti-Pune",
            type: "Fulltime",
            description: "Designed responsive websites and landing pages using HTML, CSS, JS, and Bootstrap. Worked on UI/UX improvements, layouts, and mobile optimization. • Developed backend features using PHP, Laravel, and MySQL"
        }
           
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;