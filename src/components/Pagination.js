import React from 'react'

const Pagination = ({nextUrl,prevUrl}) => {
    return (
        <div>
            <button><a href={nextUrl}>Next</a></button>
            <button><a href={prevUrl}>Prev</a></button>
            
        </div>
    )
}

export default Pagination
