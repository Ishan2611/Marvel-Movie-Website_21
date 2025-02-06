import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div className="page home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1>Welcome to Marvel Studios</h1>
      <p>Discover the universe of superheroes and epic stories!</p>
    </motion.div>
  );
};

export default Home;
