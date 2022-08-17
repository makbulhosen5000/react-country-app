import React, { useEffect, useState } from 'react'

function Search(props) {
    const [searchText,setSearchText] = useState("");

    const handleChange = (e) =>{
        setSearchText(e.target.value); 
    }
    useEffect(()=>{
        props.onSearch(searchText);
    },[searchText])
  return (
    <div style={{ textAlign:"center" }}>
        <input type="text" value={searchText} placeholder ="Search Country" onChange={handleChange} />
    </div>
  )
}

export default Search