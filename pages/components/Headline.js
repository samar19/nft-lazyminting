


const Headline = ({title ,subTitle}) => {
    return (
    <div className="bg-gray-500 shadow">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 ">
            
            <h2 className="text-3x1 font-extrabold tracking-tight text-purple-400 sm-text-40">
                <span className="block ">{title}</span>
                <span className="block text-black">{subTitle}</span>
            </h2>
           
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="flex rounded-md shadow">
                    <a href="/CreateAndSell" 
                    className="inline-flex items-center justify-center px-5 py-3 border">
                        Create and Sell your NFT

                    </a>

                </div>
                
            </div>
 
        </div>
    </div>
    
    )
    }
    export default Headline