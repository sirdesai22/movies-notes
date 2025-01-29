import MovieCard from "@/components/ui/MovieCard";
import { Text, View, TextInput, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const data = [
    { id: 1, title: "Movie 1", description: "Description of Movie 1" },
    { id: 2, title: "Movie 2", description: "Description of Movie 2" },
    { id: 3, title: "Movie 3", description: "Description of Movie 3" },
    { id: 4, title: "Movie 4", description: "Description of Movie 4" },
  ];

  return (
    <SafeAreaView className="flex-1 px-5 py-3 bg-[#121212]">
      {/* Header */}
      <Text className="font-bold text-4xl text-blue-500 mb-5">
        Movies-Notes
      </Text>

      {/* Search Bar */}
      <View className="flex-row w-full items-center border-2 border-white/55 rounded-full px-1">
        <TextInput
          className="flex-1 border-0 text-white text-xl px-5 py-3 placeholder:text-white"
          placeholder="Search for movie/series"
        />
        <Pressable className="px-3">
          <Text className="text-3xl">🔍</Text>
        </Pressable>
      </View>

      {/* Grid List */}
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <MovieCard item={item} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }} // Prevents cutting off last item
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
