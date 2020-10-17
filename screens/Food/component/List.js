import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
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


export default function List() {

  
  return (
    <View style={styles.container}>
       <View style={{marginTop:22,marginBottom:-40}}>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={{fontWeight:"700",color:"#fff"}}>Add New List</Text>
            </TouchableOpacity>
       </View>
       <Text style={styles.list}>All Lists(5)</Text>
       <View style= {styles.bigblock}>
           <View style={styles.miniblock}>
                <Text Style={styles.texthead}>Weekend's Shopping</Text>
                <Text>7 days</Text>
           </View>
           <View style={styles.biganh}>
                <Image style={styles.image} source={require("../../../assests/n.png")} style={{width:50,height:50,marginRight:7,zIndex:3}}></Image>
                <Image style={styles.image} source={require("../../../assests/j7.jpg")} style={{width:50,height:50,marginRight:7,zIndex:2}}></Image>
                <Image style={styles.image} source={require("../../../assests/67.png")} style={{width:50,height:50,marginRight:7,zIndex:1}}></Image>
           </View>

       </View>

       <View style= {styles.bigblock}>
           <View style={styles.miniblock}>
                <Text Style={styles.texthead}>Marry's birthday</Text>
                <Text>7 days</Text>
           </View>
           <View style={styles.biganh}>
                <Image style={styles.image} source={require("../../../assests/2.png")} style={{width:50,height:50,marginRight:7,zIndex:3}}></Image>
                <Image style={styles.image} source={require("../../../assests/j7.jpg")} style={{width:50,height:50,marginRight:7,zIndex:2}}></Image>
                <Image style={styles.image} source={require("../../../assests/3.png")} style={{width:50,height:50,marginRight:7,zIndex:1}}></Image>
           </View>

       </View>

       <View style= {styles.bigblock}>
           <View style={styles.miniblock}>
                <Text Style={styles.texthead}>Sunday's Party</Text>
                <Text>7 days</Text>
           </View>
           <View style={styles.biganh}>
                <Image style={styles.image} source={require("../../../assests/n.png")} style={{width:50,height:50,marginRight:7,zIndex:3}}></Image>
                <Image style={styles.image} source={require("../../../assests/2.png")} style={{width:50,height:50,marginRight:7,zIndex:2}}></Image>
                <Image style={styles.image} source={require("../../../assests/67.png")} style={{width:50,height:50,marginRight:7,zIndex:1}}></Image>
           </View>

       </View>

       <View style= {styles.bigblock}>
           <View style={styles.miniblock}>
                <Text Style={styles.texthead}>Movie night</Text>
                <Text>7 days</Text>
           </View>
           <View style={styles.biganh}>
                <Image style={styles.image} source={require("../../../assests/n.png")} style={{width:50,height:50,marginRight:7,zIndex:3}}></Image>
                <Image style={styles.image} source={require("../../../assests/j7.jpg")} style={{width:50,height:50,marginRight:7,zIndex:2}}></Image>
                <Image style={styles.image} source={require("../../../assests/3.png")} style={{width:50,height:50,marginRight:7,zIndex:1}}></Image>
           </View>

       </View>

       <View style= {styles.bigblock}>
           <View style={styles.miniblock}>
                <Text Style={styles.texthead,{fontSize:30}}>Weekend's shopping</Text>
                <Text>7 days</Text>
           </View>
           <View style={styles.biganh}>
                <Image style={styles.image} source={require("../../../assests/2.png")} style={{width:50,height:50,marginRight:7,zIndex:3}}></Image>
                <Image style={styles.image} source={require("../../../assests/j7.jpg")} style={{width:50,height:50,marginRight:7,zIndex:2}}></Image>
                <Image style={styles.image} source={require("../../../assests/67.png")} style={{width:50,height:50,marginRight:7,zIndex:1}}></Image>
           </View>

       </View>
     </View>
    
  );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"white",
},
filterButton:{
    marginVertical:5,
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"green",
    borderRadius:100,
    padding:18,
},
list:{
    marginVertical:50,
    marginHorizontal:20,
    fontWeight:"bold",
    fontSize:20
},

bigblock:{
    flexDirection:"row",
    marginHorizontal:5,
    marginTop:-30,
    backgroundColor:"pink",
    borderRadius:70,
    padding:20,
    marginVertical:45
},
biganh:{
    flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
},
miniblock:{
    marginRight:3
},
texthead:{
    fontWeight:"bold",
    fontSize:20,
    
},
image:{
    width:36,
    height:36,
    borderRadius:36/2,
    borderWidth:2,
    borderColor:colors.lightBg,
  
}

  
});


