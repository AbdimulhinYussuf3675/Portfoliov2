import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Skills.scss';
import ruby from '../../assets/skilsimgs/skillsection/ruby.png';
import sassimg from '../../assets/skilsimgs/sass.png';
import reactimg from '../../assets/skilsimgs/react.png';
import JSimg from '../../assets/skilsimgs/JS.png';
import python from '../../assets/skilsimgs/skillsection/python.png';
import django from '../../assets/skilsimgs/skillsection/django.png';
import git from '../../assets/skilsimgs/skillsection/git.png';
import html from '../../assets/skilsimgs/skillsection/html.png';
import bootstrap from '../../assets/skilsimgs/skillsection/bootstrap.png';
import css from '../../assets/skilsimgs/skillsection/css.png';
import figma from '../../assets/skilsimgs/skillsection/figma.png';
import psql from '../../assets/skilsimgs/skillsection/psql.png';
import rails from '../../assets/skilsimgs/skillsection/rails.png';
import vue from '../../assets/skilsimgs/skillsection/vue.png';
import ajax from '../../assets/skilsimgs/skillsection/ajax.png';
import jest from '../../assets/skilsimgs/skillsection/jest_icon.png';
import angular from '../../assets/skilsimgs/skillsection/angularjs.png';
import flask from '../../assets/skilsimgs/skillsection/flask.png';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const fetchExperiences = () => new Promise((resolve) => {
    setTimeout(() => {
      const experiencesData = [
        {
          year: '2022 - 2023 ',
          works: [
            {
              name: 'Student Mentor',
              company: 'MICROVERSE',
              desc: 'Mentored junior web developers, providing technical support through code reviews. Proposed improvements to codes organization to improve code quality and overall performance. Provided advice and tips on maintaining motivation to maintain longevity in the program.',
            },
          ],
        },
        {
          year: '2021 - 2022',
          works: [
            {
              name: 'Full Stack Software Development Program',
              company: 'Moringa School',
              desc: 'Engaged in multiple group projects that simulated real-world scenarios, collaborating with fellow students to develop web applications from ideation to deployment. These projects helped me develop skills in problem-solving, teamwork, and agile development methodologies.',
            },
          ],
        },
      ];

      resolve(experiencesData);
    }, 1000);
  });

  const fetchSkills = () => new Promise((resolve) => {
    setTimeout(() => {
      const skillsData = [
        { name: 'JavaScript', bgColor: '#123456', icon: JSimg },
        { name: 'Ruby', bgColor: '#123456', icon: ruby },
        { name: 'SASS', bgColor: '#123456', icon: sassimg },
        { name: 'React JS', bgColor: '#123456', icon: reactimg },
        { name: 'Python', bgColor: '#123456', icon: python },
        { name: 'Vue JS', bgColor: '#123456', icon: vue },
        { name: 'PostgreSql', bgColor: '#123456', icon: psql },
        { name: 'Git', bgColor: '#123456', icon: git },
        { name: 'HTML5', bgColor: '#123456', icon: html },
        { name: 'CSS3', bgColor: '#123456', icon: css },
        { name: 'Django', bgColor: '#123456', icon: django },
        { name: 'Bootstrap', bgColor: '#123456', icon: bootstrap },
        { name: 'Figma', bgColor: '#123456', icon: figma },
        { name: 'Ajax', bgColor: '#123456', icon: ajax },
        { name: 'Angular JS', bgColor: '#123456', icon: angular },
        { name: 'Rails', bgColor: '#123456', icon: rails },
        { name: 'Jest Testing', bgColor: '#123456', icon: jest },
        { name: 'Flask', bgColor: '#123456', icon: flask },

      ];

      resolve(skillsData);
    }, 1000);
  });

  useEffect(() => {
    fetchExperiences().then((data) => {
      setExperiences(data);
    });

    fetchSkills().then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <hr className="new4" />
      <br />
      <h2 className="head-text">
        Skills &
        <span className="about-header">&nbsp;Experiences</span>
      </h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="app__skills-item app__flex"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              key={experience.year}
              className="app__skills-exp-item"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
