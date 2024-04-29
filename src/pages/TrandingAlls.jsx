import { useEffect, useState } from "react";
import DbSourse from "../api/data/db-sourse";
import SpinerLoading from "../components/SpinerLoading";
import Container from "../components/Container";
import Card from "../Fragments/Card";
import CONFIG from "../api/global/config";

const TrandingAlls = () => {
  const [alltranding, setAllTranding] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDataTrandingAll = async () => {
      const data = await DbSourse.TrandingAll();
      console.log("data", data);
      setAllTranding(data);
      setLoading(false);
    };
    getDataTrandingAll();
  }, []);
  return (
    <Container>
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Tranding Sicenema
      </h2>
      {loading ? (
        <SpinerLoading loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alltranding.map((item) => {
            console.log("data", item);
            // console.log(item);
            return (
              <Card key={item.id}>
                <Card.ImageCard
                  rated={item.vote_average}
                  status={item.release_date}
                  logo={CONFIG.BASE_IMAGE_URL + item.poster_path}
                ></Card.ImageCard>
                {item.media_type === "tv" ? <Card.Header title={item.name}></Card.Header> : <Card.Header title={item.title}></Card.Header>}
                
                <h2 className="font-bold text-2xl">Meedia {item.media_type}</h2>
                <Card.BodyCard>
                  {item.overview.substring(0, 100)}...
                </Card.BodyCard>
                {item.media_type === "tv" ? (
                  <Card.FooterCardSerie id={item.id}></Card.FooterCardSerie>
                ) : (
                  <Card.FooterCard id={item.id}></Card.FooterCard>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default TrandingAlls;
