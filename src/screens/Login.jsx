import React, { useState , useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import InputBox from "../components/InputBox";
import { useNavigation } from "@react-navigation/core";
const axios = require('axios').default
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../../context/authContext";


const Login = () =>{
    const [email, setEmail] = useState();
    const[password, setPassword] = useState();
    // console.log(email);
    const navigation = useNavigation();

    // global state
    const[state , setState ] = useContext(AuthContext);


    const handleSubmmit = async () =>{
        try{
            if(!email || !password){
                Alert.alert("Please fill all the details ")
            }else{
                // 192.168.0.108
                const response = await axios.post('https://social-media-backend-rn.onrender.com/api/loginuser', { email, password})
                
                console.log(response.data)
                alert(response.data.message)
                setState(response.data)
                // console.log("Login Data==> ", { email, password });
                await AsyncStorage.setItem("@auth", JSON.stringify(response.data));                // this async storage stores data in key value pair and accepts data in string form
                setEmail('')
                setPassword('')
                navigation.navigate("Home")
            }

        }catch(error){
            console.log(error);
            if (error.response.status === 401){
                alert(error.response.data.message)
            }else if (error.response.status === 403){
                alert("Please enter correct username or password")
            }
        }
    }
    return(
        <View style={styles.container}>
        <Text style={styles.reg}> Log In </Text>
            
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
            <Text style={{ marginTop:10}}>Don't have any account... Please <Text style={{color:'blue'}} onPress = {()=>{navigation.navigate('Register')} }>Register</Text></Text>
            
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

 export default Login;