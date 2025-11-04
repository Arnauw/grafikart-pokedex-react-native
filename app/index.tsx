import {Text, View, StyleSheet,} from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from "expo-router";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
    },
    textRed: {
        color: "red",
        fontSize: 40,
    }
});

export default function Index() {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text
                style={styles.textRed}
            >Hello World!!!
                <Link href={"/about"}>About</Link>
                <Link href={{pathname: "/pokemon/[id]", params: {id: 3}}}>Pokemon </Link>
            </Text>
        </SafeAreaView>
    );
}