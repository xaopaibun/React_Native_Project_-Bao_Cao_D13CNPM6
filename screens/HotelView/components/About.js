import React from "react";
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome';
// import { colors, gs} from "../../../styles";
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



const hotel ={
    name :"Ha Long Bay",
    price : "$2000",
    location:"Việt Nam",
    about:"Chào mừng bạn đến với Hạ Long - Kì quan hùng vĩ thiên nhiên Thế giới, nơi bạn sẽ được trải nghiệm cảm giác mới lạ về biển , trời, không gian và thời gian .Chúc bạn có cuộc hành trình đẹp"
};
export default function About() {
  return (
    <View style={styles.container}>
       <Text style={styles.title}>{hotel.name}</Text>

       <Text style={styles.info}>
            {hotel.price} &#8226;{hotel.location}
       </Text>

       <View style={styles.divider} />

       <Text style ={styles.sectionTitle}>
            About {hotel.name}
       </Text>

  <Text style={styles.about}>{hotel.about}</Text>
     </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:24,
        paddingHorizontal:30,
        marginBottom:8,
        
        backgroundColor:colors.darkBg,
    },
    title:{
        color:colors.text,
        fontSize:30,
        
    },
    info:{
        color:colors.text,
        fontWeight:"600",
        marginTop:4

    },
    divider:{
        borderBottomColor:"#444",
        borderBottomWidth:1,
        marginVertical:14
    },
    sectionTitle:{
        fontWeight:"700",
        color:colors.text,
        fontSize:15
    },
    about:{
        fontSize:13,
        fontWeight:"700",
        color:colors.textSec,
        marginTop:6,
        lineHeight:20
    }    
});


