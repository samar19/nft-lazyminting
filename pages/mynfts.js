import Headline from "./components/Headline";
import NFTs from "./components/NFTs";


const MyNFTs = () => {
  const title = "Nft Marketplace - Lazy Minting" ;
  const subTitle = "Lazy Minting";
  
  const loadSignerItemOnly = true;
    return (
      
      <div className="bg-black">
      <Headline> title={title} subTitle={subTitle} </Headline>
      <NFTs loadSignerItemOnly={loadSignerItemOnly}/>
    </div>
    )
    }
    export default MyNFTs 