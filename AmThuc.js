import React, { useState }from 'react';
import { View, Text, ScrollVie, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
const Data= [
    {
        img : {uri: 'https://cdn3.ivivu.com/2014/11/33-mon-ngon-viet-nam-ivivu1.jpg'},
        title: 'Du Lịch Việt Nam thưởng thức 33 món ngon không thể cưỡng lại',
        NoiDung :'Du Lịch Việt Nam đi qua khắp các tỉnh thành cả nudjasfhus',
    },
    {
        img : {uri: 'http://dulichvietnam.com.vn/data/image/0-top4monankinhdivungcaonghean/Top-4-mon-an-kinh-di-nhung-duoc-xem-la-cua-quy-o-vung-cao-nghe-an-3.jpg'},
        title: 'Top 4 món ăn "kinh dị" nhưng được xem là của quý ở vùng cao Nghệ An',
        NoiDung :'Đến vùng cao Nghệ An nơi sinh sống của nhiều bà con dân tộc, du khách sẽ phải sửng sốt khi thưởng thức ẩm thực nơi đây.',
    },
    {
        img : {uri: 'https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2017/01/30-mon-ngon-nuc-long-nhat-dinh-phai-thu-khi-toi-ha-noi-phan-1.jpg'},
        title: 'Phở Phố Cổ Hà Nội',
        NoiDung :'Nhắc tới Hà Nội không thể nào không nhắc tới các món phở; từ phở nước, phở xào tới phở cuốn, từ phở gà tới phở bò, từ tái, nạm tới chín. Như thể dù có ăn phở cả tháng cũng không khiến bạn chán ngán được vì có quá nhiều lựa chọn.',
    },
    {
        img : {uri: 'https://blog.traveloka.com/vn/wp-content/uploads/sites/9/2017/01/30-mon-ngon-nuc-long-nhat-dinh-phai-thu-khi-toi-ha-noi-phan-7.jpg'},
        title: 'Bún Cá Hà Nội',
        NoiDung :'Bún cá là món ăn xuất phát từ Hải Phòng nhưng được khá nhiều người Hà Nội yêu thích.',
    }
];
const Box = props =>{
  return(
    <View style={styles.Nut}>
              <Image style={styles.img} source={props.img} resizeMode='cover'></Image>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.content}>{props.NoiDung}</Text>
    </View>
  );
}
const AmThuc = ()=>{
    return(
      <ScrollView style={{marginTop: 25}}>
        <TouchableOpacity>
          <Box img={Data[0].img} title={Data[0].title} NoiDung= {Data[0].NoiDung}></Box>
        </TouchableOpacity>
        <TouchableOpacity>
          <Box img={Data[1].img} title={Data[1].title} NoiDung= {Data[1].NoiDung}></Box>
        </TouchableOpacity>
        <TouchableOpacity>
          <Box img={Data[2].img} title={Data[2].title} NoiDung= {Data[2].NoiDung}></Box>
        </TouchableOpacity>
        <TouchableOpacity>
          <Box img={Data[3].img} title={Data[3].title} NoiDung= {Data[3].NoiDung}></Box>
        </TouchableOpacity>
      </ScrollView>
    );

}
const styles = StyleSheet.create({
  Nut:{
     marginBottom: 15,
     shadowColor: "#000",
     padding: 18, 
     paddingBottom: 30,
     borderRadius: 25,
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 5,
  },
   img:{
       height: 200,
      marginTop:10
   },
   title:{
       fontSize: 16,
       fontWeight: 'bold',
       marginTop: 5
   },
   content:{
       color:'gray',
       marginTop: 10
   }

});
export default AmThuc;