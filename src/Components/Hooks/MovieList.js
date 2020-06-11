import React, {useState} from 'react'

const MovieList = props => {
    const [movies, setMovies] = useState(['Alien', 'Cowboys Vs. Aliens', 'Alien Vs. Predator'])
    const [input, setInput] = useState('')

    const addToList = () => {
        setMovies([...movies, input])
        setInput('')
    }

    return (
        <div>
            {movies.map((movie, index) => {
                return <h2 key={index}>{movie}</h2>
            })}
            <input 
                value={input}
                placeholder='Add a movie' 
                onChange={e => setInput(e.target.value)} 
            />
            <button onClick={addToList} >Add to list</button>
        </div>
    )
}

export default MovieList

