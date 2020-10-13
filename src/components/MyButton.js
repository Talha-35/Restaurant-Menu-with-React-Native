import React from 'react';
import {Text, View, TouchableOpacity,StyleSheet} from 'react-native'


const MyButton = () => {
    return ( 
        <View>
            <TouchableOpacity  
            style={styles.contianer}
            
            >
                <Text style={styles.text}>Tıklayınız</Text>                
            </TouchableOpacity>
                <Text  style={styles.text2}>Sipariş için üstteki butona tıklayınız</Text>
        </View>
     );
}
 

const styles = StyleSheet.create({
    contianer :{
        marginTop : 20,
        marginBottom : 10,
        borderWidth : 1,
        backgroundColor : "red",
        marginHorizontal : 110,
        alignItems : "center",
        marginVertical:5,
        paddingVertical:5,
        borderRadius : 25
        
    },
    text : {
        fontSize : 25,
        paddingHorizontal : 30,
        color : "white"
    },
    text2 : {
        textAlign :"center"
    }
})
export  {MyButton};