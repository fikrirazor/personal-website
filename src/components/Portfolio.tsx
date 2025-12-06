import { useState } from "react";

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const allWorkItems = [
    {
      id: 1,
      title: "KawahTask — Task Management Platform",
      description:
        "Develop RESTful API for task management application using Express.js and JWT for authentication from boilerplate. This API integrated with a Next.js frontend.",
      category: "Full-Stack Development",
      yearRange: "2025",
      details: [
        "Built RESTful API with Express.js & JWT authentication",
        "Implemented complete CRUD operations with MongoDB",
        "Integrated with Next.js frontend for seamless data flow",
        "Deployed to Vercel with production-ready configuration",
        "Resolved data type inconsistencies and API debugging",
      ],
      image: "/images/kawah-task.png",
      url: "https://github.com/fikrirazor/kawah-task/",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    },
    {
      id: 2,
      title: "Pengalaman Memasak : Martabak Cooking Game",
      description:
        "2D cooking simulation game with complete game design and publishing",
      category: "Game Development",
      yearRange: "2021 – 2023",
      details: [
        "Wrote comprehensive Game Development Document",
        "Implemented game mechanics using GDScript in Godot Engine",
        "Managed assets, UI flows, and user interactions",
        "Published to Google Play Store as playable prototype",
        "Designed scoring system and time simulation mechanics",
      ],
      image: "/images/pengalaman-memasak.png",
      url: "https://play.google.com/store/apps/details?id=jamairgames.pengalamanmemasak",
      tech: ["Godot Engine", "GDScript", "Game Design", "Play Store"],
    },
    {
      id: 3,
      title: "My Portfolio",
      description:
        "My personal portfolio website built with Next.JS and Tailwind CSS.",
      category: "Frontend Development",
      yearRange: "2025",
      details: [
        "Built with Next.JS and Tailwind CSS.",
        "Deployed with Vercel.",
      ],
      image: "/images/my-portfolio.jpg",
      url: "https://fikri-rozan.vercel.app",
      tech: ["Next.JS", "Tailwind CSS", "Deployment", "Vercel"],
    },
    {
      id: 4,
      title: "RPGCreature Search — Pokémon Finder",
      description: "Interactive Pokémon search tool using vanilla JavaScript",
      category: "Frontend Development",
      yearRange: "2025",
      details: [
        "Implemented REST API fetching from PokeAPI",
        "Built search logic handling special characters (♀/♂)",
        "Created responsive layout without frameworks",
        "Designed clean UI with HTML/CSS",
        "Demonstrated vanilla JavaScript proficiency",
      ],
      image: "images/rpg-pokemon-search-app.png",
      url: "https://www.freecodecamp.org/certification/takydromus/javascript-algorithms-and-data-structures-v8",
      tech: ["JavaScript", "HTML", "CSS", "REST API"],
    },
    {
      id: 5,
      title: "Cash Register App",
      description: "Cash register simulation with accurate change calculation",
      category: "JavaScript Development",
      yearRange: "2025",
      details: [
        "Implemented object-oriented Cashier class",
        "Added validation for edge cases and insufficient change",
        "Created detailed change breakdown display",
        "Solved complex calculation logic",
        "Followed FreeCodeCamp project specifications",
      ],
      image: "images/cash-register-app.png",
      url: "https://www.freecodecamp.org/certification/takydromus/javascript-algorithms-and-data-structures-v8",
      tech: ["JavaScript", "OOP", "HTML", "CSS", "Algorithms"],
    },
  ];

  const displayedWorkItems = showAll ? allWorkItems : allWorkItems.slice(0, 3);

  return (
    <section id="portfolio" className=" bg-ink">
      <div className="max-w-screen-2xl mx-auto py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-14 bg-cream-light bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl text-center">
            Portfolio
          </h1>

          <div className="mb-10 flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-xl text-cream-light">
                Showing {displayedWorkItems.length} of {allWorkItems.length}{" "}
                projects
              </h2>
            </div>

            <div className="flex gap-4 mt-4 sm:mt-0">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 bg-cream-light text-ink font-medium rounded-lg hover:bg-cream transition-colors duration-200"
              >
                {showAll ? "Show Less" : "View All Projects"}
              </button>
            </div>
          </div>

          <div className="space-y-16">
            {displayedWorkItems.map((item, index) => (
              <div key={item.id} className="relative group">
                <div className="absolute -right-3 -top-3 bg-ink border-2 border-cream-light w-full h-full "></div>
                <div className="relative border-2 border-cream-light p-6 lg:p-8 text-ink bg-cream-light grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Bagian Gambar */}
                  <div className="lg:col-span-1">
                    <div className="relative h-64 lg:h-full overflow-hidden border border-ink/10 ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-300 "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-ink/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Bagian Konten */}
                  <div className="lg:col-span-2 flex flex-col">
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-ink text-cream-light rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-ink/60">
                          {item.yearRange}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-ink/80 mb-4">{item.description}</p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-ink rounded-full mt-2 mr-3 shrink-0"></span>
                            <span className="text-ink/90">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer dengan Tech Stack */}
                    <div className="mt-auto pt-4 border-t border-ink/10">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs font-medium border border-ink/30 rounded-full hover:bg-ink hover:text-cream-light transition-colors cursor-default"
                            title={tech}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={item.url}
                        className="inline-flex items-center text-sm font-medium text-ink hover:underline"
                      >
                        View Project Details
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Urutan Number */}
                <div className="absolute -left-6 -top-6 w-12 h-12 bg-cream-light border-2 border-cream-light rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-ink">
                    #{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Load More/Less */}
          {allWorkItems.length > 3 && (
            <div className="mt-16 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-transparent border-2 border-cream-light text-cream-light font-medium rounded-lg hover:bg-cream-light hover:text-ink transition-all duration-200"
              >
                {showAll ? (
                  <>
                    <span>Show Less</span>
                    <svg
                      className="w-5 h-5 ml-2 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>
                      Load More ({allWorkItems.length - 3} more projects)
                    </span>
                    <svg
                      className="w-5 h-5 ml-2 inline"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Informasi Total Projects */}
          <div className="mt-12 pt-8 border-t border-cream-light/20 text-center">
            <p className="text-cream-light/70">
              Total Projects:{" "}
              <span className="font-bold text-cream-light">
                {allWorkItems.length}
              </span>{" "}
              • Displaying:{" "}
              <span className="font-bold text-cream-light">
                {displayedWorkItems.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
