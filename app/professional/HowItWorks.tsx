import Operations from "./Operations";

export default function HowItWorks() {
  return (
    <div className="">
      <h2 className="uppercase text-primary-20 font-normal lg:font-semibold text-[0.75rem] lg:text-xl leading-8 text-left lg:text-center">
        How it works
      </h2>
      <p className="text-left lg:text-center font-semibold lg:font-bold leading-8 lg:leading-[3rem] text-2xl lg:text-[2.5rem] text-gray-10 text-opacity-90 mt-2 lg:mt-6">
        A hassle-free way to find <br />
        new customers fast
      </p>
      <Operations />
    </div>
  );
}
