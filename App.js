import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Search from './components/Search';
import Movie from './components/Movie';
import cuervo from './sources/cuervo.png'
import FilteredList from './components/FilteredList';

export default function App() {
  const [movies, setMovies] = useState([])
  const [filter, setFilter] = useState()

  useEffect(()=>{
    setMovies([
      {
          "nombre": "Avatar 2, El sentido del Agua",
          "imagen": "https://i.blogs.es/e92eec/avatar-el-sentido-del-agua/450_1000.jpeg",
          "clasificacion": "Aventura",
          "duracion": "140 min",
          "formato": "(3D, HD)"
      },
      {
          "nombre": "Tren Bala",
          "imagen": "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM",
          "clasificacion": "Accion",
          "duracion": "94 min",
          "formato": "(3D, HD, BlueRay)"
      },
      {
          "nombre": "Turning Red",
          "imagen": "https://lumiere-a.akamaihd.net/v1/images/p_turningred_22797_1_c17f32af.jpeg",
          "clasificacion": "Comedia",
          "duracion": "100 min",
          "formato": "(HD)"
      },
      {
          "nombre": "Minions: Nace un Villano",
          "imagen": "https://www.universalpictures.com.mx/tl_files/content/movies/minions2/posters/01.jpg",
          "clasificacion": "Comedia",
          "duracion": "87 min",
          "formato": "(HD, 3D)"
      },
      {
          "nombre": "Scream 5",
          "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEfNLUCL5WBygMcyw9J7V4RacUqaZWSW3rMaP9bex7QTM4FepY",
          "clasificacion": "Terror",
          "duracion": "114 min",
          "formato": "(HD, 3D, BlueRay)"
      }
    ])
  }, [])

  return (
    <SafeAreaView>

      <StatusBar style='light' backgroundColor='black'/>

      <ScrollView style={styles.scrollView}>

        <View style={styles.header}>
          <View style={styles.overLay}>
            <Image style={styles.overLayImage} source={cuervo}/>
          </View>
          <Text style={styles.headerText}>Cuervana</Text> 
        </View>

        <Search setFilter={setFilter}/>


        <View style={styles.moviesList}>
          { !filter &&
            movies.map((movie, id)=> {
              return (
                <Movie key={id} cover={movie.imagen}
                  name={movie.nombre} duration={movie.duracion} classification={movie.clasificacion}
                  quality={movie.formato}/>
              )
            })
          }
          {
            filter && <FilteredList movies={movies} filter={filter}/>
          }
        </View>


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView : {
    position : 'relative',
    width : '100%',
    height : '100%',
    backgroundColor : '#151718'
  },
  header : {
    position : 'relative',
    height : 250,
    width : '100%',
    display : 'flex',
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#063970'
  },
  headerText : {
    fontSize : 40,
    fontWeight : 'bold',
    color : '#fff',
    zIndex : 1000
  },
  overLay : {
    position : 'absolute',
    left : 0,
    top : 0,
    width : '100%',
    height : '100%',
    overflow : 'hidden',
  },
  overLayImage : {
    width : '100%',
    zIndex : 1,
    opacity : 0.5
  },
  moviesList : {
    width : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    paddingVertical : 20
  }
});
