import { useEffect, useState } from 'react';
import { stateCompo } from './stateCompo';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/sdk';
import PropTypes from 'prop-types';

function StateUserCoponent({ children }) {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setDataUser(user);
        });

        return () => unsubscribe();

    }, []);


    return (
        <stateCompo.Provider value={{ dataUser, setDataUser }}>
            {children}
        </stateCompo.Provider>
    );
}

StateUserCoponent.propTypes = {
    children: PropTypes.func,

};



export default StateUserCoponent;
