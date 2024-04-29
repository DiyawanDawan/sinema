import { useEffect, useState } from "react";
import DbSourse from "../api/data/db-sourse";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import CONFIG from "../api/global/config";
import SpinerLoading from "../components/SpinerLoading";
import Card from "../Fragments/Card";

const TvSeries = () => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getTvSeries = async () => {
      const data = await DbSourse.DatailTV(id);
      console.log("dats", data);
      setSeries(data);
      setLoading(false);
    };
    getTvSeries();
  });

  useEffect(() => {
    const getVideo = async () => {
      const data = await DbSourse.DiscoverTvVideo(id)
      console.log('video', data);
    }
    getVideo()
  })
  return (
    <Container>
      <h2 className="font-bold text-indigo-700 text-center text-2xl mb-8">
        Detail Section Tv
      </h2>
      {/* {console.log('poster',series.poster_path)} */}
      {loading ? (
        <SpinerLoading loading={loading} />
      ) : (
        <>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              <Card.ImageCard
                calasNameImage="object-cover object-center"
                status={series.first_air_date}
                logo={CONFIG.BASE_IMAGE_URL + series.poster_path}
                rated={series.vote_average}
              />
              <div className="shadow-sm border-solid border-2 border-indigo-400 p-4 rounded-lg">
                <Card.Header title={series.name} />
                <Card.BodyCard>{series.overview}</Card.BodyCard>
                <div className="flex flex-wrap justify-between">

                <div className="mb-3 ">
                  <h2 className="font-bold text-2xl text-green-500 border-b-2 border-indigo-600">
                    Genere
                  </h2>
                  <ul>
                    {series.genres.map((item) => {
                      return (
                        <li
                          className="font-bold p-2 text-xl hover:text-lime-600"
                          key={item.id}
                        >
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mb-3 border-l-2">
                  <h2 className="font-bold text-2xl text-green-500 border-b-2 border-indigo-600 ">
                    Production Country
                  </h2>
                  <ul>
                    {series.production_countries.map((item) => {
                      return (
                        <li
                          className="font-bold p-2 text-xl hover:text-lime-600"
                          key={item.id}
                        >
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                </div>
                <div className="mb-3">
                  <h2 className="font-bold text-2xl text-green-500 border-b-2 border-indigo-600">
                    Production Companies
                  </h2>
                  <div>
                    {series.production_companies.map((item) => {
                      return (
                        <>
                          <p
                            className="font-bold p-2 text-xl hover:text-lime-600"
                            key={item.id}
                          >
                            {item.name}
                          </p>
                          <img className="w-auto h-20"
                            src={CONFIG.BASE_IMAGE_URL + item.logo_path}
                            alt=""
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex overflow-auto mt-4">
            {series.seasons.map((item) => {
              return (
                <div 
                  key={item.id}
                  className="mr-3 border-solid  border-indigo-400 p-3 shadow-xl rounded-lg mt-4"
                >
                  <div className="w-72 h-auto cursor-pointer">
                      <div className="mb-5 my-2 relative">
                        <img
                          className="w-full  object-cover rounded-t-lg sepia-0 lazyload"
                          src={CONFIG.BASE_IMAGE_URL + item.poster_path}
                          alt=""
                        />
                        <div className="absolute bottom-4 left-0 text-center">
                          <div className="bg-gray-600 text-center p-3 rounded-e-xl">
                            <span className="text-yellow-500 font-medium px-6 h-5 pt-2 text-xl">
                              &#9055;{item.vote_average}
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-0 text-center">
                          <div className="bg-gray-600 text-center p-3 rounded-s-xl">
                            <p className="font-bold text-green-400 border-b-2">
                              Satatus Reresed
                            </p>
                            <span className="text-yellow-500 font-medium px-6 h-5 pt-2 text-xl">
                              {item.air_date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h2 className="text-lg font-bold ">{item.name}</h2>
                      <h2 className="text-lg font-bold ">Eposode : {item.episode_count}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </Container>
  );
};

export default TvSeries;
