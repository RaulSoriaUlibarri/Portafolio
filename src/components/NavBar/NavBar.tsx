import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return(
        <>
            <nav className="sticky inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all text-gray-600 text-sm dark:bg-black dark:text-white">
                <div className="flex h-14 items-center justify-between md:justify-between px-5 ">
                    <div className="flex justify-between mx-auto w-1/3">
                        <Link
                            href="/">
                            Sobre mí
                        </Link>
                        <Link
                        href='/'>
                        Tecnologías
                        </Link>
                        <Link
                        href='/'>
                        Proyectos
                        </Link>
                        <Link
                        href='/'>
                        Contacto
                        </Link>
                    </div>
                
                </div>
            </nav>
        </>
    )
}

export default NavBar