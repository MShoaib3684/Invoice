import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputTextArea = ({
    label,
    value,
    placeHolder,
    InputStyle,
    textStyle,
    isSecure,
    onChangeText,
    ...props
}) => {
    return (
        // <View style={{ marginBottom: 16 }}>
        //     <TextInput
        //         value={value}
        //         placeholder={placeHolder}
        //         onChangeText={onChangeText}
        //         style={styles.inputStyle}
        //         placeholderTextColor="gray"
        //         isSecure={isSecure}
        //         {...props}
        //     />

        // </View>
        <View style={styles.textAreaContainer} >
            <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder={placeHolder}
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                {...props}
            />
        </View>


    )
}

export default InputTextArea

const styles = StyleSheet.create({


    textAreaContainer: {
        borderColor: 'grey',
        borderWidth: 1.5,
        borderRadius: 40,
        // backgroundColor: 'green'
    },
    textArea: {
        width: 300,
        borderRadius: 30,
        height: 80,
        paddingLeft: 30,
        paddingRight: 30,
        textAlignVertical: 'top',
        // backgroundColor: 'red'

    }
})
