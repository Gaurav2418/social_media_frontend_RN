import React from "react";
import { ScrollView, Text, View } from "react-native";
import FooterMenu from "../components/FooterMenu";

const Myposts = () => {
    return(
        <ScrollView>
            <Text>
                I am from MY posts page
            </Text>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                      <FooterMenu />
            </View>
        </ScrollView>
    )
}

export default Myposts;