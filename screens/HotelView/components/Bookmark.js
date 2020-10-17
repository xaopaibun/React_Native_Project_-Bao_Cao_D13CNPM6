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


export default function Bookmark() {
  return (
    <View style={styles.bookmark}>
        {/* <Text>Hello Việt Nam</Text> */}
             <Icon name ="bookmark"  size={30} color={colors.pink} />
     </View>
    
  );
}

const styles = StyleSheet.create({
 bookmark:{
    position:"absolute",
    width:56,
    height:56,
    right:32,
    top:-56/2,
    backgroundColor:colors.text,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:56/2,
    zIndex:10,
    
}
  
});


