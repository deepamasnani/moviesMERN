import React from 'react'
import '../Sections/Navbar.css'

const Search = () => {
    return (
        <div style={{marginTop:"2%",width:'85%',marginBottom:"-10%"}} >
            <button style={{marginLeft:"30%",fontSize:"1.2rem",padding:"1%",backgroundColor:"#bd0a28",color:"white", borderRadius:"12px",border:"none"}}><a style={{color:"white"}} href="/search">Search for a movie?</a></button>
        </div>
    )
}

export default Search
