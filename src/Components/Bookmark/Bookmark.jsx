import PropTypes from 'prop-types';

const Bookmark = ({ bookmark, onPrepare }) => {
    const { title, time, cl } = bookmark;

    const handlePrepare = () => {
        // Call the onPrepare function and pass the bookmark object
        onPrepare(bookmark);
    };

    return (
        <div className='flex font-bold pl-12 gap-10 mt-5'>
            <h3 className="text-xl">{title}</h3>
            <h3 className="text-xl">{time} mint</h3>
            <h3 className="text-xl">{cl} cal</h3>
            <button className="btn btn-accent" onClick={handlePrepare}>Preparing</button>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    onPrepare: PropTypes.func.isRequired // Function to handle preparing action
};

export default Bookmark;


