import { StyleSheet } from "react-native";


const styles = StyleSheet.create({


    maincontainer: {
        backgroundColor: 'white',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    smallIcon: {
        marginRight: 10,
        fontSize: 24,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: 'center',
    },
    logo: {
        height: 260,
        width: 260,
        marginTop: 30,
    },
    logoRegister: {
        height: 160,
        width: 160,
        marginTop: 20,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        alignItems:"center",
        // justifyContent:'flex-end',
        padding: 8,
        marginTop: 15,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#420475',
        borderRadius: 50,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        color: '#05375a'
    },
    loginContainer: {
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    text_header: {
        color: '#420475',
        fontWeight: 'bold',

    },
    button:{
        alignItems:'center',
        marginTop:-20,
        textAlign:'center',
        margin:20

    },
    iBut:{
        width:'70%',
        backgroundColor:'#420475',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:15,
        borderRadius:50,
    }
    

})
export default styles