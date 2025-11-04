import {View, ViewProps, ViewStyle} from "react-native";
import {Shadows} from "@/constants/Shadows";
import {useThemeColors} from "@/hooks/useThemeColors";

type Props = ViewProps

const styles = {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    ...Shadows.dp2
} satisfies ViewStyle

export default function Card({style, ...rest}: Props) {
    const colors = useThemeColors();
    return (
        <View style={[style, styles, {backgroundColor: colors.grayLight}]} {...rest} />
    )
}