import styles from "./test.module.scss";

const HomePage = () => {

    return <div className={styles['testClass']}> 
        <h1>Hello to home page</h1>
        <img src={'/images/jakub.png'} alt="Jakub" />
    </div>
}

export default HomePage;