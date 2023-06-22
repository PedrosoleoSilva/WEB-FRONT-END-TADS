import './UserList.css'
import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchUserData = useCallback(async() => {
        try {
            setLoading(true)
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUserData(data)
      
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, []);

    useEffect(() => {
        fetchUserData()
    }, []);

    const renderUserData = ()=>{
        if(loading || !userData.length){
            return(
                <h3>Carregando</h3>
            )
        } 
        return (
            <div>
                <h3>Dados do usúario</h3>
                {userData.map(user =>(
                    <div>
                          <h4>{user.name}</h4>
                          <h5>{user.email}</h5>
                          <span>{user.company.name}</span>
                    </div>
                  
                ))}
            </div>
        )
    }

    return (
        
        <div className='container'>
            <h2>Listagem de usuário</h2>
            {renderUserData()}
        </div>
        
    );
}

export default UserList;