import { FlatList, Image, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import jhonWick from '../assets/jhonWick.jpg'
import ThemedText from './ThemedText';

const { width } = Dimensions.get('window');

const ITEM_MARGIN = 8;

const MovieList = ({ movies, itemWidth = width * 0.55, borderRadius = 12, horizontal = true }) => {
    const ITEM_SIZE = itemWidth + ITEM_MARGIN * 2;

    const router = useRouter()

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            horizontal={horizontal}
            numColumns={horizontal ? 1 : 2}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            decelerationRate="fast"
            renderItem={({ item }) => (
                <Pressable onPress={() => router.push({
                    pathname: "/MovieDetails",
                    params: {
                        id: item.id,
                        title: item.title,
                        year: item.year,
                        rating: item.rating,
                        genre: item.genre,
                        poster: item.poster,
                        description: item.description
                    }
                })}
                style={{alignItems:"center",gap:3}}
                >
                    <Image
                        source={{ uri: item.poster }}
                        style={[styles.poster,
                        { width: itemWidth, height: itemWidth * 1.5, borderRadius: borderRadius },

                        ]}
                    />
                    <ThemedText style={[{ width: itemWidth, textAlign: "center" }, !horizontal && { marginBottom: 15 }]} >{item.title}</ThemedText>
                </Pressable>
            )}
        />
    )
}

export default MovieList

const styles = StyleSheet.create({
    poster: {
        borderRadius: 12,
        marginHorizontal: 8,
    },
})