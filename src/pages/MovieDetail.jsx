import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpinerLoading from "../components/SpinerLoading";
import Card from "../Fragments/Card";
import CONFIG from "../api/global/config";
import DbSourse from "../api/data/db-sourse";

const MovieDetail = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getDataMovieDetail = async () => {
      try {
        const data = await DbSourse.Datail(id);
        setDetail(data);
        setLoading(false);
        // console.log('data', data);
      } catch (error) {
        console.log(error);
      }
    };

    getDataMovieDetail();
  }, [id]);
  
  return (

      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {loading ? (
          <SpinerLoading loading={loading} />
        ) : (
          <div>
            <Card>
              <Card.ImageCard
                calasNameImage="h-[30rem]"
                status={detail.status}
                rated={detail.vote_average}
                logo={CONFIG.BASE_IMAGE_URL + detail.poster_path}
              ></Card.ImageCard>
              <Card.Header title={detail.title}></Card.Header>
              <Card.CardTagLine tagline={detail.tagline}></Card.CardTagLine>
              <Card.BodyCard>{detail.overview}</Card.BodyCard>
              <div className="bg-slate-300 p-4 rounded-2xl flex flex-wrap justify-around">
                <div className="mb-3 border-dashed">
                  <h2 className="font-bold text-3xl text-green-500">Genere</h2>
                  <ul>
                    {detail.genres.map((item) => {
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
                <div>
                  <h3 className="font-bold text-2xl text-green-500">
                    Copany Production
                  </h3>
                  {detail.production_companies.length > 0 && (
                    <ul>
                      {detail.production_companies.map((item) => {
                        // Menampilkan nama perusahaan hanya jika nama tersedia
                        if (item.name) {
                          return (
                            <li
                              className="font-bold p-2 text-xl hover:text-lime-600"
                              key={item.id}
                            >
                              {item.name}
                            </li>
                          );
                        } else {
                          return null; // Jika nama tidak tersedia, lewati item ini
                        }
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
            <div>
             
            </div>
          </div>
        )}
      </div>
   
  );
};

export default MovieDetail;
