import { Box, Container } from '@mui/material'
import React from 'react'
import UsersListTable from '../components/admin/usersListTable'

const UsersList = () => {
    console.log('UsersList')
  return (
    <Container maxWidth="xl">
    <UsersListTable/>
  </Container>
    
  )
}

export default UsersList