import { Image, StyleSheet, Text, View, ScrollView, Dimensions, useColorScheme, ActivityIndicator } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer';
import { useLocalSearchParams } from 'expo-router'

import MovieList from '../components/MovieList';
import { MOVIES } from '../constants/Movies'

import ActorList from '../components/ActorList';
import { ACTORS } from "../constants/Actors"


import { Colors } from '../constants/Colors';

import { useMovieDetails } from '../hooks/useMovies';

const MovieDetails = () => {
    const colorScheme = useColorScheme() ?? 'dark'; // null gelebilir, fallback ekle
    const bg = Colors[colorScheme].background;

    const { id } = useLocalSearchParams()

    const { details, cast, similar, loading } = useMovieDetails(id)

    if (loading) {
        return (
            <ThemedView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="yellow" />
            </ThemedView>
        )
    }

     if (!details) return null

    const genre = details.genres?.map(g => g.name).join(' • ')
    const year = details.release_date?.split('-')[0]

    return (
        <ThemedView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.posterContainer}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }}
                        style={styles.poster}
                    />
                    <LinearGradient
                        colors={[
                            'transparent',
                            `${bg}4D`,
                            `${bg}80`,
                            `${bg}B3`,
                            `${bg}E6`,
                            `${bg}FF`,
                        ]}
                        style={styles.gradient}
                    >
                        <ThemedText title={true} style={styles.title}>{details.title}</ThemedText>
                    </LinearGradient>
                </View>

                <Spacer height={15} />
                <ThemedText style={styles.movieInfo}>Released: {year}</ThemedText>
                <Spacer height={5} />
                <ThemedText style={styles.movieInfo}>IMDB: {details.vote_average?.toFixed(1)}</ThemedText>
                <Spacer height={5} />
                <ThemedText style={styles.movieInfo}>{genre}</ThemedText>
                <Spacer height={15} />
                <ThemedText style={styles.movieInfo}>{details.overview}</ThemedText>
                <Spacer height={20} />

                <ThemedText style={styles.trendingTitle} title={true}>Top Cast</ThemedText>
                <Spacer height={10} />
                <ActorList borderRadius={100} actors={cast} itemWidth={75} />
                <Spacer height={20} />

                <ThemedText style={styles.trendingTitle} title={true}>Similar Movies</ThemedText>
                <Spacer height={10} />
                <MovieList movies={similar} itemWidth={125} />

            </ScrollView>
        </ThemedView>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    movieInfo: {
        fontSize: 17,
        textAlign: "center",
        paddingHorizontal: 20
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