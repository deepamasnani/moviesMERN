import React, { useEffect, useRef, useState } from 'react'
import { Typography, Row } from 'antd';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../../../../Config'
import GridCard from '../../../../commons/GridCards';
import MainImage from '../../../LandingPage/Sections/MainImage';
// ${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${xyz}&page=1&include_adult=false

const SearchHelp = () => {
    const buttonRef = useRef(null);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(true)
    const [CurrentPage, setCurrentPage] = useState(0);
    const [MainMovieImage, setMainMovieImage] = useState(null)

    useEffect(() => {
        const endpoint = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                // console.log(result)
                // console.log('Movies',...Movies)
                // console.log('result',...result.results)
                // console.log(data);
                setMovies(result.results);
                setMainMovieImage(MainMovieImage || result.results[0]);
                setCurrentPage(result.page);
                setLoading(false);
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }, [])


    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    // }, [])

    const searchMovies = async (e)=>{
        // e.preventDefault();
        const url = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        fetch(url)
            .then(result => result.json())
            .then(result => {
                // console.log(result)
                // console.log('Movies',...Movies)
                // console.log('result',...result.results)
                // console.log(data);
                setMovies(result.results);
                setCurrentPage(result.page);
                setLoading(false);
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
        // console.log("SUBMITTING");
        // const url = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
        // try {
        //     const res = await fetch(url);
        //     const data = await res.json();
        //     console.log(data);
        //     setMovies(data.results);
        //     setCurrentPage(data.page);
        //     setLoading(false);
            
        // } catch (error) {
        //     console.log("Error",error);
        // }
    }
    const loadMoreItems = () => {
        let endpoint = '';
        setLoading(true)
        console.log('CurrentPage', CurrentPage)
        endpoint = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${query}&page=${CurrentPage + 1}&include_adult=false`;
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                // console.log(result)
                // console.log('Movies',...Movies)
                // console.log('result',...result.results)
                // console.log(data);
                setMovies(result.results);
                setCurrentPage(result.page);
                setLoading(false);
            }, setLoading(false))
            .catch(error => console.error('Error:', error)
            )
    }
    // const handleScroll = () => {
    //     const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    //     const body = document.body;
    //     const html = document.documentElement;
    //     const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    //     const windowBottom = windowHeight + window.pageYOffset;
    //     if (windowBottom >= docHeight - 1) {

    //         // loadMoreItems()
    //         console.log('clicked')
    //         buttonRef.current.click();
    //     }
    // }
    return (
        <>
        <div style={{padding:"5%",marginLeft:"29%"}}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" style={{width:"350px",paddingLeft:"5%",height:"60px",borderRadius:"15px",fontSize:"1.2rem",borderColor:"rgb(189, 10, 40)"}} value={query}
                 placeholder="Search a movie"
                 onChange = {(e)=>setQuery(e.target.value)
                 }></input>
                <button style={{width:"100px",height:"60px",borderRadius:"15px",border:"none",cursor:"pointer",marginLeft:"5%",color:"white",backgroundColor:"rgb(189, 10, 40)",fontWeight:"900"}} onClick={searchMovies} type="submit">Search</button>
            </form>
            
        </div>
        <div style={{ width: '100%', margin: '0' }}>
            
        {MainMovieImage &&
                <MainImage
                image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
                title={MainMovieImage.original_title}
                text={MainMovieImage.overview}
                />
                
            }
            </div>
        <div style={{ width: '85%', margin: '1rem auto' }}>
        <Row gutter={[16, 16]}>
        {movies && movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCard
                                image={movie.poster_path ?
                                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                    : null}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        </React.Fragment>
                    ))}
          </Row>          
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',marginTop:"25%" }}>
                    <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div>
        </> 
    )
}

export default SearchHelp
