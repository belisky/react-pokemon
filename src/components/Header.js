import React from 'react'

const Header = ({gotoNextPage,gotoPrevPage}) => {
    return (
        <>
            <nav className="navigation">
            <div className="container">
             <ul className="nav-list">
               <li className="nav-item"   >{gotoPrevPage && <button onClick={gotoPrevPage} className="nav-link">Prev</button> }</li>
               <li className="nav-item"   >{gotoNextPage && <button onClick={gotoNextPage} className="nav-link">Next</button>}</li>
             </ul>
            </div>
                   </nav>
                   <div className="header">
             <div className="container">
               <h1 className="pokemonbg">Pokemon</h1>
               <p className="pokemonbg_p">A list of pokemon character names brought to you by nobel</p>
             </div>
             </div>
        </>
    )
}

export default Header
