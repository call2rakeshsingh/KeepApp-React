import React, { useState } from 'react'

function Form(props) {

  const [inputVal, setInputVal] = useState({
    titles:"",
    notes:""
  });

  const onChangeHandler = (event) => {
    setInputVal((oldData) => {
      return {...oldData, [event.target.name]: event.target.value}
    })
  }

  const takeNote = () => {
    props.passNote(inputVal)

    setInputVal({
      titles:"",
      notes:""
    })

  }

  return (
    <div className='container mt-5'>
    <div className="row d-flex justify-content-center">
    <input type="text" className='col-8 fw-bold' placeholder='Title Here' name='titles' value={inputVal.titles} id='titles' onChange={onChangeHandler}/>
    <textarea cols="30" rows="10" className='col-8' placeholder='Note Here' name='notes' value={inputVal.notes} id='notes' onChange={onChangeHandler}></textarea>
    </div>
    <div className="col-10">
    <div className="row d-flex justify-content-end">
    <button className='col-2' onClick={takeNote}>+</button>
    </div>
    </div>
    </div>
  )
}

export default Form
