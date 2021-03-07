import React from 'react'
import Container from '../components/Container'
import fetch from 'isomorphic-fetch'
import Users from '../components/Users'

export default function UsersPage(props) {
    return (
        <Container>
                <h1 className="display-3">Datos del usuario!</h1>
                <Users users = {props.users}/>
        </Container>
    )
}

UsersPage.getInitialProps = async (ctx) => {
    const res = await fetch('https://reqres.in/api/users?page=2')
    const data = await res.json()
    return {users:data.data}
  }
