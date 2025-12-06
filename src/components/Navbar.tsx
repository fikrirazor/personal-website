import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navigation*/}
      <nav className="hidden lg:block fixed top-8 right-12 z-50">
        <div className="relative">


          {/* Menu items */}
          <ul className="flex flex-col space-y-7 items-end pr-1">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                <a 
                  href={item.href} 
                  className="group flex items-center gap-2"
                >
                  <span className="text-[14px] text-[var(--color-cream-light)]/90 hover:text-[var(--color-cream-light)] font-medium tracking-[0.15em] uppercase transition-all duration-300 group-hover:tracking-[0.2em]">
                    {item.name}
                  </span>
                  
                  {/* Line connector */}
                  <div className="w-0 h-[1px] bg-gradient-to-l from-[var(--color-clay-rose)] to-transparent transition-all duration-500 group-hover:w-5"></div>
                  
                </a>
                
                {/* Hover highlight */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[var(--color-clay-rose)]/0 group-hover:bg-[var(--color-clay-rose)] group-hover:shadow-[0_0_6px_var(--color-clay-rose)] transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[var(--color-ink)]/90 backdrop-blur-md border-b border-[var(--color-clay-rose)]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <span className="text-[var(--color-cream-light)] font-bold tracking-wider text-lg">
                Fikri Rozan
              </span>
              
              <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--color-clay-rose)] to-transparent mt-1"></div>
            </div>
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-lg hover:bg-[var(--color-clay-rose)]/10 transition-colors duration-300 group"
              aria-expanded={isOpen}
            >
              {/* border Animasi */}
              <div className="absolute inset-0 rounded-lg border border-[var(--color-clay-rose)]/30 group-hover:border-[var(--color-clay-rose)]/60 transition-colors duration-300"></div>
              
              <span className="sr-only">Open menu</span>
              {isOpen ? (
                <X className="h-6 w-6 text-[var(--color-cream-light)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--color-cream-light)]" />
              )}
              
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[var(--color-ink)]/95 backdrop-blur-xl border-b border-[var(--color-clay-rose)]/20 animate-slideDown">
            {/* Gradient top border */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-clay-rose)]/50 to-transparent"></div>
            
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between py-4 px-3 rounded-lg hover:bg-[var(--color-clay-rose)]/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center">
                      
                      
                      <span className="text-[15px] font-medium text-[var(--color-cream-light)] group-hover:text-[var(--color-peach-milk)] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="text-[var(--color-clay-rose)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Pemisah */}
              <div className="my-6 border-t border-[var(--color-clay-rose)]/20"></div>
              
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;