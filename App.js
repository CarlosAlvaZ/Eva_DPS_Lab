import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Search from './components/Search';
import Movie from './components/Movie';
import cuervo from './sources/cuervo.png'
import FilteredList from './components/FilteredList';
import BottomRouting from './components/BottomRouting';

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
      },
      {
        "nombre": "Gato con botas: el último deseo",
        "imagen": "https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-the-last-wish-poster-thumbnail2.jpg",
        "clasificacion": "Aventura",
        "duracion": "100 min",
        "formato": "(HD, 3D)"
      },
      {
        "nombre": "Megan (M3gan)",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRlPuvFooEgY3ujYiYECYn5pxe1bBMwwNmWFh5iFIh&usqp=CAE&s",
        "clasificacion": "Terror",
        "duracion": "102 min",
        "formato": "(HD, BlueRay)"
      },
      {
        "nombre": "La ballena",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Y8BqSDlZtVC5LRUHuZdV5Ph_1SDzQq7oknC_w7BYaM8mkod8",
        "clasificacion": "Drama",
        "duracion": "117 min",
        "formato": "(HD)"
      },
      {
        "nombre": "Interestellar",
        "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMHMl9U1z1txXWCBgKbSlwH0tV3wVIsxyd6CQLhR0CkgC8Nagf",
        "clasificacion": "Aventura",
        "duracion": "169 min",
        "formato": "(HD, BlueRay)"
      },
      {
        "nombre": "El señor de los anillos",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrYu5XxAifo5b7XV5wVnd7zGFjYJP9V39b6vbChQue04j4b7-",
        "clasificacion": "Fantasía",
        "duracion": "178 min",
        "formato": "(HD)"
      },
      {
        "nombre": "El Hobbit",
        "imagen": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ31YN0XkB7sqN8kM12ERv6vS6TY_SAGHb8lzGjJVUumqBOLcBW",
        "clasificacion": "Fantasía",
        "duracion": "169 min",
        "formato": "(HD)"
      },
      {
        "nombre": "The VelociPastor",
        "imagen": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTP--PsgjGzVCv5hqb76-7ECtGBHmCiX9J_qiVZ2hyEVnv3VocO",
        "clasificacion": "Accion",
        "duracion": "75 min",
        "formato": "(HD)"
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
      <BottomRouting />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView : {
    position : 'relative',
    width : '100%',
    height : '90%',
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
