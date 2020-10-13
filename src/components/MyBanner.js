import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const MyBanner = (props) => {


  return (


    <SafeAreaView>
      <View style={[styles.contianer , {backgroundColor : props.color}]}>
        <View>
          <Text style={[styles.text, {fontSize : 22 ,fontWeight : "bold"}]}>{props.title}</Text>
          <Text style={styles.text}>{props.desc}</Text>
        </View>

        
        <View style={styles.stok}>
        
          <Text style={{}}>{props.stok}</Text>

        </View>
      </View>
    </SafeAreaView>


  );
};

export {MyBanner};

const styles = StyleSheet.create({
  contianer: {
      borderWidth : 1,
      margin : 8,
      borderRadius :5,
      padding : 3,
      flexDirection : "row",
      justifyContent : "space-between"
      
  },
  text: {
      
  },
  stok: {
      alignSelf : "center",
      justifyContent : "center",
      marginRight : 5
  },
});
