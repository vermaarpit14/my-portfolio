import React, { useEffect, useRef } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const categoryIcons = {
  "Languages":         "",
  "Frontend":          "",
  "Backend":           "",
  "Database":          "",
  "Tools & Platform":  "",
  "CS Fundamentals":   "",
};

const Skills = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("skill-card-in"); observer.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .skill-cat-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
        }
        .skill-cat-card.skill-card-in { opacity: 1; transform: none; }
        .skill-cat-card:nth-child(2) { transition-delay:0.1s; }
        .skill-cat-card:nth-child(3) { transition-delay:0.2s; }
        .skill-cat-card:nth-child(4) { transition-delay:0.3s; }
        .skill-cat-card:nth-child(5) { transition-delay:0.4s; }
        .skill-cat-card:nth-child(6) { transition-delay:0.5s; }
        .skill-container {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(130,69,236,0.18);
          backdrop-filter: blur(16px);
          transition: border-color 0.35s, box-shadow 0.35s;
        }
        .skill-container:hover {
          border-color: rgba(130,69,236,0.45);
          box-shadow: 0 0 40px rgba(130,69,236,0.12);
        }
        .skill-tile {
          height: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 0 6px;
          border-radius: 12px;
          border: 1px solid rgba(130,69,236,0.15);
          background: rgba(255,255,255,0.02);
          cursor: default;
          transition: border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s;
          overflow: hidden;
        }
        .skill-tile:hover {
          border-color: rgba(168,85,247,0.5);
          background: rgba(130,69,236,0.1);
          box-shadow: 0 0 18px rgba(130,69,236,0.2);
          transform: translateY(-2px);
        }
        .skill-tile img { width:26px; height:26px; object-fit:contain; flex-shrink:0; }
        .skill-tile span {
          font-size: 10.5px; line-height:1.25; color:#94a3b8; text-align:center;
          display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;
          overflow:hidden; word-break:break-word; max-width:100%; transition:color 0.2s;
        }
        .skill-tile:hover span { color:#e2d9f3; }
        .skills-shimmer {
          background: linear-gradient(90deg, transparent, #8245ec, #a855f7, transparent);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
      `}</style>

      <section id="skills" className="bg-skills-gradient clip-path-custom relative overflow-hidden
                                       py-28 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                        rounded-full bg-purple-700/8 blur-3xl pointer-events-none" />

        {/* Title */}
        <div className="relative z-10 text-center mb-16">
          <p className="text-xs text-purple-400 tracking-[0.3em] uppercase font-semibold mb-3">What I work with</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">SKILLS</h2>
          <div className="skills-shimmer h-[2px] w-32 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-5 text-base max-w-md mx-auto leading-relaxed">
            A curated toolkit of technologies I use to design, build, and ship products
          </p>
        </div>

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SkillsInfo.map((category, catIdx) => (
            <div key={category.title} ref={el => (cardRefs.current[catIdx] = el)}
                 className="skill-cat-card skill-container rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[category.title] ?? "🔧"}</span>
                <h3 className="text-sm font-semibold text-purple-300 tracking-widest uppercase">{category.title}</h3>
                <span className="ml-auto text-xs text-gray-600 font-mono">{category.skills.length} skills</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {category.skills.map((skill) => (
                  <Tilt key={skill.name} tiltMaxAngleX={12} tiltMaxAngleY={12}
                        perspective={700} scale={1.05} transitionSpeed={600}
                        gyroscope={false} style={{ borderRadius:"12px" }}>
                    <div className="skill-tile">
                      <img src={skill.logo} alt={skill.name} />
                      <span>{skill.name}</span>
                    </div>
                  </Tilt>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
