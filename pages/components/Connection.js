import { useState,useEffect } from "react";
import NftError from "./NftError";



const  Connection = () => {

    const [errorMessage ,setErrorMessage] = useState(false);
    const [account, setAccount] = useState('0x34E8E400BE58476977EB37c18d3C005878AB6d0C');

    return (
      <div className="bg-yellow-800">
        <div className="max-w-7x1 mx-auto py-6 px-4 sm:px6 lg:px-8 space-x-5">
            <NftError errorMessage={errorMessage} />
            {
                account
                ? <h1 className="text-x1 font-bold text-purple-400">{"<"+account.slice(0,3) + "........" + account.slice(-3) +">"}</h1>
                : <h1 className="text-x1 font-bold text-purple-400">{"not connected "}</h1>
            }
      </div>
       </div>
    )
    }
    export default NftError