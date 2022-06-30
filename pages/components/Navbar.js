import Link from "next/link" // nextjs link lib
import React, { Fragment } from 'react'
import {Disclosure , Menu , Transition } from '@headlessui/React'
import { MenuIcon , XIcon } from '@heroicons/react/outline'
import { useRouter} from 'next/router'



//add navigation 
const navigation = [
{ name : 'Home' , href: '/' , current: true },
{ name : 'My NFTS' , href: '/mynfts' , current: false },
{ name : 'Create' , href: '/CreateAndSell' , current: false},
{ name : 'About' , href: '/about' , current: false },
]


function className(...classes){
 return classes.filter(Boolean).join
}


export default function Navbar(){
return (
  <Disclosure as="nav" className="bg-black"></Disclosure> 
  {({open}) =>(

    <div className="max-w-7x1 mx-outo px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

          {/* mobile menu button */}
          <Disclosure.Button className="inline-flex items-center justify-center" >
             <span className="sr-only">open main Menu</span>
             
             (open ? (
              <XIcon className="block h-6 w-6 " aria-hidden="true"/>
              ):(
                <MenuIcon className="block h-6 w-6 " aria-hidden="true"/>
              )
             )
          </Disclosure.Button>
        </div>

        <div className="flex-1 flex items-center justify-center sm:items-stretch">
         <div className="hidden sm:block sm:ml-0">
          <div className="flex space-x-4">
                {navigation.map((item) =>{
                  const router =useRouter ();
                  const isActive = router.asPath === item.href ;
                  return (
                    <link>
                    key={item.name}
                    href={item.href}

                    <a className={className(
                      isActive ? 'bg-purple-400 text-white' : 'text-gray-300'
                    )} aria-current={isActive ? 'page':undefined}>
                    </a>
                    </link> 
                    )}
                
                
                )}

          </div>
          {/* profile dropdown */}
          <Menu as="div" className="ml-3 relative">
            <div >
              
               <Menu.Button className="bg-gray-800 flex text-sm rounded-full">
                <span className="sr-only">open user menu</span>
                <img 
                className="h-8 w-8 rounded-full"
                src="/blue logo bluebg.png"
                alt =""
                />
                </Menu.Button> 


            </div>
          </Menu>
         </div>
        </div>
      </div>
    </div>


  )})
}

