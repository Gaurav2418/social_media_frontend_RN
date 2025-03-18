import React from "react";
import { View, Text, StyleSheet } from "react-native";


const PostCard = ({posts}) => {
return(
<View>
    <Text>
        I am from post card
    </Text>
    <View>
        { posts?.map( (post, i )=> (
            <View style ={styles.card}>
                <Text style={styles.title}>Title : { post?.title }</Text>
                <Text>Description : { post?.description }</Text>
                <View style={styles.footer}>
                    <Text>Posted By : {post?.postedBy?.name}</Text>
                                           
                </View>

            </View>
        ) )}
    </View>
</View>
)
}

export default PostCard

const styles = StyleSheet.create({
    heading: {
      color: "green",
      textAlign: "center",
    },
    card: {
      width: "97%",
      backgroundColor: "#ffffff",
      borderWidth: 0.2,
      borderColor: "gray",
      padding: 20,
      borderRadius: 5,
      marginVertical: 10,
    },
    title: {
      fontWeight: "bold",
      paddingBottom: 10,
      borderBottomWidth: 0.3,
    },
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      alignItems: 'flex-end'
    },
    desc: {
      marginTop: 10,
    },
  });