import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({cooks}) => {





    return (
        <div className="md:w-1/3   " >
            
<h2 className="text-2xl font-bold mt-8 "  > Want To Cook : {cooks.length} </h2>

{

cooks.map(cook => <Bookmark key={cook.id}  bookmark={cook}  ></Bookmark> )

}



        </div>
    );
};

Bookmarks.propTypes = {

cooks: PropTypes.array

}

export default Bookmarks;