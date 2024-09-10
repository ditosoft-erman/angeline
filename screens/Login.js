import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
            <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                <StatusBar style="auto" />
                <Image style={{ height: '100%', width: '100%', position: 'absolute', backgroundColor: 'white' }} />

              

                <View style={{ height: '100%', width: '100%', justifyContent: 'center', paddingTop: 10, paddingBottom: 10 }}>
                    <View style={{ alignItems: 'center', width: '100%'}}>
                    <Image style={{height: 100, width:100, marginBottom: 30}} source={require('../assets/logo.jpeg')}/>
                    </View>
                   
                    {/* <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', letterSpacing: 2, fontSize: 32, marginBottom: 40 }}>
                            Login
                        </Text>
                    </View> */}
                    <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                        <View  style={{ backgroundColor: '#e8e4c9', padding: 20, borderRadius: 16, width: '100%', borderWidth: 1,borderColor: 'black' }}>
                            <TextInput placeholder="Email" placeholderTextColor={'black'} />
                        </View>
                        <View  style={{ backgroundColor: '#e8e4c9', padding: 20, borderRadius: 16, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 20, borderWidth: 1,borderColor: 'black' }}>
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={'black'}
                                secureTextEntry={!passwordVisible}
                                style={{ flex: 1 }}
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Ionicons
                                    name={passwordVisible ? "eye-outline" : "eye-off-outline"}
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%' }}>
                            <TouchableOpacity style={{ width: '100%', backgroundColor: '#c8c193', padding: 12, borderRadius: 16, marginTop: 30 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View  style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.push('Register')}>
                                <Text style={{ color: '#e8e4c9' }}>Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View> 
    );
}


export default LoginScreen;
