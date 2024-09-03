import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemRecipe = ({ item }) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('RecipeDetailScreen',{
        recipeId: item.id
    })} 
        style={styles.itemContainer}>
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        style={styles.imageRecipe}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name} </Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={18} color={colors.start} />
          <Text style={styles.rating}> {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 16,
    borderBottomWidth: 7,
    borderColor: colors.border,
    flexDirection: "row",
  },
  imageRecipe: {
    backgroundColor: colors.border,
    height: 78,
    width: 78,
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    textAlign: "left",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    fontFamily: "arial",
  },
  ratingContainer:{
    marginTop:8,
    flexDirection:"row",
    alignItems:"center"
  },
  rating:{
    fontSize:15,
    color:colors.primary,
  }
});
export default ItemRecipe;
