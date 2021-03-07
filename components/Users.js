import React from 'react'
import Router from 'next/router'

export default function Users(props) {
    return (
        <ul className='list-group'>
            {
                props.users.map(user => {
                    return (
                    <li key={user.id} className='list-group-item'>
                        <img 
                        alt='error con el servidor' 
                        style={{borderRadius:'50%', display:'block', marginLeft:'auto', marginRight:'auto'}} 
                        src={user.avatar}
                        onClick={e => Router.push('/users/[id]', `/users/${user.id}`)}
                        />
                        <h5 
                        style ={{textAlign:'center'}} 
                        className="display-7">
                            {user.first_name} {user.last_name}
                        </h5>
                        <p 
                        style ={{textAlign:'center'}}>
                            Email: {user.email} 
                        </p>
                    </li>
                    )
                })
            }
        </ul>
    )
}
