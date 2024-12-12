import { View, Text, StyleSheet } from 'react-native'
import { GlobalStyles } from '../constants/styles';

function TimeSummary({ time, periodName }) {
    const totalTime = time.reduce((sum, hour) => {
        return sum + hour.amount
    }, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>{totalTime.toFixed(2)}h</Text>
        </View>
    )
}

export default TimeSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400,

    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})