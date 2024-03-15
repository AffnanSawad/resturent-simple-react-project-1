

import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
 

 const [cooks,setcooks] = useState([])





 const handlecook = blog => {

  const newresult = [ ...cooks ,blog  ];
  setcooks(newresult);

 }




  return (
    <>
     
     
     <Header>  </Header>
     
    <div className='md:flex ' >

    <Blogs
    
    handlecook={handlecook} 


    >  </Blogs>

    <Bookmarks  
    
    cooks={cooks}
    
    
    > </Bookmarks>

    

    </div>
     
      
    </>
  )
}

export default App
