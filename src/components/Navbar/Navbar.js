import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { FaAngellist, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="app__navbar-h1">Adam</h1>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about me', 'skills', 'projects', 'Blogs', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <FiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [250, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >

            <div>
              <span className="links">
                <ul>
                  {['home', 'about me', 'skills', 'projects', 'Blogs', 'contact'].map((item) => (
                    <li key={item}>
                      <Link href={`#${item}`} activeClass="active" onClick={() => setToggle(false)}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                <MdClose className="close" onClick={() => setToggle(false)} />
              </span>

              <ul className="icons-container">
                <li className="bannerIcon">
                  <a href="https://www.linkedin.com/in/abdimulhin-yussuf" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="bannerIcon">
                  <a href="https://twitter.com/abdimulhin" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </li>
                <li className="bannerIcon">
                  <a href="https://wellfound.com/u/abdimulhin-yussuf" target="_blank" rel="noopener noreferrer">
                    <FaAngellist />
                  </a>
                </li>
              </ul>

            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
