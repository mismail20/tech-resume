import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';
import AddField from "./AddField";
import Field from "./Field";
import Footer from "./Footer";

export default function App() {

  const [fields, setFields] = useState([]);

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
    <div>
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
          />
        );
      })}
      {fields.length > 0 && <AwesomeButton> Submit </AwesomeButton>}
      <Footer />
    </div>


  );
}
