import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import Movie from "../component/Movie"

function Detail(){
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const {id} = useParams();
    const getMovies = async () =>{
        const json = await(
            await (fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))).json();
            setDetail(json.data.movie)
            setLoading(false);
        };
    useEffect(()=>{
        getMovies();
    },[])
    return(
        <div>
        {loading ? <h1>로딩중...</h1> : 
        <div>
            <img src={detail.medium_cover_image} alt={detail.title}></img>
            <h2>{detail.title}</h2>
            <ul>
                <li key={detail.id}>{detail.genres.map((item)=>{return item})}</li>
            </ul>
            
        </div>
        }
      </div>
    )
}

export default Detail;