import Link from 'next/link'
import styles from "./header.module.css";
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='flex justify-center'>
    <header className="w-5/6  flex justify-between  h-20 rounded-lg px-8 py-4 mt-1">
        <Navbar />
       
    </header>
    </div>
  )
}

export default Header