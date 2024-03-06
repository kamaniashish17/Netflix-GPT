import React from 'react'
import { IMAGE_URL_PATH } from '../../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className='w-52 pr-4 rounded-lg'>
        <img alt={movie.title} 
            src={IMAGE_URL_PATH + movie.poster_path}
        />
    </div>
  )
}

export default MovieCard