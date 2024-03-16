import PropTypes from 'prop-types'; // ES6


import { FaClock } from 'react-icons/fa';
import { FaFireAlt } from "react-icons/fa";


const Blog = ({blog,handlecook}) => {


    const {id,cover,title,paragraph,time,ingredients,cl} = blog ;

    return (


<div className="c-container ml-24  mt-8  	 ">




<div className="card card-compact w-96 bg-base-100   shadow-xl	shadow-gray-800	 grid   ">
    
  <img  className='mt-2' src={cover} alt="" />

    <h2 className="card-title font-bold text-4xl ml-4 "> {title} </h2>
    <p className='ml-4 ' > {paragraph} </p>




<h1 className="text-2xl font-semibold ml-4 mt-2"> Ingredients : 6   </h1>

 <ol  className='ml-8 -mt-2' >

{
ingredients.map((hash,idx) =>  <span key={idx} > <a href="">  <br /> - {hash} </a>  </span>  )

}


 </ol>



<div className="time  flex justify-between ">


<div className='ml-4 mt-4'>


<button>  <FaClock />  </button>

<span>  {time} minutes </span>


</div>

<button className='ml-36 mt-4'  > <FaFireAlt />
 </button>
<span className='mr-4 mt-4' > {cl} calories </span>

</div>



    <div className="card-actions m-4 ">
      <button onClick={ ()=> handlecook(blog)  }  className="btn btn-accent"> Want To Cook  </button>
    </div>
  </div>

















</div>





     











        //////<div className=' border-2  border-black md: w-96   ' >

//<img className='md: w-1/3' src = {cover} alt="" />

//<h2 className='text-4xl' > {title} </h2>

//<p> {paragraph} </p>

//</div>


     
    );
};

Blog.propTypes = {


    blog: PropTypes.object.isRequired,
    handlecook: PropTypes.func
}

export default Blog;





