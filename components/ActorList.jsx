import { FlatList, Image, StyleSheet, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const { width } = Dimensions.get('window');

const ITEM_MARGIN = 8;

const ActorList = ({ actors, itemWidth = width * 0.55, borderRadius = 12 }) => {

    const ITEM_SIZE = itemWidth + ITEM_MARGIN * 2;

    const router = useRouter()


    return (
        <FlatList
            data={actors}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            decelerationRate="fast"
            renderItem={({ item }) => (
                <Pressable onPress={() => router.push({
                    pathname: "/ActorDetails",
                    params: {
                        id: item.id,
                        name: item.name,
                        gender: item.gender,
                        birthday: item.birthday,
                        birthplace: item.birthplace,
                        popularity: item.popularity,
                        biography: item.biography,
                        picture: item.picture
                    }
                })} >
                    <Image
                        source={{ uri: item.picture }}
                        style={[styles.poster, { width: itemWidth, height: itemWidth * 1.5, borderRadius: borderRadius }]}
                    />
                </Pressable>
            )}
        />
    )
}

export default ActorList

const styles = StyleSheet.create({
    poster: {
        borderRadius: 12,
        marginHorizontal: 8,
    },
})