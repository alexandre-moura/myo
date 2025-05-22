import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import { useTechniqueStore } from "@/store/techniqueStore";
import * as Haptics from "expo-haptics";

export default function HomeScreen() {
  const { current, roll } = useTechniqueStore();
  const handleRoll: () => void = () => {
    Haptics.selectionAsync();
    roll();
  };
  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="text-3xl font-bold text-white mb-4">{current.name}</Text>
      <Text className="text-center text-zinc-300 px-6 mb-8">
        {current.summary}
      </Text>
      <Pressable
        onPress={handleRoll}
        className="bg-emerald-500 px-6 py-3 rounded-2xl active:opacity-70"
      >
        <Text className="text-white text-lg">Roll Again</Text>
      </Pressable>
    </View>
  );
}
