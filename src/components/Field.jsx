import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";


export default function Field(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [input, setInput,] = useState({title: "", input1:"", input2:"", input3:"", desc1:"" });

  function expand() {
     isExpanded === true ? setExpanded(false): setExpanded(true)
  }

  function handleClick(){
    props.onDelete(props.id);
  }

  function handleChange(event) {
  const {name, value} = event.target;
  setInput(prevInput => {
    return {
      ...prevInput,
      [name]: value
    };
  });
 }


  return(
    <div>
      <form>

        <div onClick = {expand}>
            <h3 name="title">{props.title}</h3>
        </div>
          {isExpanded && (<input name = "input1" value = {input['input1']} placeholder = {props.input1} onChange = {handleChange} />)}

          {isExpanded && props.title !== 'Skill' && <input name = "input2" value = {input['input2']} placeholder = {props.input2} onChange = {handleChange} /> }
          {isExpanded && props.title !== 'Skill' && (<input name = "input3" value = {input['input3']} placeholder = {props.input3} onChange = {handleChange} />)}
          {isExpanded && props.title !== 'Skill' && (<textarea name = "desc" value={input['desc']} placeholder = {props.desc}  onChange = {handleChange}/> )}

        <Zoom in= {true}><button type ="button" onClick = {handleClick}> <DeleteIcon/> </button></Zoom>
      </form>
    </div>
  );
};
