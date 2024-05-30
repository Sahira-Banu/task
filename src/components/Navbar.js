import React,{useState} from 'react'
import Logo from '../assets/logo.png'
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'


const Navbar = () =>{
  
const [toggle, setToggle] = useState(false);

 const handleToggle=()=>{
    setToggle(!toggle);
 }
    return (
        <nav className = {toggle? 'navbar expanded' : 'navbar'}>
            <div className='left'>
               <img src={Logo} alt='logo'/>
               <span>Flower Shop</span>
            </div>
                <ul className='links'>
                    <li>Flowers</li>
                    <li>Plants</li>
                    <li>Gifts</li>
                    <li>Same Day</li>
                    <li>Weddings</li>
                    <li><button className='button'>Sign In</button></li>
                </ul>
                <div className='toggle-icon' onClick={handleToggle}>
                    {toggle?<Icon icon={x} size={28}/>: <Icon icon={menu} size={28}/>}
                </div>     
        </nav>
    )
}

export default Navbar