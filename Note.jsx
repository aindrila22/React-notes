import React from 'react';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note = (props) => {
    const today = new Date();
    const curdate = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const deleteNote = () => {
        props.deleteItem(props.id);
    };
    return (
        <>
       <div className = "note">
       <span className="date"><b>{curdate}</b> </span><br/>
       <h1>{props.title}</h1> 
       <br/>
       <p>{props.content}</p>
       <button className="btn" onClick={deleteNote}>
       < DeleteOutlineIcon className="deleteicon" />
      
       </button>
       </div>
        </>

    )};
export default Note;