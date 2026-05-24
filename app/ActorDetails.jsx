import { Image, StyleSheet, Text, View, ScrollView, Dimensions, useColorScheme } from 'react-native'
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



const MovieDetails = () => {
    const colorScheme = useColorScheme() ?? 'dark'; 
    const theme = Colors[colorScheme] ?? Colors.light

    const { id, name, gender, birthday, birthplace, popularity, biography, picture } = useLocalSearchParams()

    const actor = ACTORS.find(m => m.id === id)
    return (
        <ThemedView style={styles.container}>


            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.posterContainer}>
                    <Image
                        source={{ uri: actor.picture }}
                        style={styles.poster}
                    />
                </View>

                <Spacer height={20} />
                <ThemedText title={true} style={styles.nameTitle}>{name}</ThemedText>
                <Spacer height={5} />
                <ThemedText>{birthplace}</ThemedText>
                <Spacer height={25} />


                <View style={[{ backgroundColor: theme.iconColor }, styles.infoCard]}>
                    <View style={styles.infoItem}>
                        <ThemedText style={styles.infoLabel}>Gender</ThemedText>
                        <ThemedText style={styles.infoValue}>{actor.gender}</ThemedText>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoItem}>
                        <ThemedText style={styles.infoLabel}>Birthday</ThemedText>
                        <ThemedText style={styles.infoValue}>{actor.birthday}</ThemedText>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoItem}>
                        <ThemedText style={styles.infoLabel}>Known for</ThemedText>
                        <ThemedText style={styles.infoValue}>Acting</ThemedText>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.infoItem}>
                        <ThemedText style={styles.infoLabel}>Popularity</ThemedText>
                        <ThemedText style={styles.infoValue}>{actor.popularity}</ThemedText>
                    </View>
                </View>

                <Spacer height={20} />
                
                <ThemedText title={true} style={{fontSize:18}}>Biography</ThemedText>
                <Spacer height={5} />
                <ThemedText style={styles.bio}>{biography}</ThemedText>

                <Spacer height={25} />

                <View>
                <ThemedText style={styles.moviesTitle} title={true}>Movies</ThemedText>
                <Spacer height={10} />
                <MovieList movies={MOVIES} itemWidth={125} />

                </View>

                



            </ScrollView>


        </ThemedView>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20,

    },

    posterContainer: {
        width: '60%',
        aspectRatio: 2 / 3,
        borderRadius: 999,
        overflow: 'hidden',
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#fff',
        // shadow (iOS)
        shadowColor: 'gray',
        shadowRadius: 40,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        //android
        elevation: 20
    },
    poster: {
        width: '100%',
        height: '100%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },
    nameTitle: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 15
    },
    infoCard: {
        flexDirection: 'row',
        borderRadius: 16,
        paddingVertical: 14,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        alignItems: 'center',
    },
    infoItem: {
        flex: 1,
        alignItems: 'center',
        gap: 4,
    },
    infoLabel: {
        fontSize: 12,
    },
    infoValue: {
        fontSize: 13,
        fontWeight: 'bold',
        color: "white"
    },
    divider: {
        width: 1,
        height: '50%',
        backgroundColor: 'gray',
    },
    bio:{
        paddingHorizontal:25
    },
    moviesTitle: {
        fontSize: 18,
        fontWeight: "bold",
        paddingHorizontal: 15
    },
})