import Link from "next/link"
import Connection from "./Connection"




//add navigation 
const navigation = [
  { name : 'Home' , href: '/' , current: true },
  { name : 'My NFTS' , href: '/mynfts' , current: false },
  { name : 'Create' , href: '/CreateAndSell' , current: false},
  { name : 'About' , href: '/about' , current: false },
  ]
  
// ad links page 
const Navbar = () => {
  return (
  
    <div>
        <Connection/>
  <br/>
 
     
        <div className="container mx-auto bg-blue-800 px-6 sm:px-12 flex items-center justify-left">
        <nav className="flex items-center ">
      <a href="/" 
      className="hidden xl:block font-abhaya-libre uppercase text-white tracking-wider
       px-4 xl:px-8 py-2 text-lg hover:underline">Home</a>
      
      
      <Link href="/mynfts" ><a className="hidden xl:block font-abhaya-libre uppercase text-white 
       tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline">My NFts</a></Link>
       
      <Link href="/CreateAndSell"> 
      <a className="hidden xl:block font-abhaya-libre uppercase text-white tracking-wider px-4 
      xl:px-8 py-2 text-lg hover:underline">Create And Sell</a></Link>
      <Link  href="/about"><a className="hidden xl:block font-abhaya-libre uppercase text-white tracking-wider 
      px-4 xl:px-8 py-2 text-lg hover:underline">about </a></Link>
     <button className="ml-4 xl:ml-8 flex flex-col"></button>

 
    </nav>  
        </div>
       
      </div>
    

   
  )
}
export default Navbar 

 