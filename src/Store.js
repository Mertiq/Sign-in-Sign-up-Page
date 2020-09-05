import React, { useState, useEffect } from 'react';


export const kullanicilarContext = React.createContext('kullanicilar');

const Store = ({children}) => {

    const[kullanicilar, setKullanicilar] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3005/kullanicilar', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(data => data.json()).then(kullanici =>{
            setKullanicilar(kullanici)
        })
    }, []);

    return(
        <kullanicilarContext.Provider value = {[kullanicilar, setKullanicilar]}>
            {children}
        </kullanicilarContext.Provider>
    )
}

export default Store


