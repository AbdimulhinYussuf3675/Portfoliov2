import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Project.scss';
import blog from '../../assets/projects/blog.png';
import leaderboad from '../../assets/projects/leadbod.jpeg';
import mnet from '../../assets/projects/1678431582874.jpeg';
import todolist from '../../assets/projects/todo.png';
import catstone1 from '../../assets/projects/cp1.png';
import catstone3 from '../../assets/projects/cp3.png';
import bookStore from '../../assets/projects/bookstore.png';
import mathmajician from '../../assets/projects/math.jpeg';

const worksData = [
  {
    title: 'Blog-App',
    description: 'This is a classic example of a blog website. Its fully functional website that shows the list of posts and empower readers to interact with them by adding comments and liking posts.',
    tags: ['Ruby', 'Rails'],
    imgUrl: blog,
    projectLink: 'https://blogapp-r0oh.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Blog-app',
  },
  {
    title: 'Catalog of my things',
    description: 'This is a Console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games.',
    tags: ['Ruby'],
    imgUrl: mathmajician,
    projectLink: 'https://github.com/AbdimulhinYussuf3675/catalog-of-my-things',
    codeLink: 'NA',
  },
  {
    title: 'Leaderboard',
    description: 'The leaderboard website displays scores submitted by different players.Players submit their scores. All data is preserved to the external Leaderboard API service.',
    tags: ['JavaScript'],
    imgUrl: leaderboad,
    projectLink: 'https://abdimulhinyussuf3675.github.io/Leaderboard/dist/ ',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Leaderboard',
  },
  {
    title: 'MNnet',
    description: 'This project is a movie website with features of adding comment, tap on like to show interest and make reservations',
    tags: ['JS'],
    imgUrl: mnet,
    projectLink: 'https://abdimulhinyussuf3675.github.io/Mnet_Movie/dist/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Mnet_Movie',
  },
  {
    title: 'BookStore',
    description: 'This is a website that allows users to add and remove a book, and display a the list of books added on the page.',
    tags: ['React JS', 'JavaScript'],
    imgUrl: bookStore,
    projectLink: 'https://adam-bookshop.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Bookstore',
  },
  {
    title: 'To-Do list',
    description: 'This is a VueJS project that enables the user to add, edit and delete todo. A user can drag and drop to reoder the list.',
    tags: ['VueJS'],
    imgUrl: todolist,
    projectLink: 'https://abdimulhinvue-to-do-l-ist.vercel.app/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Vue_To_do-LIst',
  },
  {
    title: 'Adam Studios',
    description: 'The goal here is to master all of the tools and best practices of HTML,CSS and JavaScript.',
    tags: ['HTML&CSS'],
    imgUrl: catstone1,
    projectLink: 'https://adamspace.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/Space_Travelers--Hub',
  },
  {
    title: 'Population-Count',
    description: 'This is a web-app that allows users to have access to population data of countries across the world.',
    tags: ['ReactJS', 'JavaScript'],
    imgUrl: catstone3,
    projectLink: 'https://adam-census.onrender.com/',
    codeLink: 'https://github.com/AbdimulhinYussuf3675/React-capstone_project',
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
        filteredWorks = works.filter((work) => work.tags.includes(item)).slice(0, 9);
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
          'Rails',
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
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >

                    <TbWorld />
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

export default AppWrap(MotionWrap(Work, 'app__works'), 'projects', 'app__primarybg');
