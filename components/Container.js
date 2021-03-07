import React from 'react'
import NavBar from './NavBar'
import Head from 'next/head'
export default function Container(props) {
    return (
        <div>   
            <NavBar />
            <Head>
                <title>Proyecto Next JS</title>
                <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css'/>
            </Head>
            {props.children}
        </div>
    )
}
