import styles from './footer.module.css'
export default function Footer({complitedTodos,totalTodos}){
    return <div className={styles.footer}>
<span className={styles.item}> Completed Todos : {complitedTodos}</span>
<span className={styles.item} >Total Todos : {totalTodos}</span>

    </div>
}