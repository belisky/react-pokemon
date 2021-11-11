import React from 'react'

const Pagination = ({gotoNextPage,gotoPrevPage}) => {
    return (
        <div className="container">
            <div className="pagination">
            
            
                    {gotoPrevPage &&<button className="btn" onClick={gotoPrevPage}>Prev</button>}
                    {gotoNextPage &&<button className="btn" onClick={gotoNextPage}>Next</button>}
            
            </div>
        </div>
    )
}

export default Pagination
