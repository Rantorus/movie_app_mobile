import { StyleSheet, Text, useColorScheme, View } from 'react-native'

import { Ionicons } from "@expo/vector-icons"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'
import React from 'react'

const Home = () => {
     const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView safe={true} style={styles.container}>
        <ThemedView style={styles.topBar} >
            <AntDesign name="align-left" size={24} color={theme.iconColorFocused} />
            <ThemedText style={styles.movieTitle} title={true}><Text style={{color:"yellow"}}>M</Text>OVIES</ThemedText>
            <FontAwesome name="search" size={24} color={theme.iconColorFocused} />
        </ThemedView>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignContent:"center",
        alignItems:"cennter",
        paddingHorizontal: 15,
        
    },
    topBar:{
        flexDirection: "row",
        justifyContent:"space-between"
    },
    movieTitle:{
        fontSize:22,
        fontWeight:"bold",
    }
})