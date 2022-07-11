
import classes from "../Styles/Home.module.css";

const Home = (props) => {

    return (
        <main className={classes['main-main']}>
            <h1 className={classes["main-header"]}>Welcome To Our Tool Shop</h1>
            <h3 className={classes["second-header"]}>Browse Our Catalog And Place Your Order.</h3>
            <div className={classes["main-main__background_image"]}></div>
        </main>
    )

};

export default Home;