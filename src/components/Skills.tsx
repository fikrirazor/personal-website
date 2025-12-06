import SparkleDivider from "@/components/ui/SparkleDivider";
import ScrollIndicator from "@/components/ScrollIndicator";
function Skills() {
  const skills = [
    {
      category: "Front-End Skills",
      items: [
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
      ],
    },

    {
      category: "Back-End Skills",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
      ],
    },

    {
      category: "DevOps & Tools",
      items: [
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Jenkins",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
        },
        {
          name: "CI/CD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
        },
        {
          name: "Vagrant",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vagrant/vagrant-original.svg",
        },
      ],
    },
  ];

  return (
    <section className="text-cream-light bg-ink">
      <div className="max-w-screen-2xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-6xl pb-10 font-extrabold text-cream-light mb-8 text-center">
          My Skills
        </h2>
        <SparkleDivider/>
        {skills.map(({ category, items }) => (
          <div key={category} className="mb-14">

            {/* Title */}
            <h3 className="text-3xl font-bold text-cream-light mb-6 tracking-wide text-center">
              {category}
            </h3>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {items.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center gap-3 p-6 
                  bg-ink backdrop-blur-sm border border-cream-light 
                  hover:bg-linear-to-br hover:from-clay-rose/20 hover:to-plum-mist/10 
                  transform hover:-translate-y-1 transition-all duration-200"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={icon}
                      alt={name}
                      className="w-16 h-16 object-contain"
                    />
                  </div>

                  {/* Name */}
                  <span className="text-sm font-medium text-cream-light">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-auto pt-8 pb-4">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}

export default Skills;
