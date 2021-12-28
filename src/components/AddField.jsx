import React, { useState } from "react";
import InfoIcon from "@material-ui/icons/Info";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ProjectsIcon from "@material-ui/icons/GitHub";
import SkillsIcon from "@material-ui/icons/LocalActivity";



export default function AddField(props) {

    const [field, setField,] = useState({
      title: "",
      input1:"",
      input2:"",
      input3:"",
      desc1:"",
    });


    function handleChange(title,input1,input2,input3,desc) {
      setField({
        title: title,
        input1: input1,
        input2: input2,
        input3: input3,
        desc: desc,
      });
    }


    function submitField(event) {  /* when we submit, we set our note to the change we were storing */
      props.onAdd(field);
      event.preventDefault();
    }


    var buttons = [{key: 1, title:'Bio' ,input1:'Full Name',input2:'Email',input3:'Mobile',desc:'Github',icon:<InfoIcon/>},

                   {key: 2, title:'Education',input1:'University',input2:'Degree',input3:'Location',desc:'Duration',icon:<SchoolIcon/>},

                   {key: 3, title:'Work History',input1:'Company and Role',input2:'Location',input3:'Duration',desc:'Description',icon:<WorkIcon/>},

                   {key: 4, title:'Projects',input1:'Title',input2:'Technology',input3:'Link',desc:'Description',icon:<ProjectsIcon/>},

                   {key: 5, icon:<SkillsIcon/>}]
    return (
      <div>
        {buttons.map((item) => (
            <button
            key = {item.key}
            onClick={submitField}
            onMouseEnter= {() => handleChange(item.title, item.input1, item.input2, item.input3, item.desc)}
            style={{margin:'5px', }}
            type="primary">
             {item.icon}
            </button>
        ))}
     </div>
    )
};
