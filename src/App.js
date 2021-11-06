import {useState,useEffect} from 'react'
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function App() {

  const [min,setMin] = useState(1)
  const [max,setMax] = useState(10)
  const [number,setNumber] = useState(0)
  const [answer,setAnswer] = useState(0)
  const [showNumber,setShowNumber] = useState(true)
  const [level,setLevel] = useState(0)


  // const time = setTimeout(()=>{
  //   setShowNumber(false)
  // },5000)

  useEffect(()=>{
    setTimeout(()=>{
      setShowNumber(false)
    },5000)
  },[number])


  const compareNumbers = () =>{
    if(number == answer){
      console.log('true')
      setLevel(level+1)
      setAnswer('')
      setMin(min*10)
      setMax(max*10)
      setNumber(
        Math.floor(Math.random()*(max-min)+min)
      )
      setShowNumber(true)
    }else{
      console.log('false')
      window.location = '/'
    }
  }

  return (
    <Paper  sx={{ padding: 10,justifyContent:"center",caretColor: 'transparent' }}>
       { showNumber ? 
        
          <Typography align = 'center' variant ='h1'>{number}</Typography> 
          : 
          <Stack 
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField 
               variant = 'outlined'
               helperText="Enter the number you just see on the screen"
               value = {answer}
               onChange = { e => setAnswer(e.target.value)}
            />
            <Button onClick={()=>compareNumbers()} variant="outlined" size="medium"> Submit</Button>
           <br/>
           <br/>
          </Stack>
        }
        <Typography align = 'center' variant ='h6'>Level  {level}</Typography> 
    </Paper>
  );
}

export default App;
