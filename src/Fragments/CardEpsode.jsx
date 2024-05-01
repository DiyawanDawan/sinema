const CardEpsode = ({text, name, media_type, children}) => {
  return (
  
      <div className="mr-3 transition delay-300 duration-300 ease-in-out border-solid w-full  border-indigo-400 p-3 shadow-xl rounded-lg mt-4">
        <div className="  w-72 hover:w-96 hover:ransition-all h-auto cursor-pointer">
          <div className="mb-5 my-2 relative">
             {children}
          </div>

          <h2 className="text-lg font-bold ">{name}</h2>
          <h2 className="text-lg font-bold "><span>{text}</span>{media_type}</h2>
        </div>

    </div>
  );
};
const Img = ({poster_path}) => {
    return (
        <>
           <img
              className="w-full object-cover rounded-t-lg sepia-0 lazyload"
              src={poster_path}
              alt=""
            />
        </>
    )
}

const Relesed = ({ air_date }) => {
  return (
    <div className="absolute top-4 right-0 text-center">
      <div className="bg-gray-600 text-center p-3 rounded-s-xl">
        <p className="font-bold text-green-400 border-b-2">Reresed</p>
        <span className="text-yellow-500 top-0 font-medium px-6 h-5 pt-2">
          {air_date}
        </span>
      </div>
    </div>
  );
};

const VoteAverage = ({vote_average}) => {
    return (
        <div className="absolute top-4 left-0 text-center">
        <div className="bg-gray-600 text-center p-3 rounded-e-xl">
          <span className="text-yellow-500 font-medium px-6 h-5 pt-2 text-xl">
            {vote_average} &#9055;
          </span>
        </div>
      </div>
    )
};

CardEpsode.Relesed = Relesed;
CardEpsode.VoteAverage = VoteAverage;
CardEpsode.Img = Img;

export default CardEpsode;
