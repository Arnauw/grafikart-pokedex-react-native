import {Text, View, StyleSheet} from "react-native";
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
        <View
            style={styles.container}
        >
            <Text
                style={styles.textRed}
            >Hello World!!!
                <Link href={"/about"}>About</Link>
            </Text>
        </View>
    );
}