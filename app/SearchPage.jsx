import { ActivityIndicator, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, useColorScheme, View } from 'react-native'
import React from 'react'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, useRouter } from 'expo-router'
import MovieList from '../components/MovieList'
import { MOVIES } from '../constants/Movies'
import { useSearch } from '../hooks/useMovies'


const SearchPage = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    const router = useRouter()
     const { query, setQuery, results, loading } = useSearch()

    return (
        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={[styles.searchBar, { backgroundColor: theme.uiBackground, color: theme.text }]}
                    placeholder="Search Movie..."
                    placeholderTextColor={theme.text}
                    value={query}
                    onChangeText={setQuery}
                    autoFocus
                />
                <Pressable style={styles.icon} onPress={() => router.back()}>
                    <Ionicons name="close-circle" size={30} color={theme.title} />
                </Pressable>
            </View>

            {loading && (
                <ActivityIndicator size="large" style={{ transform: [{ scale: 2 }], marginTop: 40 }} />
            )}

            {!loading && results.length > 0 && (
                <>
                    <ThemedText style={{ alignSelf: "flex-start", marginLeft: 25, marginBottom: 20 }}>
                        Results ({results.length})
                    </ThemedText>
                    <MovieList movies={results} itemWidth={150} horizontal={false} />
                </>
            )}

            {!loading && query.trim() && results.length === 0 && (
                <ThemedText style={{ marginTop: 40 }}>No results found.</ThemedText>
            )}

        </ThemedView>
        </TouchableWithoutFeedback>
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