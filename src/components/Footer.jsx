import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div> 
            <img src="https://avatars.githubusercontent.com/u/89257186?v=4" alt="founder" />
            <h2>SHREE RADHE</h2>
            <p>Lord Krishna's teachings in the Bhagavad Gita are cherished worldwide, offering profound wisdom on duty, righteousness, and devotion.</p>
        </div>
        <aside>
        <h2>Social Media</h2>
        <article>
            <a href="https://youtube.com/@web4sumit" target={'blank'}><AiFillYoutube /></a>
            <a href="https://instagram.com/web4sumit" target={'blank'}><AiFillInstagram /></a>
            <a href="https://github.com/web4sumit" target={'blank'}><AiFillGithub /></a>
        </article>
        </aside>
        <a href="#home"><AiOutlineArrowUp /> </a>
    </footer>
  );
};

export default Footer