import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import Header from './Components/Header/Header';

function App() {
  const [cooks, setcooks] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null); // State to track the selected blog

  const handlecook = (blog) => {
    const newresult = [...cooks, blog];
    setcooks(newresult);

    // Check if 'Want To Cook' button is clicked more than once
    if (newresult.length > 1) {
      toast.warning('You have added multiple items to cook!', { autoClose: 3000 });
    }
  };

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      <Header />
      <div className='md:flex'>
        <Blogs handlecook={handlecook} handleBlogSelect={handleBlogSelect} />
        <Bookmarks cooks={cooks} />
      </div>

      {/* Display details of the selected blog in a new table */}
      {selectedBlog && (
        <div className='selected-blog-details'>
          <h2>Selected Blog Details</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Time</th>
                <th>CL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedBlog.title}</td>
                <td>{selectedBlog.time}</td>
                <td>{selectedBlog.cl}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </>
  );
}

export default App;





