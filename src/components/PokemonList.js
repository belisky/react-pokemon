 import React from 'react'
  
 
 const PokemonList = ({pokemons}) => {
     return (
           <div className="main container">
               {pokemons.map(pokemon => (
                   <div className="pokemon" key={pokemon}>{pokemon}</div>
               ))}
           </div>
     )
 }
 
 export default PokemonList
 
 
 
