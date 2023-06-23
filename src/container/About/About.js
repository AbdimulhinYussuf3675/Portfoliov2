import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import fullstack from '../../assets/skilsimgs/datascientist.png';
import backend from '../../assets/skilsimgs/backend.png';
import frontend from '../../assets/skilsimgs/frontend.png';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  // Simulated function to get about data
  const getAboutData = () => [
    {
      title: 'Full-stack Web Development',
      imgUrl: frontend,
      description: 'As a full-stack developer, I have experience in both front-end and back-end technologies. I excel at developing end-to-end solutions, from designing intuitive user interfaces using modern frameworks.',
    },
    {
      title: 'Frontend Developer',
      imgUrl: fullstack,
      description: 'As a front-end developer, I specialize in creating visually appealing and responsive user interfaces. I have expertise in front-end frameworks like React. I strive to create engaging and intuitive web applications.',
    },
    {
      title: 'Backend Development',
      imgUrl: backend,
      description: 'As a back-end developer, I focus on building the server-side logic and infrastructure that powers web applications. I am experienced in designing and developing APIs, working with databases, and implementing scalable and secure server-side architectures.',
    },
    // Add more about data objects as needed
  ];
  useEffect(() => {
    // Simulating data retrieval or initialization
    const fetchAboutData = async () => {
      // Replace this with your own data initialization or retrieval logic
      const data = await getAboutData();
      setAbouts(data);
    };

    fetchAboutData();
  }, []);
  return (
    <>
      <hr className="new4" />
      <br />
      <h2 className="head-text">
        The
        <span className="about-header">Person&nbsp;</span>
        Behind&nbsp;the&nbsp;Work
      </h2>
      <div className="about-desc">
        <div className="p-text para">
          <p>
            I&apos;m an ambitious Fullstack Developer who&apos;s passionate about
            coding and loves building great products, features or websites.
            I also love to reach out to new opportunities
            accross the globe that will enhance my skills and get the
            opportunity to collaborate with other programmers as well.
          </p>
          <br />
          <p>
            Here are some of my major fields:
          </p>
        </div>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text bold-desc" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
