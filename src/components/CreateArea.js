import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }

        })
        console.log(note)
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });

        event.preventDefault();

    }

    function handleClickTextArea() {
        setExpanded(true);
        setRows(3);
    }


    return (
        <div>
            <form className="create-note">
                {isExpanded &&
                    <input
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        onChange={handleChange} />
                }
                <textarea
                    onClick={handleClickTextArea}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded? 3 : 1}
                    value={note.content}
                    onChange={handleChange} />
                {isExpanded &&
                    <Zoom in={true}>
                        <Fab className="create-note"
                            onClick={submitNote}>
                            <AddBoxIcon className="addBox" />
                        </Fab>
                    </Zoom>
                }
            </form>
        </div>
    )
}
export default CreateArea;
