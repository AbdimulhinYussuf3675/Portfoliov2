import React from 'react';
import './Social.scss';
import {
  FaAngellist, FaTwitter, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <ul className="icons-container">
        <li className="bannerIcon">
          <a href="https://www.linkedin.com/in/abdimulhin-yussuf" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li className="bannerIcon">
          <a href="https://github.com/AbdimulhinYussuf3675" target="_blank" rel="noopener noreferrer">
            <FaGithub />
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
  </div>
);
export default SocialMedia;
