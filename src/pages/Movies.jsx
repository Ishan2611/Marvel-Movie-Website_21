import React from 'react';
import { motion } from 'framer-motion';
import './Movies.css';

const movies = [
  {
    title: 'Iron Man',
    image: 'https://cdn.europosters.eu/image/hp/69125.jpg',
    description: 'The story of Tony Stark and how he became Iron Man.',
  },
  {
    title: 'The Avengers',
    image: 'https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg',
    description: 'Earth’s mightiest heroes join forces to fight Loki and his alien army.',
  },
  // Add more movies as needed
];

const Movies = () => {
  return (
    <div className="page movies">
      <h1>Marvel Movies</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <motion.div
            className="movie-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
