import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Project.scss';
import blog from '../../assets/projects/blog.png';
import leaderboad from '../../assets/projects/leadbod.jpeg';
import mnet from '../../assets/projects/1678431582874.jpeg';
import bookStore from '../../assets/projects/bookstore.png';
import budget from '../../assets/projects/butget.png';
import space from '../../assets/projects/space.png';

const worksData = [
  {
    title: 'Blog-App',
    description:
      'This is a classic example of a blog website. Its fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.',
    tags: ['Ruby on Rails', 'Ruby'],
    imgUrl: blog,
    projectLink: 'https://blogapp-r0oh.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Blog-app',
  },
  {
    title: 'Leaderboard',
    description:
      'The leaderboard website displays scores submitted by different players.Players submit their scores. All data is preserved to the external Leaderboard API service.',
    tags: ['JavaScript'],
    imgUrl: leaderboad,
    projectLink: 'https://abdimulhinyussuf3675.github.io/Leaderboard/dist/ ',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Leaderboard',
  },
  {
    title: 'MNnet',
    description:
      'This project is a movie website with features of adding comment, tap on like to show interest and make reservations',
    tags: ['JS'],
    imgUrl: mnet,
    projectLink: 'https://abdimulhinyussuf3675.github.io/Mnet_Movie/dist/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Mnet_Movie',
  },
  {
    title: 'Space Travelers` Hub',
    description:
      'This is a React WebApp with real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions. Built with JavaScript, ReactJS, Redux, and CSS3.',
    tags: ['React JS', 'JavaScript'],
    imgUrl: space,
    projectLink: 'https://adam-bookshop.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Bookstore',
  },
  {
    title: 'BookStore',
    description: 'This is a website that allows users to add and remove a book, and display a the list of books added on the page.',
    tags: ['React JS', 'JavaScript'],
    imgUrl: bookStore,
    projectLink: 'https://adam-store.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Bookstore',
  },
  {
    title: 'Budget App',
    description:
      'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    tags: ['Ruby on Rails', 'Ruby'],
    imgUrl: budget,
    projectLink: 'https://budgetapp-os5q.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Budget-app',
  },
];

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    setWorks(worksData);
    setFilterWork(worksData);
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      let filteredWorks;
      if (item === 'All') {
        filteredWorks = works.slice(0, 9);
      } else {
        filteredWorks = works
          .filter((work) => work.tags.includes(item))
          .slice(0, 9);
      }

      setFilterWork(filteredWorks);
    }, 500);
  };

  const handleKeyPress = (event, item) => {
    if (event.key === 'Enter') {
      handleWorkFilter(item);
    }
  };

  return (
    <>
      <hr className="new4" />
      <br />
      <h2 className="head-text">
        My
        {' '}
        <span className="about-header">Project&nbsp;</span>
        {' '}
        Showcase
      </h2>

      <div className="app__work-filter">
        {[
          'Ruby',
          'Ruby on Rails',
          'HTML&CSS',
          'JS',
          'React JS',
          'Vue JS',
          'Node JS',
          'All',
        ].map((item, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            onClick={() => handleWorkFilter(item)}
            onKeyPress={(event) => handleKeyPress(event, item)}
            className={`app__work-filter-item app__flex filter-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <TbWorld />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="tag-text">
                  Stacks:&nbsp;&nbsp;
                  {work.tags[0]}
                </p>
              </div>
              <div className="codeLinks">
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <TbWorld />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projects',
  'app__primarybg',
);
