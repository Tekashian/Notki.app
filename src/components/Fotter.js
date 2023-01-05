import React from "react";

function Fotter () { 
    const d = new Date();
    let year = d.getFullYear();



    return (
        <footer>
            <p> Jakub Lacki {year}</p>
        </footer>
    )
}


export default Fotter;