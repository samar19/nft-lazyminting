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
      {navigation.map((item) => {
        return (
          <Link key={item.name}  href={item.href}>{item.name}</Link>
        )
      })}

    </div>
  )
}
export default Navbar 

 