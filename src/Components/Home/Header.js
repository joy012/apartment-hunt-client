import React, { useEffect, useState } from 'react';
import '../Css/Home.css'

const Header = () => {
   
     const [search, setSearch] = useState('')
    const handleSearch = event=>{
       // setSearch(event.target.value)
     }
    //  useEffect(() => {
    //     fetch('https://cryptic-ocean-31876.herokuapp.com/orglist?search='+search) 
    //         .then(response => response.json())
    //         .then(data => setOrg(data)); 
    //   }, [search]);
    return (
        <section className ='header header-bg '>
            <div style={{height:'500px'}} className ='d-flex flex-column align-items-center text-white justify-content-center'>
                <h1>FIND YOUR HOUSE RENT.</h1> 
                <div className = 'search-bar '>
                    <input type="text" placeholder ='Search...' onBlur = {handleSearch}/> 
                   
                    <button className= 'btn theme-bg  btn-lg ml-3'> Search</button>
                </div>  
            </div>
        </section>
    );
};

export default Header;