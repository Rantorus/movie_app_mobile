import { FlatList, StyleSheet, Text, useColorScheme, View, Image, ScrollView, Pressable, ActivityIndicator } from 'react-native'

import { Ionicons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'
import Spacer from '../components/Spacer';
import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList';
import { MOVIES } from '../constants/Movies';
import { useRouter } from 'expo-router';
import { useMovies } from '../hooks/useMovies'

const Home = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const router = useRouter()

      const { trending, upcoming, topRated, loading } = useMovies()

     if (loading) {
        return (
            <ThemedView safe={true} style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="yellow" />
            </ThemedView>
        )
    }

    return (
        <ThemedView safe={true} style={styles.container}>
            <ThemedView style={styles.topBar}>
                <AntDesign name="align-left" size={24} color={theme.iconColorFocused} />
                <ThemedText style={styles.movieTitle} title={true}>
                    <Text style={{ color: "yellow" }}>M</Text>OVIES
                </ThemedText>
                <Pressable onPress={() => router.push("/SearchPage")}>
                    <FontAwesome name="search" size={24} color={theme.iconColorFocused} />
                </Pressable>
            </ThemedView>

            <ScrollView showsVerticalScrollIndicator={false}>

                <ThemedText style={styles.trendingTitle} title={true}>Trending</ThemedText>
                <Spacer height={10} />
                <MovieList movies={trending} />
                <Spacer height={30} />

                <View style={styles.upComingTitle}>
                    <ThemedText style={styles.trendingTitle} title={true}>Upcoming</ThemedText>
                    <ThemedText style={[styles.trendingTitle, { color: "yellow" }]} title={true}>See All</ThemedText>
                </View>
                <Spacer height={10} />
                <MovieList movies={upcoming} itemWidth={125} />
                <Spacer height={30} />

                <View style={styles.upComingTitle}>
                    <ThemedText style={styles.trendingTitle} title={true}>Top Rated</ThemedText>
                    <ThemedText style={[styles.trendingTitle, { color: "yellow" }]} title={true}>See All</ThemedText>
                </View>
                <Spacer height={10} />
                <MovieList movies={topRated} itemWidth={125} />

            </ScrollView>
        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        //justifyContent: "center",
        //alignItems: "cennter",
        paddingHorizontal: 15,
        paddingBottom: 20

    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,

    },
    movieTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    trendingTitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 15
    },
    upComingTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})