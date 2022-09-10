import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";

export default function Stories(){
    const stories = [
        {
            id: 1,
            name: 'Nagato',
            imgLink: require('./imgsStories/nagato.jpg'),
        },
        {
            id: 2,
            name: 'Madara',
            imgLink: require('./imgsStories/madara.jpg'),
        },
        {
            id: 3,
            name: 'Thor',
            imgLink: require('./imgsStories/thor.jpg'),
        },
        {
            id: 4,
            name: 'Zoro',
            imgLink: require('./imgsStories/zoro.jpg'),
        },
        {
            id: 5,
            name: 'Rimuru',
            imgLink: require('./imgsStories/rimuru.jpg'),
        },
        {
            id: 6,
            name: 'Saitama',
            imgLink: require('./imgsStories/saitama.png'),
        },
    ]
    function renderItem({item}){
        return( 
            <View styles = {styles.storie}>
                <TouchableOpacity styles = {styles.buttonStories}>
                    <Image styles = {styles.imgStories} source = {item.imgLink}/>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View styles = {styles.stories}>
            <FlatList
                data = {stories}
                renderItem = {renderItem}
                keyExtractor = {item => item.id}
                horizontal
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    stories:{
        height: 90,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    buttonStories:{
        width: 90,
        height: 90,
    },
    storie:{
        width: 90,
        height: 90,
        alignItems: 'center',
    },
    imgStories:{
        width: '10%',
        height: 80,
        borderRadius: 35,
        margin: 10,
    }
})