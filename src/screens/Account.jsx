import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Touchable,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import FooterMenu from '../components/FooterMenu';


const Account = () =>{

    return(
        <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
              }}
              style={{ height: 200, width: 200, borderRadius: 100 }}
            />
          </View>
          <Text style={styles.warningtext}>
            Currently You Can Only Update Your Name And Password*
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Name</Text>
            <TextInput
              style={styles.inputBox}
              // value={name}
              // onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Email</Text>
            {/* <TextInput style={styles.inputBox} value={email} editable={false} /> */}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.inputBox}
              // value={password}
              // onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Role</Text>
            <TextInput
              style={styles.inputBox}
              // value={state?.user.role}
              editable={false}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            {/* <TouchableOpacity style={styles.updateBtn} onPress={handleUpdate}> */}
              <Text style={styles.updateBtnText}>
                {/* {loading ? "Please Wait" : "Update Profile"} */}
              </Text>
            {/* </TouchableOpacity> */}
          </View>
        </ScrollView>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <FooterMenu />
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      justifyContent: "space-between",
      marginTop: 40,
    },
    warningtext: {
      color: "red",
      fontSize: 13,
      textAlign: "center",
    },
    inputContainer: {
      marginTop: 20,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    inputText: {
      fontWeight: "bold",
      width: 70,
      color: "gray",
    },
    inputBox: {
      width: 250,
      backgroundColor: "#ffffff",
      marginLeft: 10,
      fontSize: 16,
      paddingLeft: 20,
      borderRadius: 5,
    },
    updateBtn: {
      backgroundColor: "black",
      color: "white",
      height: 40,
      width: 250,
      borderRadius: 10,
      marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    updateBtnText: {
      color: "#ffffff",
      fontSize: 16,
    },
  });
  export default Account;