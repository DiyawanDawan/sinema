import { Link } from "react-router-dom"

const Card = ({ children }) => {
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}
const ImageCard = ({logo, calasNameImage = "h-80", rated, status}) => {
    return (
        <>
        <div className="mb-5 my-2 relative">
          <img className={`${calasNameImage}  w-full  object-cover rounded-t-lg sepia-0 lazyload`} src={logo} alt="" />
          <div className="absolute bottom-4 left-0 text-center">
            <div className="bg-gray-600 text-center p-3 rounded-e-xl">
                
              <span className="text-yellow-500 font-medium px-6 h-5 pt-2 text-xl">&#9055;{rated}</span>
               </div>
          </div>
          <div className="absolute bottom-4 right-0 text-center">
            <div className="bg-gray-600 text-center p-3 rounded-s-xl">
                <p className="font-bold text-green-400 border-b-2">Satatus Reresed</p>
               <span className="text-yellow-500 font-medium px-6 h-5 pt-2 text-xl">{status}</span>
            </div>
          </div>
        </div>
      </>
      
    )
}

const Header = ({title}) => {
    return (
        <div className="mb-4">
            <h2 className="text-3xl font-bold">{title}</h2>
        </div>
    )
}

const BodyCard = ({ children }) => {
    return (
        
        <div className="mb-5">
            {children}
           
        </div>
        
        
    )
}

const FooterCard = ({id}) => {
    return (
        <>
            <div className="border border-gray-100 mb-5"></div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                {/* <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Miami, FL
                </div> */}
                <Link to={`/detail/${id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Read More
                </Link>
            </div>
        </>
    )
}
const FooterCardSerie = ({id}) => {
    return (
        <>
            <div className="border border-gray-100 mb-5"></div>
            <div className="flex flex-col lg:flex-row justify-between mb-4">
                {/* <div className="text-orange-700 mb-3">
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    Miami, FL
                </div> */}
                <Link to={`/tvseries/${id}`}
                    className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                >
                    Read More
                </Link>
            </div>
        </>
    )
}

const CardTagLine = ({tagline}) => {
    // console.log(tagline);
  return (  <div className="mb-4">
        <span className="font-bold text-black p-1 rounded-lg bg-slate-400">{tagline}</span>
    </div>
  )
}
Card.ImageCard = ImageCard;
Card.Header = Header
Card.BodyCard = BodyCard
Card.FooterCard = FooterCard
Card.FooterCardSerie = FooterCardSerie
Card.CardTagLine = CardTagLine

export default Card