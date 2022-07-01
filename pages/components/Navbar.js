import Link from "next/link"






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
      <h1>Navbar</h1>
      <nav className="flex items-center">
      <a href="/" 
      className="hidden xl:block font-abhaya-libre uppercase text-black tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline">Home</a>
      <a href="/mynfts" className="hidden xl:block font-abhaya-libre uppercase text-black
       tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline">My NFts</a>
      <a href="/CreateAndSell"
      className="hidden xl:block font-abhaya-libre uppercase text-black tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline">Create And Sell</a>
      <a href="/about" 
      className="hidden xl:block font-abhaya-libre uppercase text-black tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline">about</a>
     <button className="ml-4 xl:ml-8 flex flex-col"></button>
    </nav>

    </div>
  )
}
export default Navbar 

 