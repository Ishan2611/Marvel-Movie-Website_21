import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Marvel Studios
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Marvel Studios, a subsidiary of Marvel Entertainment, is a world-renowned film production company known for creating the Marvel Cinematic Universe (MCU). It began with the release of <strong>Iron Man</strong> in 2008 and has since produced multiple blockbuster films featuring beloved characters like Captain America, Thor, Black Panther, and Spider-Man. 
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        The studio has revolutionized the superhero genre by interconnecting its movies into one cohesive universe, bringing epic stories and iconic characters to life. With an impressive lineup of films and TV series, Marvel Studios continues to push the boundaries of storytelling, visual effects, and audience engagement.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Whether you're a lifelong fan or a newcomer, Marvel Studios invites you to experience thrilling adventures, heroic journeys, and moments of true cinematic magic.
      </motion.p>
    </div>
  );
};

export default About;
