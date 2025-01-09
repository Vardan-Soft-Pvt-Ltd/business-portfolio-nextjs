import Button from "./share/Button";

const BenefitOfJoining = () => {
  return (
    <section className="w-full px-4 md:px-20 pb-8 pt-[6rem]">
      <div>
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="w-full md:w-[60%]">
            <h1 className="w-[70%] md:w-full text-TextDarkBlue text-3xl md:text-6xl font-semibold pt-8">
              Benefits of joining the masterclass
            </h1>
            <p className="text-TextDarkBlue text-xl py-8">
              This masterclass is perfect for aspiring and current product
              managers eager to craft successful products while advancing their
              careers with confidence.
            </p>
          </div>
          <div className="w-full flex justify-start md:justify-end mt-8">
            <Button
              variant="tertiary"
              className="rounded-md"
              width="350px"
              height="50px"
            >
              Register now
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Card  1*/}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-4 md:px-10 pt-8 pb-16 rounded-2xl">
              <div>
                <h1 className="text-6xl text-[#d5d0fa] font-bold">01</h1>
              </div>
              <h4 className="text-PrimaryBlue pb-4 mt-8 font-bold text-2xl">
                Personalized Coaching
              </h4>
              <p className="w-full md:w-[80%] text-TextDarkBlue pb-8">
                Tailored guidance to help you navigate your unique product
                management journey. Gain one-on-one insights, actionable
                feedback, and strategies aligned with your career goals.
              </p>
            </div>
            {/* Card  2*/}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-4 md:px-10 pt-8 pb-16 rounded-2xl">
              <div>
                <h1 className="text-6xl text-[#d5d0fa] font-bold">02</h1>
              </div>
              <h4 className="text-PrimaryBlue pb-4 mt-8 font-bold text-2xl">
                Hands-on Approach
              </h4>
              <p className="w-full md:w-[80%] text-TextDarkBlue pb-8">
                {`Our Product Management Masterclass offers personalized, hands-on
                mentorship designed to help you thrive in the competitive world
                of product management. Whether you're just starting or looking
                to enhance your skills, our tailored approach ensures you
                receive customized learning paths, one-one-mentorship,
                interactive case studies, Career-oriented support.`}
              </p>
            </div>
            {/* Card  3*/}
            <div className="border  border-purple-400 w-[100%] bg-[#f7f3ff] px-4 md:px-10 pt-8 pb-16 rounded-2xl">
              <div>
                <h1 className="text-6xl text-[#d5d0fa] font-bold">03</h1>
              </div>
              <h4 className="text-PrimaryBlue pb-4 mt-8 font-bold text-2xl">
                Expert-Led Sessions
              </h4>
              <p className="w-full md:w-[80%] text-TextDarkBlue pb-8">
                {`Learn to master product discovery, collaborate effectively with
                cross-functional teams, and make data-driven decisions to
                succeed in today’s dynamic market. These sessions are designed
                to equip you with the knowledge and tools to excel as a product
                manager.`}
              </p>
            </div>
            {/* Card  4*/}
            <div className="border border-purple-400 w-[100%] bg-[#f7f3ff] px-4 md:px-10 pt-8 pb-16 rounded-2xl">
              <div>
                <h1 className="text-6xl text-[#d5d0fa] font-bold">04</h1>
              </div>
              <h4 className="text-PrimaryBlue pb-4 mt-8 font-bold text-2xl">
                Lifetime Mentorship
              </h4>
              <p className="w-full md:w-[80%] text-TextDarkBlue pb-8">
                {`With continuous guidance from industry experts, access to a
                supportive professional community, personalized career advice,
                and exclusive resources, you’ll stay equipped to navigate
                challenges and excel at every stage of your career. This is more
                than a course—it's a lifelong partnership in your growth and
                success.`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Networking Opportunities */}
      <section className="w-full py-20">
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl text-TextDarkBlue font-bold">
            Networking Opportunities
          </h1>
        </div>
        <div>
          <p className=" w-full text-xl text-TextDarkBlue pb-8">
            {`Our Product Management Masterclass provides a unique opportunity to
            connect with like-minded professionals, seasoned experts, and
            aspiring product managers. Participants will engage in a
            collaborative learning environment that fosters meaningful
            connections, helping them build a valuable network within the
            industry. Through structured group activities, Q&A sessions with
            guest speakers, and informal networking breaks, attendees can expand
            their circle of peers and mentors. Whether you’re looking to share
            insights, discover new opportunities, or gain feedback on your
            ideas, this masterclass offers the ideal setting for building
            relationships that can enhance both your career and professional
            growth.`}
          </p>
        </div>
      </section>
    </section>
  );
};

export default BenefitOfJoining;
