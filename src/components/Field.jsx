import React, { useState } from "react";
import ExpandIcon from '@material-ui/icons/ExpandMore';
import MinimizeIcon from '@material-ui/icons/ExpandLess';
import DeleteIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";


export default function Field(props) {

  const [input, setInput,] = useState({ key: props.id, title: props.title, input1:"", input2:"", input3:"", desc:"" });
  const [isExpanded, setExpanded] = useState(false);
  const [addDisabled, disableAdd] = useState(false);
  const [buttonText, setButtonText] = useState(<ExpandIcon/>);

  function expand() {
     isExpanded === true ? setExpanded(false): setExpanded(true)
     isExpanded === true ? setButtonText(<ExpandIcon/>): setButtonText(<MinimizeIcon/>);
  }

  function updateText(){
    props.onAddText(input);
    props.onClick(false);
    disableAdd(true);
  }

  function del(){
    props.onDelete(props.id);
    props.onClick(false);
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
        <h3 name="title">{props.title}</h3>
        {isExpanded && (<input name = "input1" value = {input['input1']} placeholder = {props.input1} onChange = {handleChange} readOnly = {addDisabled} />)}
        {isExpanded && props.title !== 'Skill' && <input name = "input2" value = {input['input2']} placeholder = {props.input2} onChange = {handleChange} readOnly = {addDisabled} /> }
        {isExpanded && props.title !== 'Skill' && (<input name = "input3" value = {input['input3']} placeholder = {props.input3} onChange = {handleChange} readOnly = {addDisabled}/>)}
        {isExpanded && props.title !== 'Skill' && (<textarea name = "desc" value={input['desc']} placeholder = {props.desc}  onChange = {handleChange} readOnly = {addDisabled} /> )}
        {isExpanded && !addDisabled && (<Zoom in= {true}><button className = "append" type ="button" onClick = {updateText}> <AddIcon/> </button></Zoom>)}
        <Zoom in= {true}><button className = "expand"  type ="button" onClick = {expand}> {buttonText} </button></Zoom>
        <Zoom in= {true}><button className = "delete" type ="button" onClick = {del}> <DeleteIcon/> </button></Zoom>
      </form>
    </div>
  );
};
