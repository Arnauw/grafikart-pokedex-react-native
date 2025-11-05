import {type ViewStyle, Image, StyleSheet, View, Pressable} from "react-native";
import Card from "@/components/Card";
import {ThemedText} from "@/components/ThemedText";
import {useThemeColors} from "@/hooks/useThemeColors";
import {Link} from "expo-router";
import getPokemonId from "@/functions/pokemon";

type Props = {
    style?: ViewStyle,
    id: number,
    name: string,
}

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        padding: 4.
    },
    id: {
        alignSelf: "flex-end",
        fontSize: 8,
    },
    // name: {
    //    
    // },
    shadow: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderRadius: 7,
    },
})

export default function PokemonCard({style, id, name}: Props) {
    const colors = useThemeColors();
    return (

        <Link href={{pathname: "/pokemon/[id]", params: {id: id}}} asChild={true}>
            <Pressable>
                <Card style={[style, styles.card]}>
                    <View style={[styles.shadow, {backgroundColor: colors.grayBackground, width: '100%'}]}></View>
                    <ThemedText
                        variant="caption"
                        color="grayMedium"
                        style={styles.id}
                    >
                        #{id.toString().padStart(3, '0')}
                    </ThemedText>
                    <Image
                        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                        height={72}
                        width={72}
                    />
                    <ThemedText
                        variant="caption"
                        color="grayMedium"
                    >
                        {name}
                    </ThemedText>
                </Card>
            </Pressable>
        </Link>


    )
}