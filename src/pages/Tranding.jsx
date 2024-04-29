import { useEffect, useState } from "react";
import DbSourse from "../api/data/db-sourse";
import Container from "../components/Container";
import SpinerLoading from "../components/SpinerLoading";
import Card from "../Fragments/Card";
import CONFIG from "../api/global/config";

const Tranding = () => {
  const [loading, setLoading] = useState(true);
  const [tranding, setTranding] = useState([]);
  useEffect(() => {
    const getTranding = async () => {
      const response = await DbSourse.TrandingMuvies();

      setTranding(response);
      setLoading(false);
      console.log(response);
    };
    getTranding();
  }, []);
  return (
    <Container>
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Tranding
      </h2>
      {loading ? (
        <SpinerLoading loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tranding.map((item) => {
            return (
              <Card key={item.id}>
                <Card.ImageCard rated={item.vote_average}  status={item.release_date}
                  logo={CONFIG.BASE_IMAGE_URL + item.poster_path}
                />
                <Card.Header title={item.title} />
                <Card.BodyCard>
                  {item.overview.substring(0, 100)}...
                </Card.BodyCard>
                <Card.FooterCard id={item.id} />
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default Tranding;
