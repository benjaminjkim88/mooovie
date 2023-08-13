import React from "react"
import MainButtons from "../components/MainButtons";
 
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