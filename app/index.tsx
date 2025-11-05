import {Text, View, StyleSheet, FlatList, ActivityIndicator,} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from "expo-router";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import Card from "@/components/Card";
import {Image} from "expo-image";
import PokemonCard from "@/components/pokemon/PokemonCard";
import {useFetchQuery, useInfiniteFetchQuery} from "@/hooks/useFetchQuery";
import getPokemonId from "@/functions/pokemon";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        padding: 4,

    },
    textRed: {
        color: "red",
        fontSize: 40,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        padding: 12,
    },
    body: {
        flexDirection: "row",
        // alignItems: "center",
        gap: 16,
        padding: 12,
        flex: 1,
        backgroundColor: "blue",
        paddingHorizontal: 16,
        paddingVertical: 16,
        // marginHorizontal: 40,
        marginVertical: 16,
    },
    gridGap: {
        gap: 8,
    },
    list: {
        padding: 12,
    },
});

export default function Index() {
    const colors = useThemeColors();

    const {data, isFetching, fetchNextPage} = useInfiniteFetchQuery('/pokemon?limit=21');
    const pokemons = data?.pages.flatMap((page) => page.results) ?? [];
    // const pokemons = Array.from({length: 151}, (_, i) => ({
    //     name: `Pokémon name`,
    //     id: i + 1,
    // }));

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
                    }}
                    contentFit={"contain"}
                />
                <ThemedText variant="headline" color="grayLight">
                    Pokédex
                </ThemedText>
            </View>
            <Card style={styles.body}>
                <FlatList
                    data={pokemons}
                    numColumns={3}
                    columnWrapperStyle={styles.gridGap}
                    contentContainerStyle={[styles.gridGap, styles.list]}
                    ListFooterComponent={
                        isFetching ? <ActivityIndicator color={colors.tint}/> : null
                    }
                    onEndReached={() => fetchNextPage()}
                    renderItem={
                        ({item}) =>
                                <PokemonCard
                                    id={getPokemonId(item.url)}
                                    name={item.name}
                                    style={{
                                        flex: 1 / 3,
                                    }}
                                />
                    } keyExtractor={(item) => getPokemonId(item.url).toString()}
                    // Grafikart use only item.url instead of getPokemonId(item.url).toString()
                >
                </FlatList>
            </Card>
        </SafeAreaView>
    );
}