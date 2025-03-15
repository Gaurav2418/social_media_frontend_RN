import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert,  Pressable} from "react-native";
import InputBox from "../components/InputBox";
import { NavigationContainer, createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login";
const axios = require('axios').default


const Register = () =>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();
    
    // console.log(email);
    const navigation = useNavigation();


    const handleSubmmit = () =>{
        try{
            if(!email || !password){
                Alert.alert("Please fill all the details ")
            }else{
                axios.post("https://social-media-backend-rn.onrender.com/api/registeruser",
                    {name, email, password}, 
                ).then(response => {
                        // Handle successful response from the server
                        console.log(response.data);
                        Alert.alert("Registration Successful!", "You can login now.");
                      
                    })
                    .catch(error => {
                        // Handle error from server
                        console.error(error);
                        Alert.alert("Error", "Registration failed, please try again.");
                    });


                    // console.log(name,email, password)
                setEmail('')
                setPassword('')
                setName('')
                
            }

        }catch(error){
            console.log(error);
        }
    }
    return(
        <View style={styles.container}>
        <Text style={styles.reg}> Register </Text>
            
        <InputBox inputTitle ={"Name"}  
            style={{marginLeft:30}} 
            keyboardType=''
            autoComplete=''
            value={name}   // value here is prop passed to the component
            
            setValue={setName}
            />

            <InputBox inputTitle ={"Mail ID"}  
            style={{marginLeft:20}} 
            keyboardType='email-address'
            autoComplete='email'
            value={email}   // value here is prop passed to the component
            
            setValue={setEmail}
             />

            <InputBox inputTitle ={"Password"} style={{marginBottom:5}}  secureTextEntry= {true}  value={password} setValue={setPassword}/>
            <Button title="Submmit" onPress={handleSubmmit}/>
            {/* <Text style={styles.emailDisplay}>Email: {email}</Text> */}
            <View style={{ flexDirection:'row',justifyContent:'center', flexWrap:'nowrap'}}>
                <Text style={{ marginTop:10}}>Already Registered Please <Text style={{color:'blue'}} onPress = {()=>{navigation.navigate('Login')} }>Login</Text> 
                </Text>
            </View>
            
            
        </View>
    ) 
}



 const styles = StyleSheet.create({
    container:{
        backgroundColor: '#d2c89d',
        height:'100%',
        width :'100%',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    reg :{
        backgroundColor:'',
        color:'#4d4e55',
        fontWeight: 'bold',
        width :'100%',
        textAlign:'center',
        fontSize:20
    },
    textinput1:{
        height:40,
        width:250,
        backgroundColor:'#dadada',
        padding:10,
        margin:10,
        borderRadius:10,
    },
    emailDisplay: {
        marginTop: 20,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    inputCard:{
        flexDirection:'row',
        alignItems:'center'
    }
 })

 export default Register;