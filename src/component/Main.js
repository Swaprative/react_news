import React, { useEffect } from 'react';
import { useState } from 'react';


function Main(){

      const[articles,setArticles]=useState([]);
      const[search,setSearch]=useState("")



      
      /*useEffect(()=>{
            console.log("useEffect")})
      useEffect(()=>{
            console.log("I am sideEffect")},[data,con])
      useEffect(()=>{
            console.log("Called")},[])*/
      useEffect(()=>{
            let url=`https://newsapi.org/v2/everything?q=microsoft&apiKey=3f20538cf2c6444ca85d82050584fc64`;
            fetch(url)
            .then((response)=>response.json())
            .then((news)=>{
                  setArticles(news.articles);
            })
      },[])

      function read(value)
      {
            setSearch(value);
      }

      function searchNews(){
            let url=`https://newsapi.org/v2/everything?q=${search}&apiKey=3f20538cf2c6444ca85d82050584fc64`;
            fetch(url)
            .then((response)=>response.json())
            .then((news)=>{
                  setArticles(news.articles);
            })
      }


      return(
            <div className='box'>
            <h1 className='text'>Today's Headlines</h1>
                  <div className='padd'>

                  <div className='search'>
                  <input type='search' onChange={(event)=>{read(event.target.value)}} placeholder='Enter a topic to search'/>   
                  <button onClick={searchNews}>Search</button>   
                  </div>
                  {
                        articles.length==0?(<h2>No data found by the name "{search}"</h2>):
                        articles.map((articles,index)=>(
                              <div key={index} className='article'>
                              <div className='img'>
                              <div>
                              <span>{articles.title}</span>
                              </div>
                                    <img src={articles.urlToImage}/>
                              </div>
                              <div className='news'></div>
                              <p style={{color:'blue'}}>By- {articles.author}</p>
                              <p>{articles.description}</p>
                              <a href={articles.url} target='_blank'>
                              <button>Read More</button>
                              </a>
                              </div>
                        ))
                  }
                  
                  </div>
            </div>

      )
}

export default Main