import React from 'react';
import {SafeAreaView, Text , View , StyleSheet,Image} from 'react-native';

import {MyBanner , MyButton} from './components/Index'



const Main = () =>{
    return (
        <SafeAreaView style={{backgroundColor :"#dbe6e5" , flex : 1}}>
            <View style={styles.contianer}>
                <Image
                style={{width : 50 ,height :50,borderRadius : 10}}
                source={require('./img/res.jpg')} 
                />
                <Text style={styles.text}>Dilek Restaurant</Text>
                <Image
                style={{width : 50 ,height :50,borderRadius : 10}}
                source={require('./img/tat.jpg')} 
                />
            </View>
            
            <MyBanner 
            title='Çorbalar'
            desc='Birbirinden leziz çorbalar!' 
            color='#00d6d6'
            stok='mevcuttur'
            isActive='false'
            />
            <MyBanner 
            title='Ara Sıcaklar'
            desc='Lezzetli aparetifler' 
            color='#ffd740'
            stok='mevcuttur'
            isActive='true'
            />
            <MyBanner 
            title='Ana Yemekler'
            desc='Doyurucu lezzetler' 
            color='#e57373'
            stok='mevcuttur'
            isActive='true'
            />
            <MyBanner 
            title='Dünya Mutfağı'
            desc='İtalyan,Fransız ve Çin mutfağı' 
            color='#bcaaa4'
            stok='mevcuttur'
            isActive='true'
            />
            <MyBanner 
            title='Deniz Ürünleri'
            desc='Taptaze denizden sofranıza' 
            color='#2979ff'
            stok='mevcuttur'
            isActive='true'
            />
            <MyBanner 
            title='Alkolsüz İçecekler'
            desc='Buz gibi serinletici içecekler'
            color='#ef6c00'
            stok='mevcuttur'
            isActive='true'
            />
            <MyBanner 
            title='Alkollü İçecekler'
            desc='Buz gibi serinletici alkollü içecekler'
            color='#8bc34a'
            stok='mevcuttur'
            isActive='true'
            />
            <MyButton />
        </SafeAreaView>
    )
};

export default Main;

const styles = StyleSheet.create({
    contianer :{
        alignItems : "center",
        backgroundColor : '#007070',
        paddingHorizontal : 20,
        flexDirection : "row",
        justifyContent : "center",
        marginBottom : 10,
        marginTop : 10

    },
    text : {
        fontSize : 25,
        paddingHorizontal : 30,
        color : "white"
    }
})