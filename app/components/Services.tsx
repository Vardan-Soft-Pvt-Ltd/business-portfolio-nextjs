import Link from "next/link";

const Services = () => {
  return (
    <section className="w-full bg-LightPurplepy-10 bg-LightPurple px-2 md:px-16 mt-[2rem] md:mt-[8rem] py-4 md:py-10">
      <div className="flex flex-wrap">
        {serviceData.map((service, index) => (
          <div key={index} className="px-4 md:px-8 mt-8 w-full md:w-1/2">
            <h1 className="text-[26px] md:text-[36px] font-semibold text-PrimaryBlue">
              {service.title}
            </h1>
            <p className="w-[80%] text-TextDarkBlue py-6">
              {service.description}
            </p>
            {service.services && (
              <div className="w-full flex flex-wrap gap-4">
                {service.title === "Masterclass" ? (
                  <ul className="list-disc pl-5">
                    {service.services.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-TextDarkBlue font-bold text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  service.services.map((item, idx) => (
                    <div
                      key={idx}
                      className="w-max bg-PurpleGray py-2 px-4 rounded-full"
                    >
                      <p className="text-TextDarkBlue font-bold text-sm">
                        {item}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
            <div className="flex items-center py-10">
              <Link href={service.link} className="w-[300px]">
                <button className="w-full text-SecondaryBlue text-sm bg-PurpleGray py-3 px-4 rounded-md">
                  {service.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

const serviceData = [
  {
    title: "Coaching",
    description: `Ready to discover your product's potentials or chart a path to career success. Explore tailored coaching programs for individuals and teams.`,
    services: [
      "Product discovery coaching",
      "Career coaching",
      "Product leadership coaching",
    ],
    buttonText: "View coaching packages",
    link: "/coaching",
  },
  {
    title: "Product consulting",
    description: `Building, scaling, or navigating a new challenge? My Product Consulting services are designed to help you succeed.`,
    services: [
      "Advisory",
      "Feasibility Research",
      "Product strategy",
      "Business Consulting & Plans",
    ],
    buttonText: "Learn more",
    link: "/product-consulting",
  },
  {
    title: "Masterclasses",
    description: `Join my exclusive 2025 Product Masterclasses designed for aspiring and practicing product managers.`,
    services: [
      "Learn topics like Product Strategy, Product Analytics, and more.",
      "Personalized coaching and mentorship included.",
    ],
    buttonText: "Learn more",
    link: "/masterclass",
  },
  {
    title: "Speaking",
    description: `Looking for an engaging and insightful speaker for your next event? From conferences to workshops and career fairs, I deliver tailored talks that leave lasting impressions.`,
    buttonText: "View coaching packages",
    link: "/speaking",
  },
];
