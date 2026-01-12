import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RennyLogo from '../assets/RennyLogo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // check initial scroll
    console.log('Scrolled:', window.scrollY);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full h-16 flex items-center justify-between px-6
        transition-all duration-500 ease-in-out font-helvetica
        ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-md shadow-md '
            : 'bg-transparent backdrop-blur-0'
        }
      `}
    >
      {/* Logo */}
      <img
        src={RennyLogo}
        alt="Logo"
        className="h-20  cursor-pointer rounded-md p-2"
        onClick={() => navigate('/')}
      />

      {/* Navigation */}
      <ul
        className={`flex items-center gap-3 transition-all duration-300
    ${
      isScrolled ? 'text-gray-700 font-semibold' : 'font-semibold text-gray-400'
    }
  `}
      >
        {/* About Us */}
        <li className="relative group">
          <span className="cursor-pointer hover:bg-blue hover:text-white px-4 py-3 rounded-xl">
            About Us
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-64 z-50">
            <li>
              <Link to="/company-overview-2/" className="dropdown-item">
                Company Overview
              </Link>
            </li>

            <li>
              <Link to="/manufacturing-units/" className="dropdown-item">
                Manufacturing Process
              </Link>
            </li>

            <li>
              <Link to="/quality-standard/" className="dropdown-item">
                Quality & Standard
              </Link>
            </li>
            <li>
              <Link to="/design-centre/" className="dropdown-item">
                Design Centre
              </Link>
            </li>
          </ul>
        </li>

        {/* Products */}
        <li className="relative group">
          <span className="cursor-pointer hover:bg-blue hover:text-white px-4 py-3 rounded-xl">
            Products
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-72 z-50">
            <li>
              <Link className="dropdown-item">MS Billets</Link>
            </li>
            <li>
              <Link className="dropdown-item">Wire Rods</Link>
            </li>
            <li>
              <Link className="dropdown-item">Narrow-width HR Coils</Link>
            </li>
            <li>
              <Link className="dropdown-item">ERW Pipes & Tubes</Link>
            </li>
            <li>
              <Link className="dropdown-item">Scaffolding & Formwork</Link>
            </li>
          </ul>
        </li>

        {/* Investor Relations */}
        <li className="relative group">
          <span className="cursor-pointer hover:bg-blue hover:text-white px-4 py-3 rounded-xl">
            Investor Relations
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-72 z-50">
            <li>
              <Link to="/financials/" className="dropdown-item">
                Financials
              </Link>
            </li>
            <li>
              <Link to="/corporate-governance/" className="dropdown-item">
                Corporate Governance
              </Link>
            </li>
            <li>
              <Link to="/industry-report/" className="dropdown-item">
                Industry Report
              </Link>
            </li>
            <li>
              <Link to="/ipo/" className="dropdown-item">
                IPO Documents
              </Link>
            </li>
            <li>
              <Link to="/ipo-audio-visual/" className="dropdown-item">
                IPO Audio Visual
              </Link>
            </li>
            <li>
              <Link to="/Share-holding-pattern/" className="dropdown-item">
                Shareholding Pattern
              </Link>
            </li>
            <li>
              <Link to="/our-policies/" className="dropdown-item">
                Our Policies
              </Link>
            </li>
          </ul>
        </li>

        {/* EC */}
        <li>
          <Link
            to="/ec/"
            className="hover:bg-blue hover:text-white px-4 py-3 rounded-xl"
          >
            EC
          </Link>
        </li>

        {/* Sustainability */}
        <li className="relative group">
          <span className="cursor-pointer hover:bg-blue hover:text-white px-4 py-3 rounded-xl">
            Sustainability
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-64 z-50">
            <li>
              <Link className="dropdown-item">ESG</Link>
            </li>
          </ul>
        </li>

        {/* Media */}
        <li className="relative group">
          <span className="cursor-pointer hover:bg-blue hover:text-white px-4 py-3 rounded-xl">
            Media
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg mt-2 w-48 z-50">
            <li>
              <Link to="/news-room/" className="dropdown-item">
                News Room
              </Link>
            </li>
            <li>
              <Link to="/blog/" className="dropdown-item">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/events/" className="dropdown-item">
                Events
              </Link>
            </li>
          </ul>
        </li>

        {/* Career */}
        <li>
          <Link
            to="/career/"
            className="hover:bg-blue hover:text-white px-4 py-3 rounded-xl"
          >
            Career
          </Link>
        </li>

        {/* Contact Us */}
        <li>
          <Link
            to="/contact-us/"
            className="hover:bg-blue hover:text-white px-4 py-3 rounded-xl"
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
