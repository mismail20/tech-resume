import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/themes/theme-c137.css';
import AddField from "./AddField";
import Field from "./Field";
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',

  },
  fullName: {
    backgroundColor: 'blue',
    flexGrow: 1,
    height: '20px'
  },

  mobile: {
    backgroundColor: 'red',
    flexGrow: 1,
    position: 'absolute',
    bottom: 0
  }

});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>



      <View style={styles.fullName}>
        <Text>Mohamed Ismail</Text>
      </View>

      <View style={styles.mobile}>
        <Text>MOB:075190819626</Text>
      </View>



    </Page>
  </Document>
);

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
    <div className ="row">

   {fields.length > 0 &&
      <div className= "column2">
        <PDFViewer height= {800} width = {500}>
          <MyDocument />
        </PDFViewer>
      </div>
   }
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
            />
          );
        })}
        {fields.length > 0 && <AwesomeButton> Submit </AwesomeButton>}
      </div>
    </div>
  );
}
