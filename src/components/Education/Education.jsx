import React, { useEffect, useRef } from "react";
import { education } from "../../constants";

const EducationCard = ({ edu }) => (
  <div className="edu-card-inner rounded-2xl p-5 sm:p-6
                  bg-white/[0.025] border border-purple-900/35 backdrop-blur-sm
                  shadow-[0_0_30px_rgba(130,69,236,0.07)]
                  transition-all duration-350 hover:-translate-y-1
                  hover:border-purple-500/45 hover:shadow-[0_0_40px_rgba(130,69,236,0.18)]">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow">
        <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="text-base font-bold text-white leading-snug">{edu.degree}</h3>
        <p className="text-xs text-purple-400 font-medium mt-0.5">{edu.school}</p>
        <p className="text-[11px] text-gray-600 mt-0.5 font-mono">{edu.date}</p>
      </div>
    </div>
    <div className="border-t border-white/5 pt-3">
      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold
                       text-purple-300 bg-purple-950/50 border border-purple-800/40
                       px-3 py-1 rounded-full mb-2.5">
        🎓 Grade: {edu.grade}
      </span>
      <p className="text-sm text-gray-500 leading-relaxed">{edu.desc}</p>
    </div>
  </div>
);

const Education = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("tl-animate-in"); observer.unobserve(e.target); }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    itemsRef.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tl-from-left  { opacity:0; transform:translateX(-48px); transition:opacity 0.6s cubic-bezier(.4,0,.2,1),transform 0.6s cubic-bezier(.4,0,.2,1); }
        .tl-from-right { opacity:0; transform:translateX( 48px); transition:opacity 0.6s cubic-bezier(.4,0,.2,1),transform 0.6s cubic-bezier(.4,0,.2,1); }
        .tl-animate-in { opacity:1; transform:none; }
        .edu-shimmer {
          background: linear-gradient(90deg, transparent, #8245ec, #a855f7, transparent);
          background-size:200% 100%; animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        .tl-dot {
          width:40px; height:40px; border-radius:50%;
          border:2.5px solid #8245ec;
          background:#06040f;
          overflow:hidden;
          box-shadow:0 0 14px rgba(130,69,236,0.55);
          flex-shrink:0;
          animation: dotPop 0.4s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes dotPop { from{transform:scale(0)} 60%{transform:scale(1.15)} to{transform:scale(1)} }
        .tl-line {
          background: linear-gradient(to bottom, #8245ec, #a855f7, transparent);
          animation: growLine 1.4s ease forwards;
          origin: top;
        }
        @keyframes growLine { from{height:0%} to{height:100%} }
      `}</style>

      <section id="education"
               className="bg-skills-gradient clip-path-custom-3 relative
                          py-28 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-700/7 blur-3xl rounded-full pointer-events-none" />

        {/* Title */}
        <div className="relative z-10 text-center mb-16">
          <p className="text-xs text-purple-400 tracking-[0.3em] uppercase font-semibold mb-3">Academic path</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">EDUCATION</h2>
          <div className="edu-shimmer h-[2px] w-32 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-5 text-base max-w-md mx-auto leading-relaxed">
            My academic journey — building a strong foundation in computer science
          </p>
        </div>

        {/* Timeline */}
        <div className="relative z-10">
          {/* Desktop vertical line */}
          <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px overflow-hidden">
            <div className="w-full h-full bg-white/6" />
            <div className="absolute inset-0 w-full tl-line" />
          </div>

          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={edu.id} className="mb-12 sm:mb-14">
                {/* Desktop */}
                <div className="hidden sm:flex items-start w-full">
                  <div className="w-1/2 flex justify-end pr-10">
                    {isLeft && (
                      <div ref={el => (itemsRef.current[idx * 2] = el)}
                           className="tl-from-left w-full max-w-sm">
                        <EducationCard edu={edu} />
                      </div>
                    )}
                  </div>
                  <div className="flex-shrink-0 w-10 flex justify-center pt-5 z-10">
                    <div className="tl-dot">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-1/2 flex justify-start pl-10">
                    {!isLeft && (
                      <div ref={el => (itemsRef.current[idx * 2 + 1] = el)}
                           className="tl-from-right w-full max-w-sm">
                        <EducationCard edu={edu} />
                      </div>
                    )}
                  </div>
                </div>
                {/* Mobile */}
                <div className="sm:hidden flex flex-col items-center gap-4">
                  <div className="tl-dot">
                    <img src={edu.img} alt={edu.school} className="w-full h-full object-cover" />
                  </div>
                  <div ref={el => (itemsRef.current[idx * 2 + 200] = el)}
                       className="tl-from-right w-full">
                    <EducationCard edu={edu} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Education;
