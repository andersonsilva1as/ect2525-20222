import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity  } from "react-native";
import {FontAwesome5} from '@expo/vector-icons';


export default function Header(){
    return(
        <View style = {styles.header}>
            <View style = {styles.alingLogo}>
            <Image style = {styles.logo}source = {require('../Header/Instagram_logo.png')}/>
            </View>
            <View style = {styles.alingIcons}>
            <TouchableOpacity styles = {styles.button}>
                <FontAwesome5 style = {styles.headerIcon} name="plus" size = {24} color = 'black'/>
            </TouchableOpacity>
            <TouchableOpacity styles = {styles.button}>
                <FontAwesome5 style = {styles.headerIcon} name="heart" size = {24} color = 'black'/>
            </TouchableOpacity>
            <TouchableOpacity styles = {styles.button}>
                <FontAwesome5 style = {styles.headerIcon} name="comment" size = {24} color = 'black'/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 20,
    },
    alingLogo:{
        
    },  
    logo:{
        height: 35,
        width: 110,
    },
    alingIcons:{
        flexDirection: 'row',
        alignContent: 'flex-end'
    },
    headerIcon:{
        marginLeft: 10,
    },
})