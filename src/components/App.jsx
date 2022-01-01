import React, { useState } from "react";
import AddField from "./AddField";
import Field from "./Field";
import { PDFViewer } from '@react-pdf/renderer';
import Resume from "./Resume";


export default function App() {

  const [fields, setFields] = useState([]);
  const [text, setText] = useState([]);

  function addText(newText) {
    setText(prevText => {
      return [...prevText, newText];
    });
  }

  function deleteText(id) {
    setText(prevFields => {
      return prevFields.filter((item, index) => {
        return index !== id;
      });
    });
  }


  function addField(newField) {
    setFields(prevFields => {
      return [...prevFields, newField];
    });
  }

  function deleteNote(id) {
    setFields(prevFields => {
      return prevFields.filter((item, index) => {
        return index !== id;
      });
    });
  }



  return (
    <div className ="row">
      <div className= "column2">
        <PDFViewer height= {800} width = {500}>
          <Resume
          text = {text}/>
        </PDFViewer>
      </div>
      <div className= "column1">
        <AddField onAdd = {addField}/>
        {fields.map((item, index) => {
          return (
            <Field
              key = {index}
              id = {index}
              title ={item.title}
              input1 = {item.input1}
              input2 = {item.input2}
              input3 = {item.input3}
              desc =  {item.desc}
              onDelete = {deleteNote}
              onAddText = {addText}
              onDeleteText = {deleteText}
            />
          );
        })}
      </div>
    </div>
  );
}
