import React, { useState } from 'react'
import Header from "./Header.js";
import Footer from "./Footer.js";
import Form from "./Form.js";
import NotesData from "./NotesData.js"
import css from "./App.css"


function App() {
  const [savedInputVal, setSavedInputVal] = useState([])

  const addNote = (inputVal) => {
    setSavedInputVal((oldData) => {
     return [...oldData,inputVal]
    })
  }

  const removeData = (id) => {
    setSavedInputVal(() => {
    return savedInputVal.filter((elmArr, index) => {
        return index !== id
      })
    }
    )
  }


  return (
    <>
      <Header />
      <Form passNote={addNote}/>

      <div className="m-5 ">
      <div className="row d-flex justify-content-sm-start">
      {savedInputVal.map((val, index) => {
        return <NotesData key={index} id={index} title={val.titles} notes={val.notes} removeNotesData={removeData}/>
      })}
      </div>
      </div>
      
      <Footer />
    </>
  )
}

export default App

