import React, { useState, useEffect} from "react"
import MainButtons from "../components/MainButtons";
import MovieScroll from "../components/MovieScroll";
import mooo from "../images/mooo.png"

const MainMenu =()=> {

    
    return(
        <div>
            <div className="header">
                <img className="logo--header" src={mooo} atl="Mooovie Logo"/>
                <h1>Mooovie: A Place to Review Movies!</h1>

                <div className="image--placeholder">
                    <p>*picture*</p>
                </div>
            </div>

            <MovieScroll />
            
            <div className="nav--buttons">
                <MainButtons
                    buttonTitle="Write a Review"
                />
                <MainButtons
                    buttonTitle="Search Movies"
                />
                <MainButtons
                    buttonTitle="About Us"
                /> 
            </div>
        </div>
    )
}

export default MainMenu;