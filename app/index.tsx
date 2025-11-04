import {Text, View, StyleSheet, FlatList,} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from "expo-router";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import Card from "@/components/Card";
import {Image} from "expo-image";

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
    },
    textRed: {
        color: "red",
        fontSize: 40,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },
    body: {
        // flex: 1,
        backgroundColor: "blue",
        paddingHorizontal: 16,
        paddingVertical: 16,
        // marginHorizontal: 40,
        marginVertical: 16,
    }
});

export default function Index() {
    const colors = useThemeColors();
    const pokemons = Array.from({length: 35}, (_, k) => ({
        name: `Pokémon name`,
        id: k + 1,
    }));

    return (
        <SafeAreaView
            style={[styles.container, {backgroundColor: colors.tint}]}
        >
            {/*<Text*/}
            {/*    style={styles.textRed}*/}
            {/*>Hello World!!!*/}
            {/*    <Link href={"/about"}>About</Link>*/}
            {/*    <Link href={{pathname: "/pokemon/[id]", params: {id: 3}}}>Pokemon </Link>*/}
            {/*</Text>*/}
            <View style={styles.header}>
                <Image
                    source={require("@/assets/images/pokedex/pokeball.png")}
                    style={{
                        width: 24,
                        height: 24,
                        resizeMode: 'contain',
                        // contentFit: 'contain',
                    }}
                />
                <ThemedText variant="headline" color="grayLight">
                    Pokédex
                </ThemedText>
            </View>
            <Card style={styles.body}>

                <FlatList
                    data={pokemons}
                    numColumns={3}
                    renderItem={
                        ({item}) =>
                            <View>
                                <Text>{item.name}</Text>
                            </View>
                    } keyExtractor={(item) => item.id.toString()}
                >
                </FlatList>
            </Card>
        </SafeAreaView>
    );
}