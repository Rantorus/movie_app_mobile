import { FlatList, StyleSheet, Text, useColorScheme, View, Image, ScrollView } from 'react-native'

import { Ionicons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'
import Spacer from '../components/Spacer';
import React from 'react'
import MovieList from '../components/MovieList';
import { MOVIES } from '../constants/Movies';
const Home = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light



    return (
        <ThemedView safe={true} style={styles.container}>

            {/* top bar: MOVIES title, search button, left aligned bar icon */}
            <ThemedView style={styles.topBar} >
                <AntDesign name="align-left" size={24} color={theme.iconColorFocused} />
                <ThemedText style={styles.movieTitle} title={true}><Text style={{ color: "yellow" }}>M</Text>OVIES</ThemedText>
                <FontAwesome name="search" size={24} color={theme.iconColorFocused} />
            </ThemedView>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* trending movies */}

                <ThemedText style={styles.trendingTitle} title={true}>Trending</ThemedText>
                <Spacer height={10} />

                <MovieList movies={MOVIES} />

                <Spacer height={30} />

                {/* upcoming movies */}

                <View style={styles.upComingTitle}>
                    <ThemedText style={styles.trendingTitle} title={true}>Upcoming</ThemedText>
                    <ThemedText style={[styles.trendingTitle, { color: "yellow" }]} title={true}>See All</ThemedText>
                </View>

                <Spacer height={10} />


                <MovieList movies={MOVIES} itemWidth={125} />

                <Spacer height={30} />

                {/* top rated movies */}

                <View style={styles.upComingTitle}>
                    <ThemedText style={styles.trendingTitle} title={true}>Top Rated</ThemedText>
                    <ThemedText style={[styles.trendingTitle, { color: "yellow" }]} title={true}>See All</ThemedText>
                </View>

                <Spacer height={10} />


                <MovieList movies={MOVIES} itemWidth={125} />


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
        paddingBottom:20

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