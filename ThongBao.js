import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, Dimensions} from 'react-native';
const Data = [
    {
        IMG:{uri:'https://1.bp.blogspot.com/-n_bFzL9lPUU/Xp23H9Sk8yI/AAAAAAAAhyA/JYfvZhwguxc8vT_YS3w14Xi3YWf3hxqIQCLcBGAsYHQ/s1600/Hinh-Anh-Dep-Tren-Mang%2B%25282%2529.jpg'},
        TieuDe :'TripHunter có 1 địa danh mới Koh Phi Phi',
        Time: '26 thg 06, 2020'
    },
    {
        IMG:{uri:'https://luhanhvietnam.com.vn/du-lich/vnt_upload/news/10_2019/halloween-bieu-tuong-ma-quai.jpg'},
        TieuDe :'Lễ hội Halloween sắp diễn ra rồi!',
        Time: '17 thg 10, 2020'
    },
    {
        IMG:{uri:'https://i.pinimg.com/736x/83/d4/4d/83d44da53200008bc5f3e94c512e2e15.jpg'},
        TieuDe :'Bạn có 1 bộ sưu tập mới : Tháng 11 đi đâu ?',
        Time: '29 thg 10, 2020'
    },
    {
        IMG:{uri:'https://vietair.com.vn/Media/Images/vietair/Tin-tuc/tin-tuc-ve/thang-10-nen-du-lich-o-dau.png'},
        TieuDe :'Bạn có 1 bộ sưu tập mới : Tháng 10 đi đâu ?',
        Time: '16 thg 09, 2020'
    },
    {
        IMG:{uri:'https://sgp1.digitaloceanspaces.com/tz-mag-vn/wp-content/uploads/2019/10/020210100808/dia-diem-du-lich-sapa-1.jpg'},
        TieuDe :'Gói du lịch tự túc Đỉnh Phan-Xi-Phang. Tha hồ check in sống ảo nhất Sapa?',
        Time: '20 thg 05, 2020'
    },
    
    {
        IMG:{uri:'https://media-cdn.tripadvisor.com/media/photo-s/0f/44/bc/47/homstay-ta-van.jpg'},
        TieuDe :'Bạn có 1 bộ sưu tập mới : Top combo Bali giá Tốt nhất',
        Time: '28 thg 05, 2020'
    },
    {
        IMG:{uri:'https://www.tripi.vn/blog/wp-content/uploads/2017/10/efafgasdfsdfsdfdfd.jpg'},
        TieuDe :'Lễ hội Tam Giác Mạch sắp diễn ra rồi! Bạn đã có lịch trình khám phá Hà Giang chưa',
        Time: '6 thg 11, 2019'
    },
    {
        IMG:{uri:'https://tourdulichviet.com/storage/upload/images/800x600/tour-da-nang-ha-long.jpg'},
        TieuDe :'bạn có 1 bộ sưu tầm mới. Mùa hè này đi đâu?',
        Time: '6 thg 6, 2019'
    },
    
    
];
const ThongBao = props => {
  return(
    <View style={styles.Box}>
        <View style={styles.Left}>
            <Image style={styles.img} resizeMode='cover' source={props.IMG} />
        </View>
        <View style={styles.Right}>
            <Text style={styles.TieuDe}>{props.TieuDe}</Text>
            <Text>{props.Time}</Text>
        </View>
    </View>
  );
}
const ScreenThongBao = () =>{
    return(
      <ScrollView style={{marginTop: 25}}>
          <TouchableOpacity onPress={()=>alert('abc')}>
            <ThongBao IMG={Data[2].IMG} TieuDe={Data[2].TieuDe} Time={Data[2].Time}></ThongBao>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('abc')}>
            <ThongBao IMG={Data[0].IMG} TieuDe={Data[0].TieuDe} Time={Data[0].Time}></ThongBao>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('abc')}>
            <ThongBao IMG={Data[1].IMG} TieuDe={Data[1].TieuDe} Time={Data[1].Time}></ThongBao>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>alert('abc')}>
            <ThongBao IMG={Data[3].IMG} TieuDe={Data[3].TieuDe} Time={Data[3].Time}></ThongBao>
          </TouchableOpacity>
           <TouchableOpacity onPress={()=>alert('abc')}>
            <ThongBao IMG={Data[4].IMG} TieuDe={Data[4].TieuDe} Time={Data[4].Time}></ThongBao>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThongBao IMG={Data[5].IMG} TieuDe={Data[5].TieuDe} Time={Data[5].Time}></ThongBao>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThongBao IMG={Data[6].IMG} TieuDe={Data[6].TieuDe} Time={Data[6].Time}></ThongBao>
          </TouchableOpacity>
          <TouchableOpacity>
            <ThongBao IMG={Data[7].IMG} TieuDe={Data[7].TieuDe} Time={Data[7].Time}></ThongBao>
          </TouchableOpacity>
      </ScrollView>
        
    );
}

const styles = StyleSheet.create({
  img:{
    width: 60, height: 60, borderRadius: 15
  },
  Box:{
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor:'gray'
  },
    Left:{
        flex: 1,
    },
    Right:{
        flex: 5,
        paddingLeft: 25
    },
    TieuDe:{
        fontSize: 17,
        fontWeight: 'bold',
        
    }
});
export default ScreenThongBao;