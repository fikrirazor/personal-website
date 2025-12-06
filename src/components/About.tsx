import SparkleDivider from "@/components/ui/SparkleDivider";
import ScrollIndicator from "@/components/ScrollIndicator";

const coreValues = [
  {
    title: "Continuous Learning",
    desc: "keep learning new technologies, frameworks, and reading about new technologies.",
  },
  {
    title: "Problem Solving",
    desc: "finding solution of the problems",
  },
  {
    title: "Planning ",
    desc: "plan work and tasks before start",
  },
  {
    title: "Critical Thinking",
    desc: "think about the problem",
  },
];

function About() {
  return (
    <section className="About  bg-ink text-cream-light flex items-center">
      <div className="max-w-screen-2xl mx-auto px-6 pt-16">
        <h1 className="flex flex-col items-center mb-12 mt-5 text-6xl font-extrabold">
          About
        </h1>

        <SparkleDivider/>
        
        {/* About Text */}
        <p className="text-center leading-relaxed max-w-6xl mx-auto mb-12">
          Hello, I am a Full-Stack Developer focused on modern web development,
          from building interactive UIs to developing Backend and APIs.<br/><br/>
          I have developed projects such as a Todos App, Web Portfolio, and Company
          Profile website using React and Vite. Prior to that, I also gained
          experience in game development, including a simulation game built with
          Godot Engine that was successfully deployed on the Playstore. This
          experience strengthened my skills in programming logic, animation,
          game mechanics, and project structuring.<br/><br/> I am experienced in creating
          UIs with React, developing APIs, integrating databases, and deploying
          applications to the cloud. In my work, I prioritize consistency, clear
          documentation, and careful planning.<br/><br/> Currently, I am focused on
          further developing my full-stack web development skills to build
          scalable and efficient applications.
          <br />
          <br />
          <span className="text-clay-rose font-semibold">
            Core Skills: JavaScript, React, Node.js, Express, MongoDB,
            PostgreSQL, Docker, Git, REST API.
          </span>
        </p>

        {/* Core Values */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">My Core Values</h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-25 max-w-screen-2xl mx-auto">
            {coreValues.map((item, i) => (
              <div
                key={i}
                className="border bg-cream-light text-ink rounded-xl overflow-hidden hover:shadow-lg hover:shadow-clay-rose transition shadow-sm"
              >
                <div className="flex h-48 flex-col justify-center p-6">
                  {/* Icon */}

                  {/* Text */}
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm opacity-70">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-8 pb-4">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}

export default About;
