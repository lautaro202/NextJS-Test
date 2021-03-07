import React from 'react'
import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/Container'

export default function UserId(props) {
    const router = useRouter()
    const {id} = router.query
    return (
        <Container>
            {!props.user == '' && <h1>Cargando</h1>}
            <div class="jumbotron">
                <img src={props.users.avatar} alt='error de conexion' style={{borderRadius:'50%',  display:'block', marginLeft:'auto', marginRight:'auto'}} />
                <h1 class="display-3" style={{textAlign:'center'}}>{props.users.first_name} {props.users.last_name}</h1>
                <p style={{textAlign:'center'}} class="lead">{props.users.email}</p>
                </div>
        </Container>
    )
}
UserId.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const data = await res.json()
    console.log(data)
    return {users:data.data  }
}
