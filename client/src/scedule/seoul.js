import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css'
import api from '../api/index';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles({
  table: {
    maxWidth:980,
    minWidth: 650,
    margin:'0 auto',
  },
  name:{
      fontSize:15,
      alignItems:'center',
    justifyContent:'center',
  },
  Date:{
    margin : 10,
  }
});

function createData( time, location, id) {
  return { time, location ,id};
}


const rows = [
  createData('16:00', '동작구 A 농구코트', 1),
  createData('18:00', '관악구 B 농구코드',2),
  createData('18:00', '도봉구 C 농구코드',3 ),
  createData('18:30', '용산구 D 농구코드',4 ),
  createData('19:00', '성북구 E 농구코드',5),
  createData('20:00', '성동구 F 농구코드',6),
  createData('21:00', '중랑구 G 농구코드',7),
];


function Seoul() {
  
  const [startDate, setStartDate] = useState(new Date());
  const [time, SetTime] = useState('');
  const [location, SetLocation] = useState('');

  const insertData = (times,locations) =>{

    SetTime(times);
    SetLocation(locations);


    console.log('time=',JSON.stringify(startDate));
    console.log('location=',location);
  }

  const courtData = (courtID)=>{
    console.log(courtID)
    if(courtID==1){
    history.push('/court');
  }
    else if(courtID==2){
      history.push('/court2')
    }
  }
  
  const dateToString = (date) => {
    return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
  }
    const test = dateToString(startDate);
    const date = JSON.stringify(test);
    const payload = {date, time, location};

    api.insertUser(payload).then(res => {
     window.alert(`User inserted successfully`) 
   })
    
    
   const history = useHistory();
  const classes = useStyles();

  return ( 
    <div>
    <div className={classes.Date}>
    <DatePicker  selected={startDate} minDate={new Date()} dateFormat="yyyy-MM-dd" onChange={(date) => setStartDate(date)} locale={ko}/>
    </div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.name} >시간</TableCell>
            <TableCell align="center"  className={classes.name}>장소</TableCell>
            <TableCell align="right" className={classes.name}>선택하기&nbsp;&nbsp;&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.time}  className={classes.name}>
              <TableCell component="th" scope="row" className={classes.name} value={row.time}>
                {row.time}
              </TableCell>
              <TableCell align="center" className={classes.name} value={row.location}>
                <Button onClick={()=>courtData(row.id)}>
                {row.location}
                </Button>
                </TableCell>
              <TableCell align="right" className={classes.name}>
                  <Button variant="contained" color="primary" size="large" onClick={()=>insertData(row.time,row.location)}>신청하기</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Seoul;