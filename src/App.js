
import './App.css';
import React, {useEffect,useState } from 'react'
import Recipe from './components/Recipe';



const App=()=> {
  const APP_ID='20987956';
  const APP_KEY='28918e7af68feac4ad254afe930a40aa';

 const [recipes,setrecipes]=useState([]);
 const [search,setsearch]=useState("");
 const [query,setquery]=useState('chicken');



 
  
  // const [counter,setcounter]=useState(0);
  useEffect(()=>{
    const getrecipes= async ()=>{
      const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data= await response.json();
      // console.log(data.hits);
      setrecipes(data.hits);
 
    } ;
  getrecipes();
  },[query]);

  
  const getsearch = e=>{
    e.preventDeafault();
    setquery(search);
    setsearch(''); 

  };
  const updateSearch = e=>{
    setsearch(e.target.value);
    // console.log(search);
  };


  return (
    <div className="App">  
    <h1>My react app</h1>
    <form onSubmit={getsearch} className='search-form'>
      <input 
      className='search-bar' type="text"
      value={search} onChange={updateSearch}/>

       <button className='search-btn' 
       type='submit'>search</button>
    </form>
     {/* <h1 onClick={()=>setcounter(counter+1)}> {counter}</h1> */}
    
    { recipes.map(recipe=>(
      <Recipe
      key={recipe.recipe.label} 
       title={recipe.recipe.label} 
       calories={recipe.recipe.calories}
       image={recipe.recipe.image}/>
    )) } 
     
    </div>
  );
}

export default App;
