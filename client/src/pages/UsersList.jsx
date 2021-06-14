import React, { Component } from 'react'
import {  MDBRow,  MDBCard, MDBCardBody,  MDBIcon, MDBCol, MDBCardImage, MDBCardText, MDBCardTitle } from "mdbreact";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../api/index';
import styled from 'styled-components';



 
const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    width : 650px;
    margin : 100px;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
    margin-left:50px;
    
`


class DeleteUser extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `예약을 취소하시겠습니다?`,
            )
        ) {
            api.deleteUserById(this.props.id)
            window.location.reload()
        }
    }

    render() {
       
        return <Delete onClick={this.deleteUser}>예약 취소</Delete>
    }
}



    class UsersList extends Component {
        constructor(props) {
            super(props)
            this.state = {
                users: [],
                //columns: [],
                isLoading: false,
            }
        }
    
        componentDidMount = async () => {
            this.setState({ isLoading: true })
    
            await api.getAllUsers().then(users => {
                this.setState({
                    users: users.data.data,
                    isLoading: false,
                })
            })
        }
    
    
        render() {
            const { users, isLoading } = this.state
            console.log('TCL: UsersList -> render -> users', users)
            const {classes} = this.props;
    
            
    
           
    
            let showTable = true
            if (!users.length) {
                showTable = false
            }
            
            return (
                <Wrapper>
                    <div>
                      
                                 
                                {/*{user._id}*/}       
        <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>날짜</TableCell>
              <TableCell align="right">시간&nbsp;&nbsp;</TableCell>
              <TableCell align="right">장소&nbsp;</TableCell>
              <TableCell align="right" > 확인&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</TableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
          {users.map(user=>{
                            return <>
              <TableRow  >
                <TableCell component="th" scope="row">{user.date}</TableCell>
                <TableCell align="right">{user.time}</TableCell>
                <TableCell align="right">{user.location} </TableCell>
                <TableCell> <DeleteUser  id={user._id}/></TableCell>
               
              </TableRow>
      </>
    })}
          </TableBody>
        </Table>
      </TableContainer>
    
       
      </div>
                </Wrapper> 
            )
        }
    }

  
export default UsersList;