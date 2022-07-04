import Headline from "./components/Headline";

const About = () => {
  const title = "Nft Marketplace - Lazy Minting" ;
  const subTitle = "Lazy Minting";
    return (
      <div className="bg-black">
      <Headline title={title} subTitle={subTitle} ></Headline>
        <h1> About </h1>
      </div>
    )
    }
    export default About