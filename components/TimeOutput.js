import { StyleSheet, View } from "react-native";


import TimeSummary from "./TimeSummary";
import TimeList from "./TimeList";
import { GlobalStyles } from "../constants/styles";



function TimeOutput({ time, timePeriod }) {
    return (
        <View style={styles.container}>
            <TimeSummary time={time} periodName={timePeriod} />
            <TimeList time={time} />
        </View>
    )
}

export default TimeOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary600
    }


})