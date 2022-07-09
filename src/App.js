
import './app.css'

import React,{useState, useEffect} from "react";


function App() {

  const [quote,setQuote] =useState('');
  let [ author,setAuthor]=useState('')


  useEffect(()=>{
    fetch("http://api.quotable.io/random")
    .then ((response)=> response.json())
    .then(quote=> {
      setQuote(quote.content)
    setAuthor(quote.author)})
    },[])

  const nextQuote=()=>{
    fetch("http://api.quotable.io/random")
         .then ((response)=> response.json())
         .then(quote=> {
        setQuote(quote.content)
        setAuthor(quote.author)})
  }

  
  return (

  <main>
    <section className="container">
      <div className="content">
      <p id="title"> Quote of the Day</p>
      <p className="quote"> 
        {quote}   </p>
        <p className="author"> --{author}</p>
        <div className="button">
           <button onClick={nextQuote}>Next</button>
        </div>
        </div>
    </section>

  </main>
  

  );
}

export default App;
