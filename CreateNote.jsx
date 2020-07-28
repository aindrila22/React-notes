import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {
    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",

    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevdata) => {
            return{
                ...prevdata,
                [name]: value,
            };
        });
        console.log(note);
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
    
        });
    };
    const expandIt = () => {
        setExpand(true);

    };
    const btoNormal = () => {
        setExpand(false);

    };
    return (
        <>
       <div className = "main-note" onDoubleClick={btoNormal}>
       <form className="form">
       { expand? (
       <input  className="input" type="text" name="title" required="required"
        value={note.title} onChange={InputEvent}  placeholder="Title" 
        autoComplete="off" /> ) : null }
       <textarea className="text" rows="" column="" name="content" required="required" value={note.content} onChange={InputEvent} 
        placeholder="Write the note" onClick={expandIt}></textarea>

       { expand? (
       <Button onClick = {addEvent}>
       <AddIcon className="plus" />
       </Button>
       ) : null }
       </form>
       </div><br/><br/>
        </>

    )};
export default CreateNote;