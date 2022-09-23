import React, {useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import ItemsList from '../components/Home/ItemsList';
import classes from './Home.module.css';
const Home = props => {
    

    const element = useMemo( () => <div className={classes['home']}><ItemsList/></div>);
    
    return(
        <React.Fragment>
            {element}
        </React.Fragment>
    );

};

export default Home;