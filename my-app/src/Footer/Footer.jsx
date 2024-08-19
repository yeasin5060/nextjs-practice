import Image from 'next/image'
import React from 'react'
import logo from '../images/innovate_logo.png'
import Link from 'next/link'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="foot">
        <div className="containers">
            <div className="foot_wrapper">
                <div className="foot_contant">
                    <Image src={logo} alt="no found" />
                    <p className="pera">
                        Install any demo or template with a single click. You can mix and
                        match all the demos &amp; templates. Every demo can be turned into
                        one or multi-page.
                    </p>
                </div>
                <div className="foot_wrapper_two">
                <div className="foot_head">
                    <h4 className="foot_heading">Features</h4>
                    <ul className="foot_list">
                        <li>
                            <Link href="#">home</Link>
                        </li>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">Benifit</Link>
                        </li>
                        <li>
                            <Link href="#">Pricing</Link>
                        </li>
                        <li>
                            <Link href="#">blog</Link>
                        </li>
                    </ul>
                </div>
                <div className="foot_head">
                    <h4 className="foot_heading">Products</h4>
                    <ul className="foot_list">
                        <li>
                            <Link href="#">Task Management</Link>
                        </li>
                        <li>
                            <Link href="#">Company growth</Link>
                        </li>
                        <li>
                            <Link href="#">Time tracking</Link>
                        </li>
                    </ul>
                </div>
                <div className="foot_head">
                    <h4 className="foot_heading">Support</h4>
                    <ul className="foot_list">
                        <li>
                            <Link href="#">Customer service</Link>
                        </li>
                        <li>
                            <Link href="#">Accessibility</Link>
                        </li>
                        <li>
                            <Link href="#">Contact us</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
            <div className=" last_foot_wrapper">
                <div className="last_contant">
                    <Link href="#">@20201 Innovate.All rights reserved.</Link>
                </div>
                <div className="last_contant_wrapper">
                    <div className="last_contant_two">
                        <Link href="#">Privacy policy</Link>
                    </div>
                    <div className="last_contant_two">
                        <Link href="#">Terms &amp; condition</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer