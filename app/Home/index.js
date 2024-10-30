import { StyleSheet, View, Text } from "react-native";

export default function HomePlicy() {
    return(
        <View>
            <View style = {styles.titleField}>
        <Text style={styles.title}>홈</Text>
      </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleField : {
      width : "100%",
      paddingTop : 24,
      paddingBottom : 24,
      paddingRight : 16,
      paddingLeft : 16 ,
    },
  
    title: {
      width: "100%",
      fontWeight: "bold",
      fontSize: 24,
    },
  
  });