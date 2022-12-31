import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
const [showLink,setShowLink] = useState(false)
const containerRef = useRef(null) 
const linksRef = useRef(null) 

useEffect(()=>{
const Height = linksRef.current.getBoundingClientRect()
if (showLink) {
  containerRef.current.style.height = `${Height}`
}
else{
  containerRef.current.style.height = `0px`
}

console.log(Height)

},[showLink])


  return <>
  <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo'/>
        <button className='nav-toggle' onClick={() => setShowLink(!showLink)}><FaBars/></button>
      </div>
       <div className='links-container' ref={containerRef}>
        <ul className='links' ref={linksRef}>
        {links.map((link)=>{
          const {id,url,text} = link
          return <li key={id}>
            <a href={url}>{text}</a>
            </li>
        })}
           </ul>
      </div>
      <ul className='social-icons'>
       {social.map((s)=>{
         const {id,url,icon} = s
         return <li key={id}>
        <a href={url}>{icon}</a> 

         </li>
       })}
      </ul>
    </div>
  </nav>
  
  
  
  
  
  
  
  </>
}

export default Navbar
