/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RowDetails from '../components/RowDetails'
import { GetProfiles } from '../redux/actions/profileAction'

function Users() {
    const profiles = useSelector( state => state.profiles)
    const dispatch = useDispatch()


    useEffect( () => {
        async function fetchData () {
            await dispatch(GetProfiles())
            console.log(profiles.profiles);
        }
        fetchData()
        }, [])
        
    return (
    <div className='p-8 flex h-full w-screen justify-center shadow-2xl m-4 bg-white'>
        <div className='flex flex-col'>
            <h1>
                Liste des utilisateurs
            </h1>
            <br />
                <table className='w-full '>
                    <thead className='space-x-8 text-left'>
                        <tr>
                            <th scope='col'>
                                Nom
                            </th>
                            <th scope='col'>
                                Id
                            </th>
                            <th scope='col'>
                                Email
                            </th>
                            <th scope='col'>
                                Ville
                            </th>
                            <th scope='col'>
                                Address
                            </th>
                            <th scope='col'>
                                Tel
                            </th>
                        </tr>
                    </thead>
                        
                        
                    <tbody className='space-x-14'>
                        {
                            profiles.profiles.map(({_id, user, city, tel, address}) => (
                                <>
                                <RowDetails _id={_id} user={user} city={city} tel={tel} address={address} />
                                
                                </>
                            ))
                        }                   
                    </tbody>
                </table>
                </div>
            </div>
    )
}

export default Users