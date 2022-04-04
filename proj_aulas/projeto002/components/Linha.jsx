import Celula from "../components/Celula"
import styles from '../styles/Linha.module.css'
export default function init(props){
    return (
        <div className={styles.linha}>
            <Celula preta={props.preta}></Celula>
            <Celula preta={!props.preta}></Celula>
            <Celula preta={props.preta}></Celula>
            <Celula preta={!props.preta}></Celula>
            <Celula preta={props.preta}></Celula>
            <Celula preta={!props.preta}></Celula>
            <Celula preta={props.preta}></Celula>
            <Celula preta={!props.preta}></Celula>

        </div>
    )
}

