import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handlecook}) => {

 const [blogs, setblogs] = useState([]);

 useEffect(   
    ()=>{

fetch('data.json')
.then(res=> res.json())
.then(data=> setblogs(data))


    }
    
    , [])




    return (
        <div className="md: w-2/3"  >



{
 
 
  
  blogs.map( blog =>   <Blog 
    
    handlecook={handlecook}
    
    key={blog.id} blog={blog}  >  </Blog>  )

  
 

}





        </div>
    );
};

Blogs.protoTypes = {

    handlecook: PropTypes.func

}

export default Blogs;



