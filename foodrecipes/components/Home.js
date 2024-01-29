import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  const [food, setFood] = useState("");

  const handleSearch = () => {
    if (food.length > 0) {
      navigation.navigate("Results", {
        food: food,
      });
      setFood("");
    } else {
      Alert.alert("Search input empty!");
    }
  };
	return (
<View style={{ flex: 1, alignItems: "center" }}>
<Image
    source={require("../assets/images/welcome1.png")}/>
<View>
    
<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
				 				
                Cook Like A Chef

			</Text>

            </View>
            <View style={styles.inputContainer}>
        <TextInput
          value={food}
          placeholder="Enter Name of Food"
          style={styles.input}
          onChangeText={(text) => {
            setFood(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnTextContainer}
          onPress={handleSearch}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#515A5A",
  },
  textSubheading: {
    marginTop: 5,
    color: "#515A5A",
  },
  inputContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  input: {
    maxWidth: 500,
    width: "80%",
    borderColor: "#fff",
    borderWidth: 3,
    borderRadius: 30,
    height: 70,
    paddingLeft: 20,
    color: "#515A5A",
  },
  btnContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  btnTextContainer: {
    maxWidth: 500,
    borderRadius: 20,
    backgroundColor: "#f96163",
    width: "80%",
    height: 60,
    justifyContent: "center",
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
});

export default Home;       

            

    
    