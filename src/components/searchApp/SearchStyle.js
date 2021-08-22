import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    saladPlate:{
        
        width: '400px',
        height: '500px',
        float: 'left',
        paddingTop: 50
    },
   
    search:{
       paddingTop: 100,
       paddingLeft: 100,
        float: 'left',
        marginBottom: 20 
    },
    searchComponent:{
        // width: 1200,
        height: 600,
        // border: 'solid black 2px'
    },
    input:{
        marginTop: 3,
        border: 'solid skyblue 2px',
        borderRadius: '5px',
        fontSize: 35
    },
    btn:{
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10
    },
    searchInput:{
        float: 'left',
        marginLeft: 20,
        marginTop: 5,
        
        
    },
    app: {
        float: 'left',
        marginLeft: 100,
        marginTop: 50,
        
    },
    getApp: {
        padding: 20,
        // justifyContent: 'space-between'
    },
    appPic:{
        
        width: 300,
        height: 350,
        // float: 'right'
        position: 'absolute',
        top: 250,
        left: 1000,

    }
})

export default useStyles;