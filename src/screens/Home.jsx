import React, { useState , useContext} from "react";
import { AuthContext } from "../../context/authContext";
import { Text, View, StyleSheet, ScrollView, TextInput, Button, Alert} from "react-native";
import FooterMenu from "../components/FooterMenu";
import HeaderMenu from "../components/HeaderMenu";
import { PostContext } from "../../context/postContext";
import PostCard from "../components/PostCard";

const Home = () => {
const [state] = useContext(AuthContext)
const [posts] = useContext(PostContext)

    return(
        <View style={styles.container} >       
             <HeaderMenu />
                <ScrollView>
                  <PostCard posts ={posts} />
                  <Text> I am from Home page</Text>
                  <Text>{JSON.stringify(state)} </Text>
                  {/* <Text>{JSON.stringify(posts)}</Text> */}
                </ScrollView>
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