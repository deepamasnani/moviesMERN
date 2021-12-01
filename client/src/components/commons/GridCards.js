import React from 'react'
import { Col } from 'antd';
import { IMAGE_BASE_URL } from '../Config';

function GridCards(props) {

    let { actor, key, image, movieId, movieName, characterName } = props
    const POSTER_SIZE = "w154";
    // console.log(characterName);

    if (actor) {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                   {console.log(props.characterName)}
                    <img style={{ width: '80%', height: '50%' }} alt={characterName} src={`${IMAGE_BASE_URL}${POSTER_SIZE}${image}`} />
                    <p>{props.characterName}</p>
                </div>
            </Col>
        )
    } else {
        return (
            <Col key={key} lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${movieId}`} >
                        <img style={{ width: '80%', height: '50%', borderRadius: '15px' }} alt={movieName} src={image} />
                    </a>
                </div>
            </Col>
        )
    }

}

export default GridCards