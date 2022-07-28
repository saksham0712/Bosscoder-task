import logo from './logo.svg';

import './App.css';
import SendIcon from '@mui/icons-material/Send';
import { AppBar, Button, CssBaseline, getAccordionDetailsUtilityClass, Toolbar, Typography } from '@mui/material';
import { ButtonGroup } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { TextField } from '@material-ui/core';
import React, { useState } from "react";

function App() {
  const [someText, setSomeText] = useState();
  const convertToTitleCase = () => {
    let camelCaseText = someText
      .split(' ')
      .map(function (word, index) {
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
            .toLowerCase();
      })
      .join(' ');
    setSomeText(camelCaseText);
    };
  const [val, setVal] = useState();
  const[print,setPrint]=useState(false)
  function getData(val)
  {
    console.warn(val.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography>Welcome to my task</Typography><br></br>
       
        <AppBar><Toolbar><Typography>Bosscoder</Typography></Toolbar></AppBar>
     
       <TextField value={val} color="secondary" id="input" label="TEXT" variant='outlined'></TextField><br></br>
       
       <ButtonGroup color="success">

       <Button onPress={convertToTitleCase} /*onClick={()=>alert("Uppercased")} */ variant="contained" size="small" color="secondary" startIcon={<ArrowUpwardIcon/>} className="up-btn" >Uppercase</Button>
       
       <Button onClick={()=>setVal(()=>" ")} /*onClick={()=>alert("text are cleared")} */ variant="contained" size="small" color="secondary" className="clear-btn" >clear text</Button><br></br>
       
       <Button onClick={()=>alert("copied")} variant="contained" size="small" color="secondary" startIcon={<ContentCopyIcon/>} className="copy-btn">copy</Button>
       
       <Button onClick={()=>setPrint(true)} onClick={()=>alert("sended")} variant="contained" size="small" color="secondary" startIcon={<SendIcon/>} className="sned-btn">Send</Button>
       </ButtonGroup> 
       
      
       
       
      </header>
    </div>
  );
}

export default App;
