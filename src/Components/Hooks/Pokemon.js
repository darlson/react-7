import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([])
    const [urls, setUrls] = useState({
        prev: '',
        next: 'https://pokeapi.co/api/v2/pokemon'
    })
    const [reqUrl, setReqUrl] = useState(urls.next)

    useEffect(() => {
        axios.get(reqUrl).then(res => {
            setUrls({ prev: res.data.previous, next: res.data.next} )
            setPokemon(res.data.results)
        })
    }, [reqUrl] )
    
    const handlePageChange = target => {
        setReqUrl(target === 'next' ? urls.next : urls.prev)
    }

    return (
        <div>
            {JSON.stringify(pokemon)}
            <button onClick={() => handlePageChange('prev')}>Previous</button> 
            <button onClick={() => handlePageChange('next')}>Next</button>
        </div>
    )
}

export default Pokemon