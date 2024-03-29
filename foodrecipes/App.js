import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Results from "./components/Results";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
				
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;

const styles = StyleSheet.create({});