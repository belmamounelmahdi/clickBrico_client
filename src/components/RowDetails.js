import React from 'react'
import { useDispatch } from 'react-redux'
import { DeleteProfile } from '../redux/actions/profileAction'

function RowDetails({_id, user, city, tel, address}) {
    const dispatch = useDispatch()
    const handelDelete = (id) => {
        dispatch(DeleteProfile(id))
    }
    return (
        <tr className='space-x-4'>
        <th className='text-left'>{user.firstname}</th>
        <td>{_id}</td>
        <td>{user.email}</td>
        <td>{city}</td>
        <td>{address}</td>
        <td>{tel}</td>
        <td>
            <button onClick={() => handelDelete(_id)} className='border-2 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl'>
                Supprimer
            </button>
        </td>
        
    </tr>

    )
}

export default RowDetails
