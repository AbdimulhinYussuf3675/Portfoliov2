import PropTypes from 'prop-types';

const AnimatedLetters = ({ letterClass, strArray, idx }) => (
  <span>
    {strArray.map((char, i) => (
      <span key={`${char.id}-${i}`} className={`${letterClass} _${i + idx}`}>
        {char}
      </span>
    ))}
  </span>
);

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;
