import type { Theme } from "@/constants/Types";

import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Appearance } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";

const CookRecipe = () => {
	const colorScheme = Appearance.getColorScheme() ?? "dark";
	const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
	const styles = createStyles(theme, colorScheme);
	const { id } = useLocalSearchParams();
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, [navigation]);

	return (
		<View style={styles.container}>
			<Text style={styles.mainText}>Cook Recipe {id}</Text>
		</View>
	);
};

function createStyles(theme: Theme, colorScheme: "light" | "dark") {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.background,
			alignItems: "center",
			justifyContent: "center",
		},
		mainText: {
			fontSize: 24,
			color: theme.text,
		},
	});
}
export default CookRecipe;
