import PropTypes from 'prop-types';

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating.rate);

  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`${index < roundedRating ? 'text-yellow-400' : 'text-gray-300'} text-2xl`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-md text-gray-500 ml-2">{rating.count} Reviews</span>
    </div>
  );
}

StarRating.propTypes = {
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

//export default StarRating;