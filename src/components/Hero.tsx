import heroBackground from "@/assets/astronomy-1868560_1920.jpg";
import photoProfile from "@/assets/PhotoProfile.jpg";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { Particles } from "@/components/ui/shadcn-io/particles";
import AnimatedContent from "@/components/AnimatedContent";
import ScrollIndicator from "@/components/ScrollIndicator";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen overflow-hidden relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur Background */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm"></div>

      {/* Particles */}
      <Particles
        className="absolute inset-0"
        quantity={120}
        ease={80}
        staticity={60}
        color="#cfc8ff"
        size={0.9}
      />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 min-h-screen items-center">
        {/* Contect Hero */}
        <AnimatedContent
          distance={180}
          direction="vertical"
          reverse={true}
          duration={1.6}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.05}
          threshold={0.25}
          delay={0.2}
        >
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <h1 className="font-jakarta text-4xl sm:text-5xl md:text-6xl tracking-tight text-cream-light leading-tight">
              Hello<br /> There... <br />
              <span> Fikri rozan </span><br />
              Here!<br />
              I'm <span className="text-[#d9c8bf]">Fikri Rozan</span>
            </h1>

            <TypingText
              text={["Software Engineer", "Full Stack Web Developer", "Frontend Specialist"]}
              typingSpeed={70}
              pauseDuration={1400}
              showCursor={true}
              cursorCharacter="|"
              className="font-jakarta mt-4 text-lg md:text-xl tracking-tight"
              textColors={["#b0a9e4", "#dea38b", "#d9c8bf"]}
              variableSpeed={{ min: 50, max: 110 }}
            />

            <p className="font-jakarta mt-4 text-cream-light text-lg md:text-xl max-w-xl leading-relaxed">
              Crafting web experiences That users love & scale with growth.
            </p>
          </div>
        </AnimatedContent>

        {/* Foto Profile */}
        <AnimatedContent
          distance={180}
          direction="vertical"
          reverse={true}
          duration={1.6}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1.05}
          threshold={0.25}
          delay={0.35}
        >
          <div className="flex justify-center md:justify-end">
            <img
              src={photoProfile}
              alt="Profile"
              className="rounded-full object-cover w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 border-4 border-cream-light shadow-2xl shadow-black/50"
            />
          </div>
        </AnimatedContent>
      </div>

      {/* Tombol dan Scroll bagian bawah */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 pb-10">
        <div className="grid grid-cols-3 text-cream-light">
          {/* Link Portfolio */}
          <div>
            <a href="#portfolio" title="Portfolio" className="hover:underline">
              <TypingText
                text={["Get a Project", "Get a Project"]}
                typingSpeed={65}
                pauseDuration={1200}
                showCursor={true}
                cursorCharacter="|"
                className="font-jakarta text-lg md:text-xl"
                textColors={["#b0a9e4", "#dea38b"]}
                variableSpeed={{ min: 40, max: 110 }}
              />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <ScrollIndicator />
          </div>

          {/* Link Contact */}
          <div className="text-right">
            <a href="#contact" title="contact" className="hover:underline">
              <TypingText
                text={["Contact", "Contact"]}
                typingSpeed={65}
                pauseDuration={1200}
                showCursor={true}
                cursorCharacter="|"
                className="font-jakarta text-lg md:text-xl"
                textColors={["#b0a9e4", "#dea38b"]}
                variableSpeed={{ min: 40, max: 110 }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
