import React from "react";
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome';
import { colors} from "../../../styles";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const starColor =["#e3ab53","#e3ab53","#e3ab53","#e3ab53","#8b6f43"];

const Circle =props =>{
    return <View style={[styles.circle,props.style]}/>;
}
export default function Stats() {
  return (
    <View style={styles.container}>
        <View style={styles.weatherContainer ,{flexDirection:"row",paddingRight:20}}>
             <Icon name ="sun-o"  size={24} style={colors.darkHl}/>
             
             <View style={{marginLeft:8}}>
                <Text style={styles.title}>22*</Text>
                <Text style={styles.subTitle}>Sunny</Text>
             </View>
        </View>

        <View>

            <Text style={[styles.title,{paddingLeft:20}]}>
                8.4
                <Text style={[styles.subTitle,{paddingLeft:8}]}>&nbsp;&nbsp; +6k Votes</Text>
            </Text>

            <View style={styles.rowcenter,{flexDirection:"row",paddingLeft:20}}>
                {starColor.map((color,index) =>{
                    return(
                        <Icon name="star" size={14} color={color} key={index} style={{marginHorizontal:2}}/>
                    );
                })}
            </View>
        </View>

        <View style={styles.circlesContainer}>
                <Circle style={{backgroundColor:"#999",marginRight:-10,zIndex:3}}/>
                <Circle style={{backgroundColor:"#888",marginRight:-10,zIndex:2}}/>
                <Circle style={{backgroundColor:"#777",marginRight:-10,zIndex:1}}/>
        </View>

     </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:14,
        paddingHorizontal:22,
        marginBottom:8,
        backgroundColor:colors.lightBg,
      
    },
    weatherContainer:{
        flexDirection:"row",
        alignItems:"center",
       paddingRight:12,
       marginRight:12,
        borderRightColor:"#444",
        borderRightWidth:1 ,
         
    },
    title:{
        color:colors.text,
        fontSize:18,
        fontWeight:"900"
    },
    subTitle:{
        color:colors.textSec,
        fontSize:10,
        fontWeight:"900"
    },
    rowCenter:{
        flexDirection:"row",
        alignItems:"center",
    },
    circlesContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    circle:{
        width:36,
        height:36,
        borderRadius:36/2,
        borderWidth:2,
        borderColor:colors.lightBg
    }
});


