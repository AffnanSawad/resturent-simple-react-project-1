import PropTypes from 'prop-types'


const Bookmark = ({bookmark}) => {
    
    const {title,time,cl} = bookmark;
    
    
    return (
        <div>
            

<h3 className="text-xl"> {title} </h3>


        </div>
    );
};

Bookmark.propTypes={

bookmark: PropTypes.object

}

export default Bookmark;