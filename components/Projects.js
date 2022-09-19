import React from "react";
import Button from "./Button";
const Projects = () => {
  return (
    <>
      <section className="w-[90%] sm:w-[480px] md:w-[700px] lg:w-[1000px] xl:w-[1400px] mx-auto flex flex-col items-center mb-5">
        <div className=" mb-8 md:mb-10 lg:mb-24 xl:mb-28 sm:w-[90%] md:w-[75%] lg:w-[90%] lg:flex lg:items-center lg:justify-center">
          <img
            src="https://cdn.dribbble.com/users/937198/screenshots/16179528/media/785b8fcc5b0eaf558af4fb7ea15a7a0f.png?compress=1&resize=1000x750&vertical=top"
            alt="Ashraf Chowdury"
            className=" w-[100%] lg:w-[400px] xl:w-[420px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[310px] xl:h-[330px] object-cover rounded"
          />
          <div className=" w-[100%] xl:w-[55%] lg:ml-5 xl:ml-8">
            <h4 className=" dark:text-white text-xl lg:text-3xl xl:text-[36px] my-2 xl:mb-3 font-bold">
              Chat Application
            </h4>
            <p className=" text-sm md:text-[16px] xl:text-lg leading-7 md:leading-8 lg:leading-8 xl:leading-9 break-all h-[92px] xl:h-auto overflow-hidden xl:overflow-visible ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              rerum eaque perferendis sint modi iste, aperiam perspiciatis,
              nihil, accusamus a reprehenderit deleniti neque nesciunt labore
              laboriosam.
            </p>
            <p className=" text-[14px] lg:text-[16px] xl:text-lg font-bold capitalize mt-1 lg:mt-3 mb-2 ml-1 lg:ml-2">
              Build With:
            </p>
            <div className="current_stack w-full flex flex-wrap">
              <span>Next.js</span>
              <span>Redux</span>
              <span>Firebase</span>
              <span>Tailwind</span>
            </div>
            <div className=" flex flex-row items-center mt-6 xl:mt-8">
              <a href="https://github.com/ashrafchowdury" target="_blank">
                <Button style=" py-[9px] px-6 xl:px-8 text-sm lg:text-[16px] font-bold">
                  <i className="fa-solid fa-code-compare mr-1"></i> View GitHub
                </Button>
              </a>
              <a href="" className=" text-sm lg:text-[16px] text-center ml-4 ">
                <i className="fa-solid fa-up-right-from-square mr-1"></i>
                View Website
              </a>
            </div>
          </div>
        </div>

        <div className=" mb-8 md:mb-10 lg:mb-24 xl:mb-28 sm:w-[90%] md:w-[75%] lg:w-[90%] lg:flex lg:items-center lg:justify-center">
          <img
            src="https://cdn.dribbble.com/users/937198/screenshots/16179528/media/785b8fcc5b0eaf558af4fb7ea15a7a0f.png?compress=1&resize=1000x750&vertical=top"
            alt="Ashraf Chowdury"
            className=" w-[100%] lg:w-[400px] xl:w-[420px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[310px] xl:h-[330px] object-cover rounded"
          />
          <div className=" w-[100%] xl:w-[55%] lg:ml-5 xl:ml-8">
            <h4 className=" dark:text-white text-xl lg:text-3xl xl:text-[36px] my-2 xl:mb-3 font-bold">
              Chat Application
            </h4>
            <p className=" text-sm md:text-[16px] xl:text-lg leading-7 md:leading-8 lg:leading-8 xl:leading-9 break-all h-[92px] xl:h-auto overflow-hidden xl:overflow-visible ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              rerum eaque perferendis sint modi iste, aperiam perspiciatis,
              nihil, accusamus a reprehenderit deleniti neque nesciunt labore
              laboriosam. ferendis sint modi iste, aperiam perspiciatis,
            </p>
            <p className=" text-[14px] lg:text-[16px] xl:text-lg font-bold capitalize mt-1 lg:mt-3 mb-2 ml-1 lg:ml-2">
              Build With:
            </p>
            <div className="current_stack w-full flex flex-wrap">
              <span>Next.js</span>
              <span>Redux</span>
              <span>Firebase</span>
              <span>Tailwind</span>
            </div>
            <div className=" flex flex-row items-center mt-6 xl:mt-8">
              <a href="https://github.com/ashrafchowdury" target="_blank">
                <Button style=" py-[9px] px-6 xl:px-8 text-sm lg:text-[16px] font-bold">
                  <i className="fa-solid fa-code-compare mr-1"></i> View GitHub
                </Button>
              </a>
              <a href="" className=" text-sm lg:text-[16px] text-center ml-4 ">
                <i className="fa-solid fa-up-right-from-square mr-1"></i>
                View Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
