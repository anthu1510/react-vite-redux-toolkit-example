import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUsers} from '../../redux/userSlice';

const Users = () => {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();
    useEffect(() => {
        const getusersData = () => {
            dispatch(getUsers());
        }
        getusersData();
    },[]);
    return ( 
        <>
           <table className="table table-bordered">
           <thead>
               <tr>
                   <th>
                       Name
                   </th>
               </tr>
            </thead>
            <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                        </tr>
                    );
                })}
            </tbody>
           </table>
        </>
     );
}
 
export default Users;