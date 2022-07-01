
const  NftError = ({errorMessage}) => {

    return (
      <div className="bg-black">
        <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-red-500 inline">{errorMessage}</h1>
      </div>
       </div>
    )
    }
    export default NftError