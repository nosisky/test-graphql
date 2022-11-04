import { gql, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { LOAD_USERS } from '../GraphQL/Queries';

function GetUsers(props) {
    const { error, loading, data } = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])


    useEffect(() => {
        console.log(data)
        if (data) {
            setUsers(data.getAllUsers)
        }
    }, [data])


    return (
        <>
            {
                users.map((user) => <h1>{user.firstName}</h1>)
            }
        </>
    )
}


export default GetUsers;