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


export default function Header() {
  return (
    <View>
        <Image source={require("../../../assests/n.png")} style={{width:"100%",height:400}}>
        
        </Image>       
       <View style={styles.topbutton}>
             <Icon name ="close" color ="#eee" size={30}/>
            <View style={styles.rowCenter}>
                <Icon name ="save"  size={30} style={styles.topbuttonright}/>
                <Icon name ="apple"  size={30} style={styles.topbuttonright}/>
                <Icon name ="briefcase" size={30} style={styles.topbuttonright}/>
            </View>
       </View>

      
    </View>
            
            
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.darkBg,
  } ,
  topbutton:{
    flexDirection:"row",
    justifyContent:"space-between",
      position:"absolute",
      top:24,
      left:32,
      right:32
  },
  topbuttonright:{
      marginLeft:12,
      color:"#fff",
  }
  ,rowCenter:{
    flexDirection:"row",
    alignItems:"center",
  },
  
  
});
