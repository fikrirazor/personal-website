function Experience() {
  const experienceItems = [
    {
      title: "Independent Game Developer & Founder",
      company: "Jamair Games (Self-Employed)",
      timeline: "January 2021 – February 2023",
      responsibilities: [
        "Developed and launched three complete indie games from initial concept to publication, handling all aspects including programming, asset creation (2D art and sound), and game design documentation.",
        "Built Martabak Cooking Game which achieved 1,000+ organic downloads through implementing interactive drag-and-drop systems, dynamic scoring mechanisms, and virtual time functionality for enhanced player experience.",
        "Created Kancil Mania, a 2D platformer featuring parallax scrolling, enemy behavior patterns, and visual effects including screen-shake, while implementing collision detection and star collection systems.",
        "Managed the full deployment process to Google Play Store including store listing optimization, asset preparation, and post-launch monitoring for user feedback.",
        "Designed and developed ABM, an educational math game prototype focusing on intuitive learning through gamified mechanics and responsive visual feedback.",
      ],
    },
    {
      title: "Computer & Network Engineer",
      company: "PT POS INDONESIA",
      timeline: "Mar 2014-Jun 2014",
      responsibilities: [
        "Repairing and Monitoring network cable and server at office.",
        "Repairing personal computer and computer server with order.",
      ],
    },
  ];

  return (
    <section id="experience" className=" bg-ink">
      <div className=" max-w-screen-2xl mx-auto px-20 pt-12  ">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 flex flex-col justify-center">
            <h1 className="text-4xl font-extrabold text-cream-light text-center lg:text-left  lg:text-5xl xl:text-6xl">
              Experience
            </h1>
          </div>
          <div className="lg:w-2/3">
            <div className="relative my-20 group ">
              <div className="absolute -left-3 -top-3 bg-ink border-2 border-cream-light w-full h-full group-hover:translate-x-1 group-hover:-translate-y-1"></div>

              <div className="relative bg-cream-light border-2 border-cream-light p-6 text-ink space-y-6 text-center">
                <h2 className="text-2xl font-bold inline-block px-3 py-1 bg-ink text-cream-light mb-4">
                  Work History
                </h2>

                {experienceItems.map((item) => (
                  <div key={item.company} className="space-y-1">
                    <h3 className="text-xl font-semibold">
                      <span className="inline-block px-3 py-1 bg-ink text-cream-light">
                        {item.title}
                      </span>{" "}
                      — {item.company}
                    </h3>
                    <p className="text-sm italic">{item.timeline}</p>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">
                        Responsibility:
                      </h4>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {item.responsibilities.map((task) => (
                          <li key={task}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
