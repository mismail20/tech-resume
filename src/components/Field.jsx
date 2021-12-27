import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";


export default function Field(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return(
    <div>
      <form>
        <h3 name="title"> {props.title} </h3>
        <input name="input1"placeholder={props.input1} />
        <input name="input2"placeholder={props.input2} />
        <input name="input3"placeholder={props.input3} />
        <textarea name="desc"placeholder={props.desc} />
        <Zoom in= {true}>
        <button onClick={handleClick}>
        <DeleteIcon/>
        </button>
        </Zoom>
      </form>
    </div>

  );
};
