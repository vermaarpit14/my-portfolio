import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[5vw] lg:px-[12vw] font-sans mt-16"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-12 lg:space-x-20">

        {/* Left Side */}
        <div className="md:w-7/12 text-center md:text-left mt-8 md:mt-0">

          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Arpit Verma
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>

            {/* Fix typing effect wrapping */}
            <span className="inline-block">
              <ReactTypingEffect
                text={[
                  'Web Developer',
                  'Competitive Programmer',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec]">{cursor}</span>
                )}
              />
            </span>
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a B.Tech CSE'28 student at NIT Durgapur, 
            a passionate Competitive Programmer, and a Full Stack Developer.
             I enjoy building scalable web applications and exploring modern technologies.
              As a tech enthusiast, I constantly learn, create, and 
              push my abilities to solve real-world problems efficiently.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1j4JzK16qAPHRstiC1SoseH0XXv5NeGMi/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-5/12 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[34rem] md:h-[34rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={false}
          >
            <img
              src={profileImage}
              alt="Arpit Verma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
