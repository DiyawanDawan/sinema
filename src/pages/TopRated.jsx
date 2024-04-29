import { useEffect, useState } from "react"
import Container from "../components/Container"
import Card from "../Fragments/Card"
import DbSourse from "../api/data/db-sourse"
import CONFIG from "../api/global/config"
import SpinerLoading from "../components/SpinerLoading"

const TopReted = () => {
  const [topRaed, setTopReted] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDataTopReted = async () => {
      const data = await DbSourse.TopReted()
      console.log(data);
      setTopReted(data)
      setLoading(false);
    }
    getDataTopReted()
    }, [])
  return (
    <Container>
       <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Top Reted
      </h2>
     
        {loading ? (<SpinerLoading loading={loading}/>) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topRaed.map((item) => {
                console.log(item);
                return (
                  <Card key={item.id}>
                    <Card.ImageCard rated={item.vote_average}  status={item.release_date} logo={CONFIG.BASE_IMAGE_URL + item.poster_path} />
                    <Card.Header title={item.title} />
                        <Card.BodyCard>
                          {item.overview.substring(0, 100)}...
                        </Card.BodyCard>
                        <Card.FooterCard id={item.id} />
                  </Card>
                )
              })}
              </div>
        ) }
 
     
    </Container>
  )
}

export default TopReted