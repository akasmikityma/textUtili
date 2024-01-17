import React,{useState} from 'react'

function Textform() {
  const [text, settext] = useState('')
  const upCase=()=>{
    let newtext=text.toUpperCase();
    settext(newtext);
  }
  const upcaseOnChange=(event)=>{
     settext(event.target.value)
  }
  return (
    <div>
        <div className="mb-3  my-3">
          
  <textarea className="form-control"  value={text} onChange={upcaseOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  <button type="button" onClick={upCase} className="btn btn-primary my-3 ">convert to upperCase</button>
</div>
    </div>
  )
}

export default Textform