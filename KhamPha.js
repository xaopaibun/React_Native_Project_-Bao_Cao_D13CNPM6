import { StatusBar } from 'expo-status-bar';
import { Icon} from 'react-native-elements';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const DataKS=[
    {
        image : require('../IMG/KS01.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/KS02.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/KS03.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/KS04.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/KS05.jpg'),
        ND: 'Oka Guest House',
    },
];
const Data_HomeStay=[
    {
        image : require('../IMG/HS1.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/HS2.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/HS3.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/HS4.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/HS5.jpg'),
        ND: 'Oka Guest House',
    },
];
const Data_AmThuc=[
    {
        image : require('../IMG/AmThuc1.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/AmThuc2.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/AmThuc3.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/AmThuc4.jpg'),
        ND: 'Oka Guest House',
    },
    {
        image : require('../IMG/AmThuc5.jpg'),
        ND: 'Oka Guest House',
    },
];
const Data_DuLich=[
    {
        image : require('../IMG/DL1.jpg'),
        ND: 'Hồ Hàm Lợn',
    },
    {
        image : require('../IMG/DL2.jpg'),
        ND: 'Tháp Rùa Hồ Gươm',
    },
    {
        image : require('../IMG/DL3.jpg'),
        ND: 'Đà Lạt',
    },
    {
        image : require('../IMG/DL5.jpg'),
        ND: 'Hà Giang',
    },
    {
        image : require('../IMG/DL6.jpg'),
        ND: 'Đảo Phú Quốc',
    },
    {
        image : require('../IMG/DL7.jpg'),
        ND: 'Tam Cốc Bích Động',
    },
    {
        image : require('../IMG/DL8.jpg'),
        ND: 'Oka Guest House',
    },
];
const Box_DL = props =>{
    return(
        <View style={{flex: 1, marginTop: 10,marginLeft: 8, marginRight: 7}}>
            <Image source={props.img} style={styles.imgKS} resizeMode='cover'></Image>
            <Text style={styles.Text_KS}>{props.NoiDung}</Text>
        </View>
    );
}

const Box_KS = props =>{
    return(
        <View style={{flex: 1, marginTop: 10,marginLeft: 8, marginRight: 7}}>
            <Image source={props.img} style={styles.imgKS} resizeMode='cover'></Image>
            <Text style={styles.Text_KS}>{props.NoiDung}</Text>
        </View>
    );
}
const Box_HomeStay = props =>{
    return(
        <View style={{flex: 1,marginTop: 10,marginLeft: 8, marginRight: 7}}>
            <Image source={props.img} style={styles.imgKS} resizeMode='cover'></Image>
            <Text style={styles.Text_KS}>{props.NoiDung}</Text>
        </View>
    );
}
const Box_AmThuc = props =>{
    return(
        <View style={{flex: 1, marginTop: 10,marginLeft: 8, marginRight: 7}}>
            <Image source={props.img} style={styles.imgKS} resizeMode='cover'></Image>
            <Text style={styles.Text_KS}>{props.NoiDung}</Text>
        </View>
    );
}
const Data_LichTrinhMoiTao = [
    {
        avatar: require('../IMG/Fb_PhamJin.jpg'),
        nickname:'Phạm Jin',
        TimeNewLT: '2 giờ trước',
        AnhDuLich: require('../IMG/HangMua.jpg'),
        DiaDiemDuLich:'3 ngày đi Hang Múa - Ninh Bình',
        ThoiGianDi :'3 ngày 2 đêm',
        Money: '10.050.025 VNĐ',
    },
    {
        avatar: require('../IMG/Fb_Dang.jpg'),
        nickname:'Nguyễn Hữu Đăng',
        TimeNewLT: '8 giờ trước',
        AnhDuLich: require('../IMG/DL7.jpg'),
        DiaDiemDuLich:'Tam Cốc Bích Động - Ninh Bình',
        ThoiGianDi :'2 ngày 1 đêm',
        Money: '6.500.000 VNĐ',
    },
    {
        avatar: require('../IMG/FB_Nam.jpg'),
        nickname:'Nguyễn Phương Nam',
        TimeNewLT: '5 giờ trước',
        AnhDuLich: require('../IMG/DL5.jpg'),
        DiaDiemDuLich:'Trải Nghiệm Sông Nho Quế - Hà Giang',
        ThoiGianDi :'7 ngày 6 đêm',
        Money: '14.000.000 VNĐ',
    },

];
const Box_Item_LichTrinhMoiTao = props =>{
    return(
        <View style={styles.box_Item}>
            <View style={styles.box_Item_header}>
                <Image style={{width: 50, height: 50, borderRadius: 50}} source={props.avatar} resizeMode='cover'></Image>
                <View style={styles.box_Item_header_Right}>
                    <Text style={styles.Text_Bold}>{props.NickName}</Text>
                    <Text>{props.TimeNewLT}</Text>
                </View>
            </View>
            <Image style={styles.box_Item_img} source={props.AnhDuLich} resizeMode='center'></Image>
            <View style={styles.box_Item_content}>
                <Text style={{fontSize: 16, fontWeight: 'bold', textAlign:'center'}}>{props.DiaDiemDuLich}</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-around', paddingTop:10}}>
                    <Text  style={styles.Text_Bold}><FontAwesome5 name="clock" size={24} color="black" />{props.ThoiGianDi}</Text>
                    <Text  style={styles.Text_Bold}><FontAwesome name="dollar" size={24} color="green" />{props.Money}</Text>
                </View>
            </View>
        </View>
    );
}
const KhamPha = () => {
    return(
        <ScrollView style={styles.container}>
            
                <View style={styles.title}>
                    <Text style={{fontSize: 24, fontWeight:'bold' }}>Công Ty Du Lịch Phạm Jin</Text>
                    <TouchableOpacity onPress={()=>alert('Tìm kiếm gì')}><Icon name="search" type="material" color="black" size={30} /></TouchableOpacity>
                </View>
                <View style={styles.title_1}>
                    <Text style={{fontSize:18, paddingLeft: 15}}>Lên lịch trình du lịch, đặt vé máy bay, khách sạn và vé tham quan.</Text>
                </View>
                <View style={styles.boxDV}>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: '0e918c', borderRadius: 50, height: 40, width: 40}}>
                            <Icon name="map-marker-alt" color="white" size={30}></Icon>
                        </TouchableOpacity>
                        <Text> Lịch trình</Text>
                    </View>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: 'ffe05d', borderRadius: 50, height: 40, width: 40}}>
                            <FontAwesome5 name="hotel" size={24} color="black" />
                        </TouchableOpacity>
                        <Text> Khách Sạn</Text>
                    </View>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 50, height: 40, width: 40}}>
                            <FontAwesome5 name="fly" size={24} color="black" />
                        </TouchableOpacity>
                        <Text> Chuyến Bay</Text>
                    </View>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: '94b4a4', borderRadius: 50, height: 40, width: 40}}>
                            <Icon name="fly" color="white" size={30}></Icon>
                        </TouchableOpacity>
                        <Text> Combo</Text>
                    </View>
                    
                </View>
                <View style={styles.boxDV}>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: '#00FF00', borderRadius: 50, height: 40, width: 40}}>
                            <Icon name="map-marker-alt" color="white" size={30}></Icon>
                        </TouchableOpacity>
                        <Text> Nhà Hàng</Text>
                    </View>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: 'gold', borderRadius: 50, height: 40, width: 40, alignItems: 'center'}}>
                            <Icon name="map-marker-alt" color="white" size={30}></Icon>
                        </TouchableOpacity>
                        <Text> Tham Quan</Text>
                    </View>
                    <View style={styles.boxDV_item}>
                        <TouchableOpacity style={{backgroundColor: '#483D8B', borderRadius: 50, height: 40, width: 40}}>
                            <Icon name="map-marker-alt" color="white" size={30}></Icon>
                        </TouchableOpacity>
                        <Text> Vé & Tour</Text>
                    </View>
                    
                    
                </View>
                <TouchableOpacity onPress={()=>alert("Lên lịch trình gì thế!")} style={{backgroundColor: '#DC143C', borderRadius:15, justifyContent: 'center', alignItems:'center', height: 40, marginTop: 20}}>
                    <Text style={{color: 'white', fontSize: 16}}>Lên Lịch Trình</Text>
                </TouchableOpacity>
                <ScrollView horizontal={true} >
                    
                    <Image style={{width: 380, height: 200, marginTop: 15}} source={require('../IMG/HangMua.jpg')} resizeMode='cover'></Image>
                    <Image style={{width: 380, height: 200, marginTop: 15}} source={require('../IMG/DL8.jpg')} resizeMode='cover'></Image>
                    <Image style={{width: 380, height: 200, marginTop: 15}} source={require('../IMG/DL7.jpg')} resizeMode='cover'></Image>
                    <Image style={{width: 380, height: 200, marginTop: 15}} source={require('../IMG/DL5.jpg')} resizeMode='cover'></Image>
                </ScrollView>
            
            <View style={styles.box_KhachSan}>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', flex: 8, marginLeft: 10}}>Khách Sạn Bạn Có Thể Quan Tâm</Text>
                    <TouchableOpacity><Text style={{color:'green', fontSize: 17,flex: 2, textAlign:'center', marginRight: 5}}>Tất Cả</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{height: 100, flexDirection: 'row'}}>
                    <Box_KS img= {DataKS[0].image} NoiDung={DataKS[0].ND}></Box_KS>
                    <Box_KS img= {DataKS[1].image} NoiDung={DataKS[1].ND}></Box_KS>
                    <Box_KS img= {DataKS[2].image} NoiDung={DataKS[2].ND}></Box_KS>
                    <Box_KS img= {DataKS[3].image} NoiDung={DataKS[3].ND}></Box_KS>
                    <Box_KS img= {DataKS[4].image} NoiDung={DataKS[4].ND}></Box_KS>
                </ScrollView>
            </View>
            <View style={styles.box_KhachSan}>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', flex: 8, marginLeft: 10}}>HomeStay Đang Hot</Text>
                    <TouchableOpacity><Text style={{color:'green', fontSize: 17,flex: 2, textAlign:'center'}}>Tất Cả</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{height: 100, flexDirection: 'row'}}>
                    <Box_HomeStay img= {Data_HomeStay[0].image} NoiDung={Data_HomeStay[0].ND}></Box_HomeStay>
                    <Box_HomeStay img= {Data_HomeStay[1].image} NoiDung={Data_HomeStay[1].ND}></Box_HomeStay>
                    <Box_HomeStay img= {Data_HomeStay[2].image} NoiDung={Data_HomeStay[2].ND}></Box_HomeStay>
                    <Box_HomeStay img= {Data_HomeStay[3].image} NoiDung={Data_HomeStay[3].ND}></Box_HomeStay>
                    <Box_HomeStay img= {Data_HomeStay[4].image} NoiDung={Data_HomeStay[4].ND}></Box_HomeStay>
                </ScrollView>
            </View>
            <View style={styles.box_KhachSan}>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', flex: 8, marginLeft: 10}}>Những Món ăn Hấp Dẫn</Text>
                    <TouchableOpacity><Text style={{color:'green', fontSize: 17,flex: 2, textAlign:'center'}}>Tất Cả</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{height: 100, flexDirection: 'row'}}>
                    <Box_AmThuc img= {Data_AmThuc[0].image} NoiDung={Data_AmThuc[0].ND}></Box_AmThuc>
                    <Box_AmThuc img= {Data_AmThuc[1].image} NoiDung={Data_AmThuc[1].ND}></Box_AmThuc>
                    <Box_AmThuc img= {Data_AmThuc[2].image} NoiDung={Data_AmThuc[2].ND}></Box_AmThuc>
                    <Box_AmThuc img= {Data_AmThuc[3].image} NoiDung={Data_AmThuc[3].ND}></Box_AmThuc>
                    <Box_AmThuc img= {Data_AmThuc[4].image} NoiDung={Data_AmThuc[4].ND}></Box_AmThuc>
                </ScrollView>
            </View>

            <View style={styles.box_KhachSan}>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', flex: 8, marginLeft: 10}}>Địa Danh Du Lịch Hot</Text>
                    <TouchableOpacity><Text style={{color:'green', fontSize: 17,flex: 2, textAlign:'center', marginRight: 5}}>Tất Cả</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{height: 100, flexDirection: 'row'}}>
                    <Box_DL img= {Data_DuLich[0].image} NoiDung={Data_DuLich[0].ND}></Box_DL>
                    <Box_DL img= {Data_DuLich[1].image} NoiDung={Data_DuLich[1].ND}></Box_DL>
                    <Box_DL img= {Data_DuLich[2].image} NoiDung={Data_DuLich[2].ND}></Box_DL>
                    <Box_DL img= {Data_DuLich[3].image} NoiDung={Data_DuLich[3].ND}></Box_DL>
                    <Box_DL img= {Data_DuLich[4].image} NoiDung={Data_DuLich[4].ND}></Box_DL>
                    <Box_DL img= {Data_DuLich[5].image} NoiDung={Data_DuLich[5].ND}></Box_DL>
                    <Box_DL img= {Data_DuLich[6].image} NoiDung={Data_DuLich[6].ND}></Box_DL>
                </ScrollView>
            </View>

            <View style={{height: 420}}>
                <View style={{flexDirection: 'row', marginTop: 30}}>
                    <Text style={{fontSize: 18, fontWeight:'bold', flex: 8, marginLeft: 10}}>Lịch Trình được tạo gần đây</Text>
                    <TouchableOpacity><Text style={{color:'green', fontSize: 17,flex: 2, textAlign:'center', marginRight: 5}}>Tất Cả</Text></TouchableOpacity>
                </View>
                <ScrollView horizontal={true} style={{height: 330, flexDirection: 'row'}}>
                    <Box_Item_LichTrinhMoiTao AnhDuLich={Data_LichTrinhMoiTao[0].AnhDuLich} NickName={Data_LichTrinhMoiTao[0].nickname} TimeNewLT={Data_LichTrinhMoiTao[0].TimeNewLT} ThoiGianDi={Data_LichTrinhMoiTao[0].ThoiGianDi} DiaDiemDuLich={Data_LichTrinhMoiTao[0].DiaDiemDuLich} Money={Data_LichTrinhMoiTao[0].Money} avatar={Data_LichTrinhMoiTao[0].avatar}/>
                    <Box_Item_LichTrinhMoiTao AnhDuLich={Data_LichTrinhMoiTao[1].AnhDuLich} NickName={Data_LichTrinhMoiTao[1].nickname} TimeNewLT={Data_LichTrinhMoiTao[1].TimeNewLT} ThoiGianDi={Data_LichTrinhMoiTao[1].ThoiGianDi} DiaDiemDuLich={Data_LichTrinhMoiTao[1].DiaDiemDuLich} Money={Data_LichTrinhMoiTao[1].Money} avatar={Data_LichTrinhMoiTao[1].avatar}/>
                    <Box_Item_LichTrinhMoiTao AnhDuLich={Data_LichTrinhMoiTao[2].AnhDuLich} NickName={Data_LichTrinhMoiTao[2].nickname} TimeNewLT={Data_LichTrinhMoiTao[2].TimeNewLT} ThoiGianDi={Data_LichTrinhMoiTao[2].ThoiGianDi} DiaDiemDuLich={Data_LichTrinhMoiTao[2].DiaDiemDuLich} Money={Data_LichTrinhMoiTao[2].Money} avatar={Data_LichTrinhMoiTao[2].avatar}/>
                </ScrollView>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    imgKS:{
        height: 200,
        width: 250,
        borderRadius: 10,
    },
    boxDV_item:{
        width: 100,
        height: 60,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        height: 50,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    title_1:{
        height: 50,
    },
    container: {
        marginTop: 40,
      flex: 1,
      backgroundColor: '#fff',
      
    },
    boxDV:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 80,
        paddingTop: 30
    },
    box_KhachSan:{
        height: 300,
    },
    box_KhachSan_Item:{
        marginTop: 10,
        marginLeft: 8,
        marginRight: 7,
        
    }, Text_Bold:{
        fontSize: 14,
        fontWeight: 'bold'
    }, 
    box_Item_header:{
        height: 80,
        flexDirection:'row',
        padding: 20
    },
    // box_Item_header_Left:{
    //     flex: 1
    // },
    box_Item_header_Right:{
        height: 50,
        paddingLeft: 10,
    },
    box_Item: {
       marginLeft: 10,
       marginTop: 20,
       height: 330,
       width: 285,
       borderRadius: 20,
       shadowColor: "#000",
       borderColor:'gray',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }, 
    box_Item_img:{
        height: 160,
        width: 280,
        
    },
    box_Item_content:{
    },
    Text_KS:{
        fontSize: 18,
        textAlign:'center'
    }
});
export default KhamPha;  