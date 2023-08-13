import React from "react"
 
const MainMenu =()=> {

    return(
        <div>
            <div className="header">
                <p className="logo--placeholder">*Logo*</p>
                <h1>Mooovie: A Place to Review Movies!</h1>

                <div className="image--placeholder">
                    <p>*Picture*</p>
                </div>
            </div>

            <div className="movie-scroll">

                <p>Movies Cards here</p>
 
            </div>

            <div className="nav--buttons">
                <button className="nav--button">Write a Review</button>
                <button className="nav--button">Search Movies</button>
                <button className="nav--button">About Us</button>
            </div>
        </div>
    )
}

export default MainMenu;