import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
function Home() {
  return (
    <main className="  font-jakarta ">
      <nav className="lg:fixed lg:right-8 lg:top-0 lg:h-full lg:w-32 sticky top-0 p-1 relative nav-dashed-border shadow-[4px_0_6px_rgba(251,191,36,0.3)] animate-float z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-end lg:flex-col lg:items-end p-4 pr-8 text-white">
          <ul className="flex flex-col lg:flex-col space-y-4 lg:space-y-6 w-full lg:w-auto">
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300  block">
                Home
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300  block">
                About
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300  block">
                Projects
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300 block">
                Contact
              </a>
            </li>
            <li className="lg:text-right">
              <a href="#" className="hover:text-gray-300 block">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
export default Home;
