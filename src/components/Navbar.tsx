import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { Container } from './Container';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collection', href: '#collection' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Track scroll position to change background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to track the active section during scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // trigger when section occupies most of viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    NAV_ITEMS.forEach((item) => {
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Smooth scroll helper
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
      // Fallback: Navigate to homepage with the hash
      window.location.href = '/' + href;
    }
  };

  // If landing on a hash route from another page/session, smooth scroll to it
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          setActiveSection(id);
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <header
      id="glow-navbar"
      className={`fixed top-0 left-0 right-0 z-[9999] isolate transition-all duration-300 ${
        isScrolled
          ? 'bg-glow-bg/90 backdrop-blur-md border-b border-glow-border/50 py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <Container size="lg" className="flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="navbar-logo"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-glow-primary/5 border border-glow-primary/10 transition-colors duration-300 group-hover:bg-glow-primary/10">
            <Flame className="w-5 h-5 text-glow-accent animate-pulse" />
          </div>
          <span className="font-serif text-2xl font-semibold tracking-wide text-glow-text">
            Glow<span className="text-glow-primary font-normal">Nest</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                id={`nav-link-${item.href.substring(1)}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 focus:outline-none ${
                  isActive ? 'text-glow-primary' : 'text-glow-muted hover:text-glow-text'
                }`}
              >
                {item.label}
                {/* Underline effect for active item */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-glow-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Button
            id="nav-order-btn"
            variant="primary"
            size="sm"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="group flex items-center gap-1.5"
          >
            Order Now
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 flex md:hidden items-center justify-center w-11 h-11 rounded-full border border-glow-border/60 text-glow-text hover:bg-glow-primary/5 focus:outline-none focus:ring-2 focus:ring-glow-primary transition-colors duration-300"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-[100] bg-[#FCFAF7] bg-opacity-[0.98] backdrop-blur-xs transition-all duration-300 md:hidden flex flex-col justify-between overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Mobile Overlay Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-glow-border/20">
          <a
            href="#home"
            onClick={(e) => {
              handleNavClick(e, '#home');
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-glow-primary/5 border border-glow-primary/10">
              <Flame className="w-5 h-5 text-glow-accent animate-pulse" />
            </div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-glow-text">
              Glow<span className="text-glow-primary font-normal">Nest</span>
            </span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-11 h-11 rounded-full border border-glow-border/60 text-glow-text hover:bg-glow-primary/5 focus:outline-none focus:ring-2 focus:ring-glow-primary transition-colors duration-300 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Centered Navigation Items */}
        <div className="flex-1 flex flex-col justify-center items-center py-12 px-6">
          <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  id={`mobile-nav-link-${item.href.substring(1)}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  className={`text-2xl sm:text-3xl font-serif font-bold text-center tracking-wide py-2 w-full transition-all duration-300 border-b border-glow-border/10 last:border-b-0 hover:text-glow-primary hover:translate-y-[-2px] flex items-center justify-center gap-3 ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  } ${isActive ? 'text-glow-primary font-extrabold' : 'text-glow-text'}`}
                >
                  <span className="text-xs font-mono font-medium tracking-widest text-glow-muted">
                    0{index + 1}.
                  </span>
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Mobile CTA */}
        <div
          className={`flex flex-col gap-4 px-6 pb-12 w-full max-w-md mx-auto transition-all duration-500 delay-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-xs text-center text-glow-muted italic">
            Handmade with soy wax & pure essential oils
          </p>
          <Button
            id="mobile-nav-order-btn"
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => {
              setIsMobileMenuOpen(false);
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}
            className="flex items-center justify-center gap-2"
          >
            Order Now
            <ArrowUpRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
