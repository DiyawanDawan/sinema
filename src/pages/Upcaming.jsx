import { useState } from "react"
import Container from "../components/Container"
import { useEffect } from "react"
import DbSourse from "../api/data/db-sourse"
import Card from "../Fragments/Card"
import CONFIG from "../api/global/config"
const Upcaming = () => {
  const [upcaming, setUpcaming] = useState([])
  useEffect(() => {
    const getDataUpcaming = async () => {
      const data = await DbSourse.Upcaming()
      // console.log(data);
      setUpcaming(data)
    }
    getDataUpcaming()
  }, [])
  return (
    <Container>
        <h1 className="text-2xl font-bold text-indigo-800 text-center">Upcaming Muvie</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-4 gap-6">
          {upcaming.map((item) => {
            console.log(item);
            return (
              <Card key={item.id}>
                <Card.ImageCard logo={CONFIG.BASE_IMAGE_URL + item.poster_path} rated={item.vote_average} status={item.release_date}/>
                <Card.Header title={item.title} />
                <Card.BodyCard>{item.overview.substring(0,100)}...</Card.BodyCard>
                <Card.FooterCard id={item.id}/>

              </Card>
            )
          })}
        </div>
    </Container>
  )
}

export default Upcaming