import React from 'react'

const Pagination = ({gotoNextPage,gotoPrevPage}) => {
    return (
        <div className="pagination container ">
            
             
                {gotoPrevPage &&<button className="btn" onClick={gotoPrevPage}>Prev</button>}
                {gotoNextPage &&<button className="btn" onClick={gotoNextPage}>Next</button>}
              
        </div>
    )
}

export default Pagination
