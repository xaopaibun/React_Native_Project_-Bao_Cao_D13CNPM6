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
  TouchableOpacity,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';


export default function Extra() {

    const extra =[
        "Hạ Long Bay nơi thiên nhiên lý tưởng",
        "Nơi bạn sẽ được trải nghiệm những điều quý giá",
        "Nếu bạn có mong muốn đến đây hãy liên lạc với chúng tôi",
        "Book vé tại trang web này",
        "Chúng tôi rất vinh dự được phục vụ quý khách"
    ]
  return (
    <View style={styles.container}>
       <Text style={styles.sectionTitle}>Trước khi bạn đến</Text>

       <View style={styles.list}>
            {extra.map((extra,key) => {
                return(
                    <Text style={styles.listitem} key={key}> &mdash;{extra}</Text>
                )
            })}
       </View>

       <View style={{marginTop:32,marginBottom:-40}}>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={{fontWeight:"700",color:"#fff"}}>Filter</Text>
            </TouchableOpacity>
       </View>
     </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:14,
        paddingHorizontal:32,
        marginBottom:8,
        backgroundColor:colors.lightBg,
        marginTop:8,
        marginBottom:64

    },
    sectionTitle:{
     fontSize:13,
     fontWeight:"700",
     color:colors.textSec,
    },
    list:{
        marginTop:16,
        marginLeft:8
    },
    listitem:{
        color:colors.textSec,
        marginVertical:8
    },
    filterButton:{
        marginVertical:19,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.pink,
        borderRadius:100,
        padding:10,
        
    }
  
});


