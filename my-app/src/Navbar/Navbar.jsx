import Link from 'next/link'
import logo from '../images/innovate_logo.png'
import './Navbar.css'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav id ="navbar">
        <div className="containers">
            <div className="nav-wrapper">
                <div className='image-box'>
                   <Image className='imgs' src={logo} />
                </div>
                <div className='nav-menu-box'>
                    <ul className='nav-menu'>
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/About"}>About</Link>
                        </li>
                        <li>
                            <Link href={"/Service"}>Service</Link>
                        </li>
                        <li>
                            <Link href={"/Blog"}>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className='nav-btn-box'>
                    <button className='nav-btn'  >Contact</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar