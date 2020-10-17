import React from "react";
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome';

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


export default function Home() {
  return (
    <View style={{marginHorizontal:32,marginVertical:64}}>
        <View style={styles.header}>
            <Text>New York</Text>
            <View>
               <Icon name ="apple"  size={30} />
               <Text>10*C</Text>
            </View>
        </View>
    <View style={styles.khoi}>
        <View style={styles.rowBeetween}>
            <Text>Taxxi</Text>
            <Icon name ="apple"  size={30} /> 
        </View>
        <View style={styles.rowBeetween}>
            <Text>Taxxi</Text>
            <Icon name ="apple"  size={30} /> 
        </View>
        <View style={styles.rowBeetween}>
            <Text>Taxxi</Text>
            <Icon name ="apple"  size={30} /> 
        </View>
        <View style={styles.rowBeetween}>
            <Text>Taxxi</Text>
            <Icon name ="apple"  size={30} /> 
        </View>
        <View style={styles.rowBeetween}>
            <Text>Taxxi</Text>
            <Icon name ="apple"  size={30} /> 
        </View>
        <View style={styles.rowBeetween}>
            <Text>Taxxi</Text>
            <Icon name ="apple"  size={30} /> 
        </View>
     </View>

        </View>
    
  );
}

const styles = StyleSheet.create({
 

});


