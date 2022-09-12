import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
const Nav = () => {
    return (
        <div className=''>
            <ul className='text-center opacity-75 flex justify-center items-center absolute top-[15px] left-[50px] z-[2]'>
                <li className='font-mono font-semibold bg-slate-400 w-32 mx-auto ml-2'>
                    <Link to="/transport">Transportation</Link>
                </li>
                <li className='font-mono font-semibold bg-slate-400 w-32 mx-auto ml-2'>
                    <Link to="/dncc">DNCC Buildings</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav