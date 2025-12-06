// src/components/Footer.tsx
import { Link } from "react-router";

const socialMediaLinks = [
  {
    name: "GitHub",
    url: "https://github.com/fikrirazor",
    emoji: "💻",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/Fikri_Rozan",
    emoji: "🐦",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/fikri-rozan-imadudin-3a5202382/",
    emoji: "💼",
  },
];

function Footer() {
  return (
    <div className="bg-cream-light dark:bg-gray-900">
      <div className="mx-auto max-w-screen-2xl px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Tagline */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ink dark:text-cream-light leading-snug">
                Level up in games, and in life!
              </h1>
            </div>
            
            {/* Social Links */}
            <div className="w-full md:w-auto">
              <div className="flex flex-wrap justify-center md:justify-end gap-3">
                {socialMediaLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full transition-all duration-300 min-w-[140px] justify-center md:justify-start"
                  >
                    <span className="text-lg">{link.emoji}</span>
                    <span className="text-ink dark:text-cream-light font-medium">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-6 border-t border-ink/10 dark:border-cream-light/10">
            <p className="text-ink/60 dark:text-cream-light/60 text-sm">
              &copy; {new Date().getFullYear()} Fikri Rozan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;