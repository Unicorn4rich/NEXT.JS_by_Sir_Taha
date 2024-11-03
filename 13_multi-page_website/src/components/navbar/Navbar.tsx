import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'   // styles ke naam se ham css module file ko import kar rhy hain or abhi ham navbar.tsx mein hain
// (./) matlab is Navbar.tsx ke parent folder ke andar (modules.css) ki file bhi moujod hai usy get kar ke loadComponents. 


function Navbar() {
  return (
    <div>

        <nav className={styles.navbar}>
          <h1>STYLISH</h1>

          <ul>
            <li><Link href="/" style={{color: "#39373A", fontWeight: "600"}} >HOME</Link></li>
            <li><Link href="/">SHOP</Link></li>
            <li><Link href="/">FEATURES</Link></li>
            <li><Link href="/">CONTACT</Link></li>
          </ul>

          <button>LOGIN</button>
        </nav>

    </div>
  )
}

export default Navbar