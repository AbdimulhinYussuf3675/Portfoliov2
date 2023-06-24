import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { AppWrap } from '../../wrapper';
import './Home.scss';
import profile from '../../assets/skilsimgs/profile.png';
import sassimg from '../../assets/skilsimgs/sass.png';
import reactimg from '../../assets/skilsimgs/react.png';
import JSimg from '../../assets/skilsimgs/JS.png';
import rubyimg from '../../assets/skilsimgs/skillsection/ruby.png';
import resume from '../../assets/AbdimulhinAdan.pdf';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const handleDownload = () => {
  // Replace 'resume.pdf' with the actual path or URL of your resume file
  const resumeUrl = resume;

  // Open the resume file in a new window or tab
  window.open(resumeUrl, '_blank');
};

const Header = () => (
  <div id="home" className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div>
            <p className="p-text common heading">Hello there, I&apos;m</p>
            <h1 className="head-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="home-logo"
                viewBox="0 0 171 210"
              >
                <path
                  className="lower-logo-color fill__color home-logo animate-logo-1"
                  d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
                />
                <path
                  d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                  fill="#797878"
                  className="animate-logo-2"
                />
              </svg>
              <span className="name">bdimulhin dan</span>
            </h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text common">Experienced Full Stack Developer & Proficient Coder. Turning Your Ideas into Reality:</p>
          <p className="p-text common">Explore My Portfolio and Experience in Building Products, Features, and Websites</p>
        </div>

        <button type="button" className="download-button" onClick={handleDownload}>
          <FontAwesomeIcon icon={faEye} className="download-icon" />
          View Resume
        </button>

      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={profile} alt="profile_bg" />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[sassimg, reactimg, JSimg, rubyimg].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);
export default AppWrap(Header, 'home');
