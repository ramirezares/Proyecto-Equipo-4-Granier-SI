import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
    return (
        <div className="container border border-grey-300 rounded flex mb-4">
            <div className="w-1/4 flex flex-col justify-center items-center">
            <img
                src={comment.photo}
                alt={comment.username}
                className="w-12 h-12 rounded-full mx-auto"
            /></div>
            <div className="w-3/4 ">
                <h5 className="text-lg font-bold">{comment.username}</h5>
                <p className="text-gray-600">{comment.text}</p>
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