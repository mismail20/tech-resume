import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export default function Resume(props) {

  const resume = props.text
  const styles = StyleSheet.create({
    section: {
      border: '3px solid green',
      padding: '10px',
      height:'20%',
      fontSize: 14
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
          {resume.map((item, index) => (
            <View
              key = {index}
              style={styles.section}>
            <Text>
                {item.title !== 'Bio' ? item.title: console.log("Bio")}
                {item.title !== 'Bio' ? '\n\n': console.log("Bio")}
                {item.input1}
                {'\n\n'}
                {item.input2}
                {'\n\n'}
                {item.input3}
                {'\n\n'}
                {item.desc}
            </Text>
            </View>
          ))}
      </Page>
    </Document>
);
}
