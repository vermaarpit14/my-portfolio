// src/hooks/useReveal.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const defaults = {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
    };

    const animVars = { ...defaults, ...(options.anim || {}) };

    gsap.from(el.children.length ? Array.from(el.children) : el, {
      ...animVars,
      scrollTrigger: {
        trigger: el,
        start: options.start || "top 90%",
        once: options.once !== false,
      },
    });

    return () => {
      // cleanup ScrollTrigger instances created by this element
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
    };
  }, [options]);

  return ref;
}
