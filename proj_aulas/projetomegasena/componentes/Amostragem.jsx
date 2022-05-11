export default function Amostragem(props){
    const contador = {
        margin: "5px",
        width:"120px",
        height:"120px",
        borderRadius:"50%",
        fontWeight:"bolder",
        fontSize:"50px",
        color:"white",
        backgroundColor:"black",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center"
    }
    return (
        <span style={contador}>{props.numero}</span>
    )
}