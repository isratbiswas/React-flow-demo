import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Privacy", href: "/privacy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Brand Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold tracking-tight">BRANDNAME</h2>
            <p className="text-gray-400 text-sm">
              Building the future, one component at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 mb-4 md:mb-0">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright Section */}
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} BrandName Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
