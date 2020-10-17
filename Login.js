import React, { useState }from 'react';
import { Icon, Input, Button } from 'react-native-elements';
import { View, Text, ScrollVie, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
 import KhamPha from './KhamPha';
const Login1 = ({ navigation }) => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const Check = ()=>{
        if(Username == 'admin' && Password == '0000'){
            ()=>navigation.navigate('KhamPha');
            alert('Đăng Nhập Thành Công');
        }
        else{
            alert('Đăng Nhập Thất Bại, Do Bạn Nhập Sai TK or MK!');
        }
    }
    return (
        <>
            

            <View style={styles.formScreen}>

                    <View style={styles.formBox}>
                        {/* Avatar Form */}
                        <View style={styles.viewFlexCenter}>
                            <Icon name="account-box" type="material" color="#fbea76" size={100} />
                        </View>
                        {/* Input Form */}
                        <View style={{ marginTop: 20 }}>
                            <Input placeholder='Username' leftIcon={{ type: 'material', name: 'account-circle', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} value={Username} onChangeText = {(value) => setUsername(value)}  />
                            <Input placeholder='Password' leftIcon={{ type: 'font-awesome-5', name: 'unlock-alt', color: '#fff' }} inputStyle={{ color: "#fff", marginLeft: 5 }} value={Password} onChangeText = {(value) => setPassword(value)} secureTextEntry={true}/>
                        </View>
                        {/* Button Form */}
                        <Button title="Login" onPress={Check}/>
                        <Text style={styles.Text}>or</Text>
                        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Button buttonStyle={{ width: 120 }} title="Foget" type="outline"
                                icon={<Icon iconStyle={{ marginRight: 10 }} name="hand-point-left" type="font-awesome-5" size={20} color="#2288dc" />}
                               
                            />
                            <Button buttonStyle={{ width: 120 }} title="Register" type="outline"
                                iconRight={true}
                                icon={<Icon iconStyle={{ marginLeft: 10 }} name="hand-point-right" type="font-awesome-5" size={20} color="#2288dc" />}
                                
                            />
                        </View>
                    </View>
            </View>
        </>
    )
}
const Stack = createStackNavigator();

const Login =()=>{
    
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login1">
            <Stack.Screen name="Đăng Nhập" component={Login1} />
            <Stack.Screen  component={KhamPha} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    test:{
        backgroundColor: 'red',
        width: 100,
        height: 100
    },
    formScreen:{
        backgroundColor: '#202124',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formBox:{
        width: 300
    },
    viewFlexCenter:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }, Text:{
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    }
});
export default Login;