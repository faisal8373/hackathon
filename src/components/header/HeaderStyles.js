import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    logoContainer: {
        margin: 50,
        
       
    },
    menu: {
        // position: 'absolute',
        // top: 50,
        float: 'left',
        paddingTop: 20
    },
    logo:{
        // position: 'absolute',
        // top: 50,
        float: 'left'
    },
    options: {
        
        display: 'inline',
        padding: 10,
    },
    textMargin:{
        marginLeft: 430,
    },
    btn:{
        margin: 10,
        paddingLeft: 20,
        paddingRight: 30
    },
    // cartSpan: {
    //     paddingTop: 20,
        
    //    color: 'green'
    // },
    // cart:{
    //     fontSize: 20,
    //     paddingtop: 20
    // }
    categoriesBar: {
        paddingLeft: 400,
        height: 30,
        backgroundColor: 'grey',
        color: 'white',
        padding: 10,

    }

});

export default useStyles;