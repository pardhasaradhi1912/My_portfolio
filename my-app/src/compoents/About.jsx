import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" dark:bg-black bg-slate-100 h-screen w-full text-black"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="maz-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 dark:text-yellow-400">
            <p className="text-4xl font-blod inline border-b-4 dark:border-yellow-600">
              About
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p className="dark:text-yellow-400">
              Hi I'm Pardha Saradhi, nice to meet you .Please take a look around.{" "}
            </p>
          </div>
          <div className="dark:text-yellow-400">
          Committed and goal-oriented student currently pursuing a degree in the software engineering domain. 
          Possess strong communication skills to effectively engage with clients and articulate ideas clearly and concisely. 
          Demonstrates a quick learning ability and thrives in fast-paced, team-driven environments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
