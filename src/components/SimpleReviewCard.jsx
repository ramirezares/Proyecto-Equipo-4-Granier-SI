import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <div className="container border border-grey-300 rounded mb-4 md:flex">
      <div className="w-1/4 md:w-1/4 flex justify-center items-center mb-4 md:mb-0">
        <img
          src={comment.photo}
          alt={comment.username}
          className="w-12 h-12 m-5 rounded-full mx-auto"
        />
      </div>
      <div className="w-3/4 md:w-3/4 ml-8 mb-4">
        <h5 className="text-lg font-bold ">{comment.username}</h5>
        <p className="text-gray-600 md:mt-0 mt-4">{comment.text}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;