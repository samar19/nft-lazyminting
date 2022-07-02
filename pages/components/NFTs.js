import NftError from "./NftError";
import { useState } from 'react';
import { useRouter } from "next/router";
import { scaleFadeConfig } from "@chakra-ui/react";


export default function NFTs ({loadSignerItemOnly}) {

    //Temporary
    const nftItem = [
{
    tokenId : 1 , 
    name : 'frist',
    href : '#',
    image : '/NFTs/fake-boredape1.jpg',
    price : '35.32454356',
    ownerAdress :'0x34',
    islistedForSale :'true',
    isOwnerBySigner : 'true',
    hasVaildSaleOrder : 'false',
},

{
    tokenId : 2 , 
    name : 'second',
    href : '#',
    image : '/NFTs/fake-boredape2.jpg',
    price : '41.32454356',
    ownerAdress :'0x34',
    islistedForSale :'true',
    isOwnerBySigner : 'true',
    hasVaildSaleOrder : 'false',
},
    ]
    const loadingInfo = '';
    const error = null ;
    const router =useRouter();
    const [errorMessage ,setErrorMessage] =useState ('');

    const errorHandling = (error) => {

        if(error){

            if (!error.data) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage(error.data.message);
            }
        } else {
            setErrorMessage('');
        }
    }

const updateState = (nftItem) => {
const index =nftItem.findIndex(item._id == nftItem._id);

const updateNftItems = [...nftItem];
updateNftItems[index]  = nftItem;
setNftItems (updateNftItems);
}

const sellNFT =async (nftItem) => {
    router.push({pathname:'/CreateAndSell' , query: nftItem});
}

const delistFromSale = async (nftItem) => {
    try {
        errorHandling (null); 
        nftItem = {...nftItem , islistedForSale : false }; 
        updateState (nftItem);

    }catch (error) {
        errorHandling(error);
    }
}

const buyNft = async (nftItem) => {
    try {
        errorHandling (null);
        nftItem = {...nftItem ,isOwnerBySigner:true , islistedForSale :false , price: 0 };
        updateState(nftItem);

    }catch (error) {
        errorHandling(error);
    }
}

const deleteSalesOrder =async (nftItem) => {
    try {
        errorHandling (null);
        nftItem = {...nftItem ,islistedForSale:false , hasVaildSaleOrder :false , price: 0 };
        updateState(nftItem);
    } catch (error) {
        errorHandling(error);
}

}
if (loadingInfo) return (<NftError errorMessage={loadingInfo}/>);

if (!nftItem) return (<div className="bg-black h-96"></div>);

return (
    <div className="bg-black">
        <NftError errorMessage={errorMessage}/>
        <div className="max-w-2x1 mx-auto py-16 px-4 sm:py-12 sm:px-6 lg:max-w-7x1 lg:px-6">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols">
                {nftItem.map((nftItem) => (

                    <div key={nftItem.tokenId} className="group relative">
                        <div className="rounded-xl bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#5EE4B4]">
                            <div className="w-full h-full object-center object-cover lg:w-full lg:h-6">
                                <img 
                                src={nftItem.image}
                                alt={nftItem.name}
                                className="w-full h-full object-center object-cover lg:w-full h-6"
                                />

                            </div>
                            <div className="mt-4 flex justify-between">

                            </div>

                        </div>

                    </div>
                )
               
               

                )}
              
            </div>
        </div>

    </div>
)

}