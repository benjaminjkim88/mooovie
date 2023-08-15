import React from "react"
import MainButtons from "../components/MainButtons";
import mooo from "../images/mooo.png"
 
const MainMenu =()=> {

    return(
        <div>
            <div className="header">
                <img className="logo--header" src={mooo}/>
                <h1>Mooovie: A Place to Review Movies!</h1>

                <div className="image--placeholder">
                    <p>*picture*</p>
                </div>
            </div>

            <div className="movie-scroll">

                <p>Movies Cards here</p>
 
            </div>

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