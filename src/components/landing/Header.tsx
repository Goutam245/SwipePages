import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const subjectPages = {
    primary: [
      { label: "Primary Maths", href: "/primary-maths" },
      { label: "Primary English", href: "/primary-english" },
    ],
    highschool: [
      { label: "High School Maths", href: "/highschool-maths" },
      { label: "High School English", href: "/highschool-english" },
    ],
    college: [
      { label: "University Maths", href: "/college-maths" },
      { label: "Academic Writing", href: "/college-english" },
    ],
  };

  const navItems = [
    { 
      label: "Subjects", 
      href: "#",
      hasDropdown: true,
      dropdownId: "subjects"
    },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/#book" },
    { label: "Reviews", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-tight px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-ink">
              <span className="text-ct-green">Canberra</span> Tutoring
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.dropdownId || null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 text-ink/70 hover:text-ink font-medium transition-colors"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.dropdownId ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-ink/70 hover:text-ink font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.dropdownId && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-2xl shadow-xl border border-border p-4 space-y-4">
                          {/* Primary */}
                          <div>
                            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Primary (Years K-6)</p>
                            <div className="space-y-1">
                              {subjectPages.primary.map((page) => (
                                <Link
                                  key={page.href}
                                  to={page.href}
                                  className="block px-3 py-2 rounded-lg hover:bg-ct-mint transition-colors text-ink hover:text-ct-green font-medium"
                                >
                                  {page.label}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* High School */}
                          <div>
                            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">High School (Years 7-12)</p>
                            <div className="space-y-1">
                              {subjectPages.highschool.map((page) => (
                                <Link
                                  key={page.href}
                                  to={page.href}
                                  className="block px-3 py-2 rounded-lg hover:bg-ct-mint transition-colors text-ink hover:text-ct-green font-medium"
                                >
                                  {page.label}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* University */}
                          <div>
                            <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">University</p>
                            <div className="space-y-1">
                              {subjectPages.college.map((page) => (
                                <Link
                                  key={page.href}
                                  to={page.href}
                                  className="block px-3 py-2 rounded-lg hover:bg-ct-mint transition-colors text-ink hover:text-ct-green font-medium"
                                >
                                  {page.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+61261234567"
              className="flex items-center gap-2 text-ink/70 hover:text-ink transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(02) 6123 4567</span>
            </a>
            <Link to="/#book" className="btn-primary py-3 px-6 text-base">
              Book Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-ink"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-2">
                {/* Subjects accordion */}
                <div className="py-2">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Primary (Years K-6)</p>
                  {subjectPages.primary.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="block py-2 px-3 text-ink/70 hover:text-ink font-medium rounded-lg hover:bg-ct-mint/50"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>

                <div className="py-2">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">High School (Years 7-12)</p>
                  {subjectPages.highschool.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="block py-2 px-3 text-ink/70 hover:text-ink font-medium rounded-lg hover:bg-ct-mint/50"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>

                <div className="py-2">
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">University</p>
                  {subjectPages.college.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="block py-2 px-3 text-ink/70 hover:text-ink font-medium rounded-lg hover:bg-ct-mint/50"
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mt-2">
                  <Link
                    to="/#how-it-works"
                    className="block py-2 text-ink/70 hover:text-ink font-medium"
                  >
                    How It Works
                  </Link>
                  <Link
                    to="/#testimonials"
                    className="block py-2 text-ink/70 hover:text-ink font-medium"
                  >
                    Reviews
                  </Link>
                  <Link
                    to="/#faq"
                    className="block py-2 text-ink/70 hover:text-ink font-medium"
                  >
                    FAQ
                  </Link>
                </div>

                <Link
                  to="/#book"
                  className="btn-primary text-center mt-4"
                >
                  Book Free Assessment
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
