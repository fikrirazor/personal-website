import { Link } from "react-router";
import ContactForm from "@/components/contact/ContactForm";
function Contact() {
  return (
    <div className="Contact bg-ink text-cream-light py-16">
      <h1 className="text-center text-6xl font-extrabold">Contact</h1>
      <p className="text-center mt-4 text-gray-300">
        I'm currently available for work
      </p>

      <div className=" max-w-4xl mx-auto px-4 text-center">
        <div className="max-w-2xs mx-auto px-4 py-2 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="relative md:col-span-1">
              <Link to="https://www.linkedin.com/in/fikri-rozan-imadudin-3a5202382/" className="text-sky-fog hover:text-cream-light">
                {" "}
                Linkedin
              </Link>
            </div>
            <div className="relative md:col-span-1">
              <Link to="https://github.com/fikrirazor" className="text-sky-fog hover:text-cream-light"> Github</Link>
            </div>
          </div>
        </div>
      </div>
      <ContactForm/>
      
    </div>
  );
}

export default Contact;
