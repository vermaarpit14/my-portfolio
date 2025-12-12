import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and growth. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">
        {/* Vertical centered line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => {
          const isEven = index % 2 === 0; // even -> left card, odd -> right card
          return (
            <div key={edu.id} className="mb-16">
              {/* Desktop / Tablet layout */}
              <div className="hidden sm:flex items-center w-full">
                {/* LEFT SLOT (for even entries shows card, else empty spacer) */}
                <div className="w-1/2 flex justify-end pr-8">
                  {isEven ? (
                    <div
                      className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
                    >
                      {/* Flex container for image and text */}
                      <div className="flex items-center space-x-6">
                        {/* School Logo/Image */}
                        <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Degree, School Name, and Date */}
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl sm:text-xl font-semibold text-white">
                              {edu.degree}
                            </h3>
                            <h4 className="text-md sm:text-sm text-gray-300">
                              {edu.school}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                      <p className="mt-4 text-gray-400">{edu.desc}</p>
                    </div>
                  ) : null}
                </div>

                {/* CENTER TIMELINE (circle) */}
                <div className="w-12 flex justify-center z-10">
                  <div className="relative">
                    <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT SLOT (for odd entries shows card, else empty spacer) */}
                <div className="w-1/2 flex justify-start pl-8">
                  {!isEven ? (
                    <div
                      className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105"
                    >
                      {/* Flex container for image and text */}
                      <div className="flex items-center space-x-6">
                        {/* School Logo/Image */}
                        <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Degree, School Name, and Date */}
                        <div className="flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl sm:text-xl font-semibold text-white">
                              {edu.degree}
                            </h3>
                            <h4 className="text-md sm:text-sm text-gray-300">
                              {edu.school}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                      <p className="mt-4 text-gray-400">{edu.desc}</p>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Mobile layout: circle above, card full width below (restored exactly as before) */}
              <div className="sm:hidden flex flex-col items-center">
                <div className="mb-4">
                  <div className="bg-gray-400 border-4 border-[#8245ec] w-12 h-12 rounded-full flex justify-center items-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="w-full p-4 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                        <h4 className="text-sm text-gray-300">{edu.school}</h4>
                        <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                    <p className="mt-4 text-gray-400">{edu.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
