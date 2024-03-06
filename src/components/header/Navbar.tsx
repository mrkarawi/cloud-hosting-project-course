"use client";
import Link from "next/link";
import styles from './header.module.css';
import { GiAbstract039 } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-full flex justify-center items-center">
            
            <div
                className={styles.navLinksWrapper}
                style={{
                    clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" || ""
                }}
            >
                <ul className="">
                    <Link onClick={() => setToggle(false)} className="bg-blue-800 rounded-full text-white py-2 px-3 mr-10" href="/">Home</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/articles">Blogs</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/about">About</Link>
                    <Link onClick={() => setToggle(false)} className={styles.navLink} href="/admin">Dashboard</Link>
                </ul>
            </div>
            <div>
                <Link href="/" className={styles.logo}>
                  
                   <GiAbstract039 />
                   
                </Link>
                <div className={styles.menu}>
                    {toggle ? (<IoMdClose onClick={() => setToggle(prev => !prev)} />) : (<AiOutlineMenu onClick={() => setToggle(prev => !prev)} />)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;