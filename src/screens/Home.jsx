import React, { useState , useContext} from "react";
import { AuthContext } from "../../context/authContext";
import { Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import FooterMenu from "../components/FooterMenu";
import HeaderMenu from "../components/HeaderMenu";

const Home = () => {
const [state] = useContext(AuthContext)

    return(
        <View style={styles.container} >       
             <HeaderMenu />
             <Text> I am from Home page</Text>
             <Text>{JSON.stringify(state)} </Text>
             <FooterMenu />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
      justifyContent: "space-between",
    },
  });

  
export default Home;