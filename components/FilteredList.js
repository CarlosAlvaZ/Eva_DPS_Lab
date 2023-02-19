import { View, Text } from 'react-native'
import React from 'react'
import Movie from './Movie'

export default function FilteredList({filter, movies}) {
    let filteredMovies = movies.filter(movie=>{
        let movieName = movie.nombre.toLowerCase().replace(/\s/g,'')
        return movieName.includes(filter.toLowerCase().replace(/\s/g,''))
    })
    return (filteredMovies.length > 0 ? filteredMovies.map((movie, id)=> {
        return (
        <Movie key={id} cover={movie.imagen}
            name={movie.nombre} duration={movie.duracion} classification={movie.clasificacion}
            quality={movie.formato}/>
        )
    }) : <Text style={{color : 'white'}}>No se han encontrado coincidencias</Text>)
}