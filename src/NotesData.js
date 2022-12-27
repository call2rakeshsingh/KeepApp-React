import React from "react";

function NotesData(props) {

  const removeNotes = () => {
    props.removeNotesData(props.id)
  }

  return (
    
        <div
          className="notesCard border col-lg-3 my-3 mx-lg-5 bg-light"
          style={{ borderRadius: "22px"}}
        >
          <div
            className="titleData bg-warning fw-bold"
            style={{ minHeight: "50px", borderRadius: "20px", padding: "10px" }}
          >
            {props.title}
          </div>
          <div
            className="notesData bg-light"
            style={{
              minHeight: "150px",
              padding: "10px",
              borderRadius: "20px",
              
            }}
          >
            {props.notes}
          </div> 
           <div className="d-flex justify-content-end">
          <button className="fw-bold bg-danger button" style={{width:"50px", borderRadius:"10px", border:"none", height:"30px", color:"white"}} onClick={removeNotes}>X</button>  
          </div>   
    </div>
  );
}

export default NotesData;
