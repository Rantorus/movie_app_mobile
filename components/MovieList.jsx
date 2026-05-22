import { FlatList, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window');

const ITEM_MARGIN = 8;

const MovieList = ({ movies, itemWidth = width * 0.55 }) => {
    const ITEM_SIZE = itemWidth + ITEM_MARGIN * 2;

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            decelerationRate="fast"
            renderItem={({ item }) => (
                <Image
                    source={{ uri: item.poster }}
                    style={[styles.poster, { width: itemWidth, height: itemWidth * 1.5 }]}
                />
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