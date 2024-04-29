import { useEffect, useState } from "react"
import Container from "../components/Container"
import DbSourse from "../api/data/db-sourse"
import SpinerLoading from "../components/SpinerLoading"
import Card from "../Fragments/Card"
import CONFIG from "../api/global/config"

const Discover = () => {
    const [discoverTv, setDiscoverTv] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getDiscoverTv = async () => {
            const data = await DbSourse.DiscoverTv()
            // console.log('data',data);
            setDiscoverTv(data)
            setLoading(false);
        }
        getDiscoverTv()
    }, [])
  return (
    <Container>
        <h2 className="font-bold text-2xl text-center text-indigo-700">TV List</h2>
        {loading ? (<SpinerLoading loading={loading} />) : (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discoverTv.map((item) => {
            console.log(item);
            console.log(item.id);
            return (
                <Card key={item.id}>
                <Card.ImageCard logo={CONFIG.BASE_IMAGE_URL + item.poster_path} rated={item.vote_average} status={item.first_air_date}/>
                <Card.Header title={item.name}/>
                <Card.BodyCard>{item.overview.substring(0,100)}...</Card.BodyCard>
                <Card.FooterCardSerie id={item.id}/>
            </Card>
            )
        })}
        </div>
        )}
    </Container>
  )
}

export default Discover