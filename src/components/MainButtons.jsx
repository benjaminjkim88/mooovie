import React from "react"

const MainButtons =(props)=> {
    
    return(
        <div className="nav--button">
            <button>{props.buttonTitle}</button>
        </div>
    )
}

export default MainButtons;