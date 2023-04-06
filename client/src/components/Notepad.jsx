

const Notepad = ({note, setNote}) => {



  const handleChange = (e) => {
    setNote(e.target.value )
  }

  return (
    <div className='main-content loginform'>
      <h1 >Notepad: </h1>
      <br></br>
      <textarea rows="12" cols="50"
      name='note'
      onChange={handleChange}
      defaultValue={note}
      >
      </textarea>
    </div>
  )
}

export default Notepad
