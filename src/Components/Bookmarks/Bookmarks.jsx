import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ cooks }) => {
  const [selectedBookmark, setSelectedBookmark] = useState(null);

  const handleCookButtonClick = (bookmark) => {
    setSelectedBookmark(bookmark);
  };

  return (
    <div className="md:w-1/3">
      <h2 className="text-2xl font-bold mt-8">Want To Cook: {cooks.length}</h2>


 <div className='flex ml-10 gap-16 text-xl font-bold mt-5 ' >

<h1>NAME:</h1>
<h1>TIME:</h1>
<h1>CALORIES:</h1>
 </div>


      {cooks.map((cook) => (
        <Bookmark key={cook.id} bookmark={cook} onCookButtonClick={handleCookButtonClick} />
      ))}

      {/* Render selected bookmark details in a table */}
      {selectedBookmark && (
        <div className="mt-4">
          <h3 className="text-xl mb-2">Selected Bookmark Details</h3>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">CL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{selectedBookmark.title}</td>
                <td className="border px-4 py-2">{selectedBookmark.time}</td>
                <td className="border px-4 py-2">{selectedBookmark.cl}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

Bookmarks.propTypes = {
  cooks: PropTypes.array.isRequired,
};

export default Bookmarks;









