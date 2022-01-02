import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function Resume(props) {

  const resume = props.text

  const bioStyle = StyleSheet.create({
    section: {
      border: '3px solid green',
      padding: '10px',
      height:'20%',
      fontSize: 14
    },
  });

  const eduStyle = StyleSheet.create({
    section: {
      border: '3px solid blue',
      padding: '10px',
      height:'20%',
      fontSize: 14
    },
  });


  const workStyle = StyleSheet.create({
    section: {
      border: '3px solid red',
      padding: '10px',
      height:'20%',
      fontSize: 14
    },
  });

  const projStyle = StyleSheet.create({
    section: {
      border: '3px solid yellow',
      padding: '10px',
      height:'20%',
      fontSize: 14
    },
  });

  const skillStyle = StyleSheet.create({
    section: {
      border: '3px solid orange',
      padding: '10px',
      height:'9%',
      fontSize: 14
    },
  });

  function stylePicker(title) {
    if (title === 'Bio'){
      return bioStyle.section;
    }
    else if (title === 'Education') {
      return eduStyle.section;
    }
    else if (title === 'Work History') {
      return workStyle.section;
    }
    else if (title === 'Project') {
      return projStyle.section;
    }
    else{
      return skillStyle.section;
    }
  }

  function titleChecker(title,index) {
    if (title === 'Bio' || (index > 0 && (resume[index-1]['title'] === resume[index]['title']))){
      return
    }
    return title + '\n\n'
  }

  return (
    <Document>
      <Page size="A4">
          {resume.map((item, index) => (
            <View
              key = {index}
              style={stylePicker(item.title)}
            >
            <Text>
                {titleChecker(item.title,index)}
                {item.input1}
                {item.title !== 'Skill' ? '\n\n': console.log("skill added")}
                {item.title !== 'Skill' ? item.input2 : console.log("skill added")}
                {item.title !== 'Skill' ? '\n\n': console.log("skill added")}
                {item.title !== 'Skill' ? item.input3 : console.log("skill added")}
                {item.title !== 'Skill' ? '\n\n': console.log("skill added")}
                {item.title !== 'Skill' ? item.desc : console.log("skill added")}
            </Text>
            </View>
          ))}
      </Page>
    </Document>
);

}
