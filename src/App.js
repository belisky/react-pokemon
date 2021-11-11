import React,{useEffect, useState} from 'react';
import PokemonList from "./components/PokemonList"; 
import axios from 'axios';
import Pagination from './components/Pagination';


function App() {
  const[pokemons,setPokemons]=useState([])
  const[currPageUrl,setCurrPageUrl]=("https://pokeapi.co/api/v2/berry")
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
    <div >
      
       <PokemonList pokemons={pokemons}/>
       <Pagination gotoNextPage={gotoNextPage}
       gotoPrevPage={gotoPrevPage}/>
    </div>
  );
}

export default App;
