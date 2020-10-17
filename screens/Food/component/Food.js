import React from "react";
// import {Icon} from 'react-native-vector-icons/dist/FontAwesome';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity,
  Image,
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import { colors} from "../../../styles";

export default function Food() {
  return (
    <View style={{marginHorizontal:32,marginVertical:64}, styles.container}>
       <Image source={require("../../../assests/hagiang.jpg")} style={{width:"100%",height:380}}></Image>
        <View style={styles.iconcontainer}>
            <View style={styles.khoi}>
                <Icon name ="save"  size={30} style={styles.topbuttonright}/>
                <Text>Document</Text>
            </View >
            <View style={styles.khoi}>
                <Icon name ="apple"  size={30} style={styles.topbuttonright}/>
                <Text>8.5 rate</Text>
            </View>

            <View style={styles.khoi}>

                <Icon name ="briefcase" size={30} style={styles.topbuttonright}/>
                <Text>Lugagge</Text>
            </View>
            
        </View>

        <View style={styles.textto}>
            <Text style={styles.textnam}>Cao Nguyên Đá Vôi Đồng Văn</Text>
            <Text style={styles.textque}>Hà Giang nơi có con sông Nho Quế , có những con đèo uốn cong .
            Nếu bạn muốn trải nghiệm cảm giác mới lạ những cung bậc cảm xúc .Hãy đặt vé ngay với chúng tôi</Text>
           
        </View>
        <TouchableOpacity style={styles.filterButton}>
                <Text style={{fontWeight:"700",color:"#fff",fontSize:20}}>Book Ticket</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
            <Text style={styles.thanhphan}>Ingredients</Text>
            <View style={styles.footer_main}>
                <Text style={styles.sugar}>Brown sugar</Text>
                <Text style={styles.weight}>85 g</Text>
            </View>
        </View>

     </View>
    
  );
}

const styles = StyleSheet.create({
 
container:{
    flex:1,
    backgroundColor:"white"
  } ,
  iconcontainer:{
    flexDirection:"row",
    alignItems:"center",justifyContent:"center",
   
  },
  khoi:{
    alignItems: 'center',
    width:95,
    marginVertical:12,
    
  },
  filterButton:{
    marginVertical:5,
    marginHorizontal:20,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:colors.pink,
    borderRadius:100,
    padding:18,
    
},
textto:{
    marginVertical:15,
    marginHorizontal:20,
},
textnam:{
    fontWeight:"bold",
    fontSize:20,
    color:"black"
},
textque:{
    fontSize:14,
    fontWeight:"900"
},
footer:{
    marginHorizontal:17,
    marginVertical:11,
    
},
footer_main:{
    flexDirection:"row",
    display:"flex",
    justifyContent:"space-between",
    marginVertical:9
},
sugar:{
    fontSize:17,
    fontWeight:"bold"
},
weight:{
    // justifyContent:"flex-end"
    fontSize:17
}
});


