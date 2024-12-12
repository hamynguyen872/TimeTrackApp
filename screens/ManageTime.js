import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import IconButton from "../components/UI/iconButton";
import { GlobalStyles } from "../constants/styles";
import { StatusBar } from "expo-status-bar";
import Button from "../components/UI/Button";
import { TimeContext } from "../store/expenses-context";
import TimeForm from "../components/ManageExpense/TimeForm";


function ManageTime({ route, navigation }) {
    const timeCtx = useContext(TimeContext)
    const editedTimeId = route.params?.timeId;
    const isEditing = !!editedTimeId

    const selectedTime = timeCtx.time.find(
        (time) => time.id === editedTimeId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Time' : 'Add Time'
        })

    }, [navigation, isEditing])

    function deleteTimeHandle() {
        timeCtx.deleteTime(editedTimeId);
        navigation.goBack();

    }

    function cancelHanlder() {
        navigation.goBack();

    }

    function confirmHandler(timeData) {
        if (isEditing) {
            timeCtx.updateTime(editedTimeId, timeData);
        } else {
            timeCtx.addTime(timeData);
        }
        navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <TimeForm submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmHandler}
                onCancel={cancelHanlder}
                defaultValues={selectedTime}
            />
            {isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={35}
                        onPress={deleteTimeHandle}
                    />
                </View>
            }
        </View>
    )
}

export default ManageTime;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary600

    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'

    },

})