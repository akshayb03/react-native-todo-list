import {StyleSheet, View, Text, Pressable} from 'react-native'

const GoalItem = ({text, onDelete}) => {
    return (
        <View style={styles.listItem}>
            <Pressable style={({pressed}) => pressed && styles.rippleEffect} onPress={() => onDelete(text.key)}>  
              <Text style={styles.textItem}>{text.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        margin:8,
        borderRadius:6,
        backgroundColor:'#E59ADD'
    },
    textItem: {
        color:'#4A0843',
        padding:8
    },
    rippleEffect: {
        opacity:0.5,
        backgroundColor:'red'
    }
})

export default GoalItem