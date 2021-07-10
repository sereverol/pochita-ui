import { StyleSheet } from 'react-native';

export const signUpStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingVertical: 100
    },
    title: {
        color: "#3465d9",
        fontWeight: "bold",
        fontSize: 30
    },
    subtitle: {
        color: "gray"
    },
    section: {
        flexDirection: "row",
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: "center",
        marginTop: 10
    },
    textInput: {
        flex: 1,
        color: "gray",
        paddingLeft: 10
    },
    forgotPassword: {
        textAlign: "right",
        marginTop: 15,
        color: "#3465d9"
    },
    signIn: {
        width: "100%",
        height: 40,
        backgroundColor: "#3465d9",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },
    textSignIn: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        borderRadius: 50
    },
    signUp: {
        color: "gray",
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "center"
    },
    textSignUp: {
        textAlign: "center"
    }
})