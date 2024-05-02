import { useEffect, useState } from "react";
import DbSourse from "../api/data/db-sourse";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import CONFIG from "../api/global/config";
import SpinerLoading from "../components/SpinerLoading";
import Card from "../Fragments/Card";
import CardEpsode from "../Fragments/CardEpsode";

const TvSeries = () => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState(null);
  const [recomedarion, setRecomendations] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getTvSeries = async () => {
      const data = await DbSourse.DatailTV(id);
      // console.log("dats", data);
      setSeries(data);
      setLoading(false);
    };
    getTvSeries();
  });

  useEffect(() => {
    const getDataRecomedation = async () => {
      const data = await DbSourse.Recomendation(id);
      // console.log('data', data);
      setRecomendations(data);
    };
    getDataRecomedation();
  }, [id]);

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
                      {series.genres > 0 &&
                        series.genres.map((item) => {
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
                          <img
                            className="w-auto h-20"
                            src={CONFIG.BASE_IMAGE_URL + item.logo_path}
                            alt= {item.name}
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <div className="flex overflow-auto mt-4 mb-4">
            {series.seasons.length > 0 &&
              series.seasons.map((item) => {
                // console.log(item);
                return (
                  <div key={item.id} className="border-2 rounded-sm border-indigo-600 border-solid mr-2">
                  <CardEpsode
                    name={item.name}
                    media_type={item.season_number}
                    text="Epsode : "
                  >
                    <CardEpsode.Img
                      poster_path={CONFIG.BASE_IMAGE_URL + item.poster_path} name={item.name}
                    />
                    <CardEpsode.Relesed air_date={item.air_date} />
                    <CardEpsode.VoteAverage vote_average={item.vote_average} />
                  </CardEpsode>
          </div>
                );
              })}
          </div>
          <div className="items-center justify-center bg-red-900 mt-11 mb-4">
            <h2 className="text-center text-indigo-700 font-bold text-3xl p-4 uppercase border-b-2 border-indigo-400 border-solid">
              Recomendation
            </h2>
          </div>
          <div className="flex overflow-auto mt-4">
            {recomedarion.length > 0 &&
              recomedarion.map((item) => {
                return (
                  <div key={item.id} className="gap-4 shadow-2xl">
                  <CardEpsode
                    
                    name={item.name}
                    media_type={item.media_type}
                    text="Media : "
                  >
                    <CardEpsode.Img
                      poster_path={CONFIG.BASE_IMAGE_URL + item.poster_path} name={item.name}
                    />
                    <CardEpsode.VoteAverage vote_average={item.vote_average} />
                    <CardEpsode.Relesed air_date={item.air_date} />

                    <Card.FooterCardSerie id={item.id}></Card.FooterCardSerie>
                  </CardEpsode>
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
