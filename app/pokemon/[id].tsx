import {Text} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {useLocalSearchParams} from "expo-router";

export default function Pokemon() {
    const params = useLocalSearchParams();
    return (
        <SafeAreaView>
                <Text>Pokemon {params.id}</Text>
        </SafeAreaView>
    )
}