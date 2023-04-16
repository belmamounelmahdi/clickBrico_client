/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProfile, GetProfiles } from "../redux/actions/profileAction";
import axios from "axios";

function Users() {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const [jobbersData, setJobbersData] = useState([]);

  
  async function handleDeleteJobber(id) {
    try {
      const token = localStorage.getItem("jwt");
      await axios.delete(`http://192.168.11.104:3600/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Do something after successful deletion
    } catch (error) {
      console.error(error);
    }
  }
  

  
  useEffect(() => {
    fetch('https://clickbrico-server.herokuapp.com/jobbers')
      .then(response => response.json())
      .then(data => setJobbersData(data))
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
    async function fetchData() {
      await dispatch(GetProfiles());
      console.log(profiles.profiles);
    }
    fetchData();
  }, []);

  const handelDelete = (id) => {
    dispatch(DeleteProfile(id));
  };
  return (
    <div className="p-8 flex flex-col space-y-5 h-full w-screen justify-center shadow-2xl m-4 bg-white">

      <div class="flex flex-col overflow-x-auto">
      <h1>Liste des utilisateurs</h1>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Nom
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Id
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Ville
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Address
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Télephone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profiles.profiles.map(
                    (ele, _id) => (
                      
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {_id + 1}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {ele.user.firstname}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {ele.user._id}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {ele.user.email}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">{ele.city}</td>
                          <td class="whitespace-nowrap px-6 py-4">{ele.address}</td>
                          <td class="whitespace-nowrap px-6 py-4">{ele.tel}</td>

                          <button
                            onClick={() => handelDelete(ele._id)}
                            className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                            >
                            Supprimer
                          </button>

                        </tr>
                      
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col overflow-x-auto">
      <h1>Liste des prestataires</h1>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      #
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Nom
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Id
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Service
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Solde
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Télephone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobbersData.map(
                    (ele, _id) => (
                      
                        <tr class="border-b dark:border-neutral-500">
                          <td class="whitespace-nowrap px-6 py-4 font-medium">
                            {_id + 1}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {ele.name}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {ele._id}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">
                            {ele.email}
                          </td>
                          <td class="whitespace-nowrap px-6 py-4">{ele.service}</td>
                          <td class="whitespace-nowrap px-6 py-4">{ele.solde}</td>
                          <td class="whitespace-nowrap px-6 py-4">{ele.tel}</td>

                          <button
                            onClick={() => handleDeleteJobber(ele._id)}
                            className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                            >
                            Supprimer
                          </button>

                        </tr>
                      
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
