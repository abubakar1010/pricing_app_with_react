import { useState } from "react";
import Link from "../Link/Link";
import { FaAlignJustify,FaXmark } from "react-icons/fa6";

const NavBar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Product Details', path: '/products/:id' },
        { id: 5, name: 'Contact', path: '/contact' }
            ];

            const [ open, setOpen ] = useState(false)


            function handleOpen(){

                setOpen(!open)
            }

    return ( 

        <>

        <div className="my-7 container mx-auto space-y-4">

        {
                open? <FaXmark className={` text-2xl md:hidden`} onClick={handleOpen}/> : <FaAlignJustify className={` text-2xl md:hidden`} onClick={handleOpen} /> 
            }

        <ul className={` md:flex absolute md:static gap-10 justify-end items-center duration-1000 ${ open? "left-8" : "-left-40"} ${ open && 'absolute'}`}>
            
            {
                routes.map( route => 
                    <Link  
                        key={route.id}
                        route={route}
                        open={open} />)
            }
        </ul>

        </div>


        </>
    );
};

export default NavBar;