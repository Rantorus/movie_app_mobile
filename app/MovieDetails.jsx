import { Image, StyleSheet, Text, View, ScrollView, Dimensions, useColorScheme } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { useLocalSearchParams } from 'expo-router'
import MovieList from '../components/MovieList';
import { MOVIES } from '../constants/Movies'
import Spacer from '../components/Spacer';
import { Colors } from '../constants/Colors';
import jhonWick from '../assets/jhonWick.jpg'

const MovieDetails = () => {
    const colorScheme = useColorScheme() ?? 'dark'; // null gelebilir, fallback ekle
    const bg = Colors[colorScheme].background;

    const { id, title, year, rating, genre, poster, description } = useLocalSearchParams()

    const movie = MOVIES.find(m => m.id === id)
    return (
        <ThemedView style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.posterContainer}>
                    <Image
                        source={{ uri: movie.poster }}
                        style={styles.poster}
                    />
                    <LinearGradient
                        colors={[
                            'transparent',
                            `${bg}4D`,   // %30 opaklık
                            `${bg}80`,   // %50
                            `${bg}B3`,   // %70
                            `${bg}E6`,   // %90
                            `${bg}FF`,   // %100
                        ]}
                        style={styles.gradient}
                    >
                        <ThemedText title={true} style={styles.title}>{movie.title}</ThemedText>
                    </LinearGradient>
                </View>
                <Spacer height={15} />



                <ThemedText style={styles.movieInfo} >Relased: {year}</ThemedText>
                <Spacer height={5} />

                <ThemedText style={styles.movieInfo} >IMDB: {rating}</ThemedText>
                <Spacer height={5} />

                <ThemedText style={styles.movieInfo} >{genre}</ThemedText>
                <Spacer height={15} />

                <ThemedText style={styles.movieInfo} >{description}</ThemedText>
                <Spacer height={20} />

                <ThemedText style={styles.trendingTitle} title={true}>Top Cast</ThemedText>
                <Spacer height={10} />

                <MovieList borderRadius={100} movies={MOVIES}  isHeader={true} itemWidth={75} />
                <Spacer height={20} />

                <ThemedText style={styles.trendingTitle} title={true}>Similar Movies</ThemedText>
                <Spacer height={10} />
                <MovieList movies={MOVIES} itemWidth={125} />


            </ScrollView>


        </ThemedView>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 25
    },
    movieInfo: {
        fontSize: 18,
        textAlign: "center"
    },
    posterContainer: {
        width: '100%',
    },
    poster: {
        width: '100%',
        aspectRatio: 2 / 3,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '70%',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    trendingTitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 15
    },
})