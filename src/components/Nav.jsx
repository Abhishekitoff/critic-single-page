import React, { useContext, useEffect, useState } from 'react'
import { FaStarOfLife, FaMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { Theme } from '../context/Theme';

const Nav = () => {

    const [toggle, settoggle] = useState(false)
    const{theme, settheme} = useContext(Theme)

    useEffect(() => {
    
    }, [])
    
    return (
        <div className='flex items-center justify-between p-4 mx-4 md:mx-16'>
            <div className="logo flex text-2xl font-semibold gap-2 cursor-pointer  items-center ">
                <FaStarOfLife className='text-[#744DFF]' />
                <h3 >Critic Design</h3>
            </div>
            <div className="button flex gap-10 items-center">
                <button className=' border-[1px] p-2 border-[#744DFF] text-[#744DFF] hidden sm:block  '>Place for Learner</button>

               <div>
               {
                   theme =='light' ? <FaMoon onClick={()=> settheme('dark')} className=' cursor-pointer text-[37px] rounded-full bg-slate-200 p-1 duration-100'/> : <FiSun onClick={()=> settheme('light')} className='cursor-pointer text-[37px] rounded-full bg-black p-1 duration-100'/>
                }

               </div>
            </div>
        </div>
    )
}

export default Nav