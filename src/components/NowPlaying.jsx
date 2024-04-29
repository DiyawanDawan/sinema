
import { useEffect, useState } from 'react'
// import logo from '../assets/react.svg'
import CONFIG from '../api/global/config'
import Card from '../Fragments/Card'
import SpinerLoading from './SpinerLoading'
import DbSourse from '../api/data/db-sourse'
import Container from './Container'
const MoviePlaying = () => {

    const [nowPlaying, setNowPlaying] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await DbSourse.NowPlaying()
           
            setNowPlaying(data);
            setLoading(false)
        }
        getData()
       
    }, [])



    return (
        <Container>
             <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Populer Muvie
                </h2>
                {loading ? <SpinerLoading loading={loading}/> : (

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {nowPlaying.map((item) => {
                        //  console.log('data',item);
                        // console.log(item);
                        return (
                            <Card key={item.id}>
                                <Card.ImageCard rated={item.vote_average}  status={item.release_date} logo={CONFIG.BASE_IMAGE_URL + item.poster_path}></Card.ImageCard>
                                <Card.Header title={item.title}></Card.Header>
                                <Card.BodyCard >{item.overview.substring(0, 100)}...</Card.BodyCard>
                                 <Card.FooterCard id={item.id}></Card.FooterCard>
                            </Card>
                        )
                    })}
                </div>
                )}
        </Container>

    )
}

export default MoviePlaying