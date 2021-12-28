import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";


export default function Field(props) {

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    if (isExpanded === true) {
      setExpanded(false)
    }
    else {
      setExpanded(true)
    }
  }

  function handleClick(){
    props.onDelete(props.id);
  }

  return(
    <div>

      <form>
        <div onClick = {expand} class= 'header'>
            <h3 name="title"> {props.title} </h3>
        </div>

          {isExpanded && (<input name = "input1" placeholder = {props.input1} />)}
          {isExpanded && (<input name = "input2" placeholder = {props.input2} />)}
          {isExpanded && (<input name = "input3" placeholder = {props.input3} />)}
          {isExpanded && (<textarea name = "desc" placeholder = {props.desc}  />)}

        <Zoom in= {true}>
          <button type ="button" onClick = {handleClick}>
            <DeleteIcon/>
          </button>
        </Zoom>

      </form>

    </div>
  );
};
