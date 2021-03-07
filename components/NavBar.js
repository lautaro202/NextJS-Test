import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand">
                     <Link href='/'>Home</Link>
                    </a>

                    <a class="navbar-brand">
                     <Link href='/test'>Users</Link>
                    </a>
            </nav>
        </div>
    )
}
