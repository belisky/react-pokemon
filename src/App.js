import React,{useEffect, useState} from 'react';
import PokemonList from "./components/PokemonList"; 
import axios from 'axios';
import Pagination from './components/Pagination';
import Header from './components/Header';
import  './Styles/Style.css'


function App() {
  const[pokemons,setPokemons]=useState([])
  const[currPageUrl,setCurrPageUrl]=useState("https://pokeapi.co/api/v2/pokemon")
  const[prevPageUrl,setPrevPageUrl]=useState("")
  const[nextPageUrl,setNextPageUrl]=useState("")
  const [loading,setLoading]=useState(true)


 

useEffect(()=> {
  setLoading(true)
  let cancel
  axios.get(currPageUrl, {
    cancelToken:new axios.CancelToken(c=>cancel=c)
  }).then(res => {
    setLoading(false)
    setNextPageUrl(res.data.next)
    setPrevPageUrl(res.data.previous)
    setPokemons(res.data.results.map(p=>p.name))})


    return ()=>cancel()
 
  
},[currPageUrl])


function gotoNextPage() {
  setCurrPageUrl(nextPageUrl)
}

function gotoPrevPage() {
  setCurrPageUrl(prevPageUrl)
}

if (loading) return "Loading..."


  return (
    <div className="master">
      
       
        <Header gotoNextPage={nextPageUrl ? gotoNextPage : null}
       gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/>
       
       <PokemonList   pokemons={pokemons}/>
       <Pagination    gotoNextPage={nextPageUrl ? gotoNextPage : null}
       gotoPrevPage={prevPageUrl ? gotoPrevPage : null}/>
    
    </div>
  );
}

export default App;
