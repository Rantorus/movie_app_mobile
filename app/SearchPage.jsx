import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native'
import React from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router'
import MovieList from '../components/MovieList'
import { MOVIES } from '../constants/Movies'


const SearchPage = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const router = useRouter()
    const result = 5;
    const isLoaded=true

    if(!isLoaded){
        return(
            <ThemedView style={{
                flex:1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <ActivityIndicator size="large" style={{ transform: [{ scale: 2 }] }} />
            </ThemedView>
        )
    }
    return (
        <ThemedView style={styles.container}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={[styles.searchBar, { backgroundColor: theme.uiBackground, color: theme.text }]}
                    placeholder="Search Movie..."
                     placeholderTextColor={theme.text}
                />
                <Pressable style={styles.icon} onPress={() => router.back()}>
                    <Ionicons
                        name="close-circle"
                        size={30}
                        color={theme.title}
                        
                    />
                </Pressable>
            </View>

            {result>0 &&  <ThemedText style={{alignSelf:"start", marginLeft:25,marginBottom:20}}>Results ({result})</ThemedText>}
           

            {result>0 && <MovieList movies={MOVIES} itemWidth={150} horizontal={false} />}

            


        </ThemedView>
    )
}

export default SearchPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center"
    },
    searchWrapper: {
        width: "80%",
        marginBottom: 20,
        alignSelf: "center",
        marginTop: 30,
        justifyContent: "center",
    },
    searchBar: {
        padding: 15,
        paddingRight: 45,
        borderRadius: 50,
        width: "100%",
    },
    icon: {
        position: "absolute",
        right: 15,
    }
})