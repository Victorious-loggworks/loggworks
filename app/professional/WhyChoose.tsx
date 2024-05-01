import Image from "next/image";

export default function WhyChoose() {
  return (
    <div className="container px-5 lg:px-20">
      <h2 className="text-primary-20 text-[12px] lg:text-xl uppercase text-left lg:text-center font-normal lg:font-semibold">
        Why Choose Loggworks?
      </h2>
      <p className="text-left lg:text-center text-gray-10 text-2xl lg:text-[2.5rem] font-bold leading-8 lg:leading-[48px] capitalize mt-2 lg:mt-6">
        Grow Your Home Service Business
      </p>
      <p className="text-base lg:text-xl lg:text-center mt-4 text-gray-30">
        Connect, Thrive, and Succeed with Loggworks
      </p>

      <div className="mt-8 lg:mt-[4.5rem] grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="col-span-2 p-4 lg:p-10 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5">
            <Image
              src={"/assets/why-choose-loggworks/Profile-Promotion.webp"}
              alt={"profile promotion"}
              width={1056}
              height={641}
              className="w-full mb-8"
            />
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Profile and Offers Promotion
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Maximise your reach and attract the right clients by promoting
              your professional profile and special offers through Loggworks.
              Designed as a promotional tool, it acts like targeted advertising,
              placing your services in front of homeowners and tenants across
              the UK actively seeking what you offer on Loggworks. This approach
              streamlines the process of growing your client base, eliminating
              the need for wide-reaching and often expensive marketing efforts.
              Use Loggworks to highlight your expertise and special deals,
              directly connecting with potential clients interested in your
              services.
            </p>
          </div>
          <div className="col-span-2 p-4 lg:p-10 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5">
            <Image
              src={
                "/assets/why-choose-loggworks/Efficient-and-Courteous-Support.webp"
              }
              alt={"efficient and courtesy support"}
              width={1056}
              height={1057}
              className="w-full mb-8"
            />
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Efficient and Courteous Support
            </h4>
            <p className="text-gray-30  text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Our feature lets you quickly submit quotes for new jobs,
              streamlining the process and significantly boosting your chances
              of securing opportunities.
            </p>
          </div>
          <div className="col-span-2 p-4 lg:p-10 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5">
            <Image
              src={"/assets/why-choose-loggworks/Escrow-Service.webp"}
              alt={"escrow service"}
              width={1056}
              height={641}
              className="w-full mb-8"
            />
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Escrow Service
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Loggwork provides an integrated escrow service to safeguard
              transactions and protect professionals from payment disputes.
              Funds are securely held until jobs are completed, ensuring peace
              of mind and financial security.
            </p>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-6">
          <div className="col-span-2 p-4 lg:p-10 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5">
            <Image
              src={
                "/assets/why-choose-loggworks/Quick-and-Efficient-Quoting.webp"
              }
              alt={"quick and efficient quoting"}
              width={1057}
              height={1009}
              className="w-full mb-8"
            />
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Quick and Efficient Quoting
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Our feature lets you quickly submit quotes for new jobs,
              streamlining the process and significantly boosting your chances
              of securing opportunities
            </p>
          </div>
          <div className="col-span-2 p-4 lg:p-10 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5">
            <Image
              src={"/assets/why-choose-loggworks/Pricing-Autonomy.webp"}
              alt={"pricing autonomy"}
              width={1056}
              height={641}
              className="w-full mb-8"
            />
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Pricing Autonomy
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              Enjoy the freedom to set your rates by selecting from various job
              listings that match your financial goals and schedule. This
              autonomy allows you to strategically optimise your income while
              efficiently managing your workload, ensuring that you take on jobs
              that best fit your professional and personal preferences.
            </p>
          </div>
          <div className="col-span-2 p-4 lg:p-10 rounded-[8px] shadow-lg border-2 border-gray-600 border-opacity-5">
          <Image src={"/assets/why-choose-loggworks/Advanced-Analytics-and-Insights.webp"} alt={"advanced analytics and insights"} width={1056} height={833} className="w-full mb-8" />
            <h4 className="text-xl lg:text-2xl text-gray-10 text-opacity-90 font-bold leading-7">
              Advanced Analytics and Insights
            </h4>
            <p className="text-gray-30 text-sm lg:text-base text-opacity-90 font-mediumn leading-6 mt-2">
              The Loggworks CRM dashboard offers advanced analytics and
              insights, enabling you to monitor and manage your performance
              effectively. With data at your fingertips, you can adjust your
              strategy to enhance success on the platform, ensuring you're
              leveraging every opportunity to its fullest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
