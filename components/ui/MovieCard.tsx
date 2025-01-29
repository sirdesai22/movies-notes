import { Text, View } from "react-native";
import React, { Component } from "react";

const MovieCard = ({ item }: any) => {
  return (
    <View className="w-[48%] aspect-square bg-white/10 rounded-lg mt-3 p-4">
      <Text className="text-3xl font-bold text-white">{item.title}</Text>
      <Text className="text-sm text-gray-500">{item.description}</Text>
    </View>
  );
};
export default MovieCard;
