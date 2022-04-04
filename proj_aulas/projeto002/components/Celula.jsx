import styles from "../styles/celula.module.css"
export default function init(props){
    return (
        <div  style={{backgroundColor: props.preta? "black": "white"}} className={styles.celula}>
        </div>
    )
}