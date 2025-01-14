import { StyleSheet, View, Text } from "react-native";
import Input from "./Input";
import Button from "../UI/Button";
import { useState } from "react";
import { getFormattedDate } from "../../util/date";


function TimeForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((curInputvalues) => {
            return {
                ...curInputvalues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {
        const timeData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };
        onSubmit(timeData)
    }
    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Time</Text>
            <View style={styles.inputsRow}>
                <Input
                    style={styles.rowInput}
                    label={"Amount"}
                    textInputConfig={{
                        keyBoardType: 'decimal-pad',
                        onChangeText: inputChangedHandler.bind(this, 'amount'),
                        value: inputValues.amount
                    }} />
                <Input
                    style={styles.rowInput}
                    label={"Date"}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: '10',
                        onChangeText: inputChangedHandler.bind(this, 'date'),
                        value: inputValues.date

                    }} />
            </View>
            <Input label={"Description"} textInputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }}
            />
            <View style={styles.buttons}>
                <Button
                    style={styles.button}
                    mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button
                    style={styles.button}
                    onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    )
}

export default TimeForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 80
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    }
})