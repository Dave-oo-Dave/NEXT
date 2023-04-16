gsap.registerPlugin(ScrollTrigger);

gsap.to(".logo", {
  scaleX: 0.25/3,
  scaleY: 0.25/3,

  duration: 25,
  scrollTrigger: {
    trigger: ".logo",
    start: "top top",
    end: "bottom 70%",
    scrub: 0,
    toggleActions: "restart none none none",
    // pin: true,
    // pinSpacing: false,
    // markers: true
  }
})
