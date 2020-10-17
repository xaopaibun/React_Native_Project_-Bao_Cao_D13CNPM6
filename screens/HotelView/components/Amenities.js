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


export default function Amenities() {
  return (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ameniities</Text>

        <View style={styles.amenitiesContainer}>
            <View style={styles.amenityContainer}>
                <View style={styles.amenity}>
                     <Icon name ="wifi"  size={24} style={colors.darkHl}/>
                </View>
                <Text style={styles.amenityName}>Wifi</Text>
            </View>

            <View style={styles.amenityContainer}>
                <View style={styles.amenity}>
                     <Icon name ="university"  size={24} style={colors.darkHl}/>
                </View>
                <Text style={styles.amenityName}>Restaurent</Text>
            </View>

            <View style={styles.amenityContainer}>
                <View style={styles.amenity}>
                     <Icon name ="life-bouy"  size={24} style={colors.darkHl}/>
                </View>
                <Text style={styles.amenityName}>Swimming Pool</Text>
            </View>

            <View style={styles.amenityContainer}>
                <View style={styles.amenity}>
                     <Icon name ="file-video-o"  size={24} style={colors.darkHl}/>
                </View>
                <Text style={styles.amenityName}>Drink</Text>
            </View>
            
            <View style={styles.amenityContainer}>
                <View style={styles.amenity}>
                     <Icon name ="car"  size={24} style={colors.darkHl}/>
                </View>
                <Text style={styles.amenityName}>Car</Text>
            </View>

            <View style={styles.amenityContainer}>
                <View style={styles.amenity}>
                     <Icon name ="photo"  size={24} style={colors.darkHl}/>
                </View>
                <Text style={styles.amenityName}>Night Club</Text>
            </View>
        </View>
     </View>
    
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
   sectionContainer:{
    paddingVertical:24,
    paddingHorizontal:32,
    marginBottom:8,
    backgroundColor:colors.lightBg,
   },
   sectionTitle:{
    fontSize:13,
    fontWeight:"700",
    color:colors.textSec,
   },
   amenitiesContainer:{
       marginTop:16,
       marginHorizontal:16,
       flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"wrap"
   },
   amenityContainer:{
       alignItems: 'center',
       width:95,
       marginVertical:12
   },
   amenity:{
       width:48,
       height:48,
       borderRadius:48/2,
       alignItems:"center",
       justifyContent:"center",
       backgroundColor:"#444"
   },
   amenityName:{
       color:colors.lightHl,
       fontSize:12,
       fontWeight:"600",
       marginTop:6,
       textAlign:"center"
   }
});


