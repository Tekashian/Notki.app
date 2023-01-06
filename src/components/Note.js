import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Zoom from '@mui/material/Zoom';

function Note(props) {

    function handleDelete() {
        props.deleteItem(props.id)
    }


    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Zoom in={true}>
                <button className="create-note"
                    onClick={handleDelete}>
                    <DeleteIcon />
                </button>
            </Zoom>
        </div>
    )
}


export default Note;