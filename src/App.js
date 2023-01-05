import React, {useState} from "react";
import Header from "./components/Header"
import Fotter from "./components/Fotter";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";



function App() {

  const [notes, setNotes] = useState([])

  function handleAdd(newNote) {
    setNotes(prevNote => { 
      return [...prevNote, newNote];
    });

  }

  function deleteItem (id) { 
    setNotes(prevNote => {
      return prevNote.filter((noteItem, index) => { 
        return index !== id;
      });
    });

  }


  return (
    <div className="App">
       <Header /> 
       <CreateArea onAdd = {handleAdd}/>
       {notes.map((noteItem, index) => {
        return (
          <Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} deleteItem = {deleteItem} /> 
        )
       })}
       <Fotter />
    </div>
  );
}

export default App;
