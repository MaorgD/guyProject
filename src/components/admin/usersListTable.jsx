import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { API_URL, doApiMethodToken } from '../../services/servise';
import UserItem from './userItem';
import Paper from '@mui/material/Paper';

const UsersListTable = () => {
    const [ar,setAr] = useState([]);
  
    useEffect(() => {
      doApi();
    },[])
  
    const doApi = async() => {
      let url = API_URL+"/users/usersList";
      try{
        let resp = await doApiMethodToken(url);
        console.log(resp.data);
        setAr(resp.data);
      }
      catch(err){
        console.log(err);
        alert("there problem ,try again later")
      }
  
    }
  
  
    return (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">verified</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">delete user</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ar.map((item,i) => {
              return(
                <UserItem key={item._id} doApi={doApi} index={i} item={item}/>
              )
            })}
        </TableBody>
      </Table>
    </TableContainer>

    //   <div className='container'>
    //     <h1>List of users in systems</h1>
    //     <table className='table-auto'>
    //       <thead>
    //         <tr>
    //           <th>#</th>
    //           <th>Name</th>
    //           <th>Email</th>
    //           <th>Role</th>
    //           <th>Delete</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {ar.map((item,i) => {
    //           return(
    //             <UserItem key={item._id} doApi={doApi} index={i} item={item}/>
    //           )
    //         })}
    //       </tbody>
    //     </table>
    //   </div>
    )
}

export default UsersListTable