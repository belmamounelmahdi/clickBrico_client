/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProfile, GetProfiles } from "../redux/actions/profileAction";
import axios from "axios";
import { API_URL, JOBBER_API_URL } from "../config";
import Inputs from "../components/Inputs";
import User from "../assets/User.jpg"

function Users() {
  const profiles = useSelector((state) => state.profiles);
  const dispatch = useDispatch();
  const [jobbersEleData, setJobbersEleData] = useState([]);
  const [jobbersJarData, setJobbersJarData] = useState([]);
  const [jobbersMenData, setJobbersMenData] = useState([]);
  const [jobbersPeintData, setJobbersPeintData] = useState([]);
  const [jobbersPlombData, setJobbersPlombData] = useState([]);
  const [jobbersDemenageData, setJobbersDemenageData] = useState([]);
  const [inputSolde, setInputSolde] = useState("");
  const [display, setDisplay] = useState("hidden");
  const [selectedJobberId, setSelectedJobberId] = useState("");
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSelectJobber = (id) => {
    setSelectedJobberId(id);
    setDisplay("inline")
}
  async function handleDeleteJobber(id) {
    try {
      const token = localStorage.getItem("jwt");
      if (window.confirm("Vous voulez supprimer cette utilisateur ?")) {
        await axios.delete(`${JOBBER_API_URL}/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Do something after successful deletion
      }
    } catch (error) {
      console.error(error);
    }
  }
  // const handelOpen = () => {
  //   setDisplay("inline");
  // };
  const handelClose = () => {
    setDisplay("hidden");
  };
  const handleUpdateSolde = (id) => {
    // Send API request to update the solde
    axios
      .post(`${JOBBER_API_URL}/update-solde`, {
        user: selectedJobberId,
        solde: inputSolde,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    axios.get(`${API_URL}/service-electriciens`)
    .then(res => {
      setJobbersEleData(res.data);
    }) 
    .catch(err => console.log(err));
}, []);

useEffect(() => {
  axios.get(`${API_URL}/service-jardinage`)
  .then(res => {
    setJobbersJarData(res.data);
  }) 
  .catch(err => console.log(err));
}, []);
useEffect(() => {
  axios.get(`${API_URL}/service-menage`)
  .then(res => {
    setJobbersMenData(res.data);
  }) 
  .catch(err => console.log(err));
}, []);

useEffect(() => {
  axios
    .get(`${API_URL}/service-peinture`)
    .then((res) => {
      setJobbersPeintData(res.data);
    })
    .catch((err) => console.log(err));
}, []);

useEffect(() => {
  axios
    .get(`${API_URL}/service-plombie`)
    .then((res) => {
      setJobbersPlombData(res.data);
    })
    .catch((err) => console.log(err));
}, []);
useEffect(() => {
  axios
    .get(`${API_URL}/service-demenage`)
    .then((res) => {
      setJobbersDemenageData(res.data);
    })
    .catch((err) => console.log(err));
}, []);

  // useEffect(() => {
  //   axios.get(`${JOBBER_API_URL}/profiles`)
  //     .then(res => {
  //       setJobbersData(res.data);
  //       // if (res.data[0].photo) {
  //       //   const photo = new Blob([res.data[0].photo.data], { type: res.data[0].photo.contentType });
  //       //   const photoUrl = URL.createObjectURL(photo);
  //       //   setPhotoUrl(photoUrl);
  //       // }
  //     })
  //     .catch(err => console.log(err));
  // }, []);
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${JOBBER_API_URL}/profiles`);
  //       const jobbersDataWithPhoto = response.data.map(jobber => {
  //         if (jobber.photo) {
  //           const photo = new Blob([jobber.photo.data], { type: jobber.photo.contentType });
  //           jobber.photoUrl = URL.createObjectURL(photo);
  //         }
  //         return jobber;
  //       });
  //       setJobbersData(jobbersDataWithPhoto);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  
// console.log(photoUrl);
  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchData() {
      await dispatch(GetProfiles());
    }
    fetchData();
  }, []);

  const handelDelete = (id) => {
    dispatch(DeleteProfile(id));
  };
// console.log(jobbersJarData[0].profile.solde);
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
                  {profiles.profiles.map((ele, _id) => (
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/** Start Modal Inscription */}
      <div
        className={
          display +
          " modal fade fixed top-14 left-0 md:left-1/3 md:top-24 w-auto md:w-1/3 h-auto outline-none overflow-x-hidden overflow-y-auto z-10 shadow-2xl"
        }
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <button
          onClick={handelClose}
          className="btn-close
        z-50
        box-content
        absolute
        top-0
        right-2
        w-4 
        h-4 
        p-1 
        text-black 
        border-none 
        rounded-2xl 
        opacity-50 
        focus:shadow-none 
        focus:outline-none 
        focus:opacity-100 
        hover:text-black
        hover:opacity-75 
        hover:no-underline"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          ╳
        </button>

        <div className="modal-dialog relative pointer-events-none">
          <div className="modal-content border-none shadow-lg w-auto relative flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              className="modal-header 
        flex 
        flex-col 
        w-auto 
        items-center 
        p-4 
        border-b 
        border-gray-200 
        rounded-t-md"
            >
              <div>
                <form className="space-y-4 mt-6 flex flex-col items-center">
                  <Inputs
                    name="solde"
                    placeholder="Nouveau solde"
                    type="text"
                    handelChange={(e) => setInputSolde(e.target.value)}
                  />

                  <button onClick={(e) => {
                    e.preventDefault();
                    handleUpdateSolde(selectedJobberId)
                    handelClose()
                    setInputSolde("");
                  }} 
                    
                    className="bg-sky-600 text-white p-3">
                    Enregistrer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** End Modal Inscription */}
      <div class="flex flex-col overflow-x-auto">
        <h1>Liste des prestataires</h1>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                    Éléctricien
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
                  {jobbersEleData.map((ele, _id) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {_id + 1}
                        <img className='w-16 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />

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
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.service}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.profile.solde === undefined ? "0" : ele.profile.solde}
                        {/* <input 
                    className="w-10" 
                    type="text" 
                    name="solde" 
                    value={inputSolde} 
                    onChange={(e) => setInputSolde(e.target.value)} 
                /> */}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{ele.profile.tel}</td>

                      <button
                        onClick={() => handleDeleteJobber(ele._id)}
                        className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => handleSelectJobber(ele._id)}
                        className="border-2 mt-1 border-blue-200 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-xl"
                      >
                        Edit Solde
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Jardinier
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
                  {jobbersJarData.map((ele, _id) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {_id + 1}
                        {ele.profile.photo === undefined ? (<img className="w-16" src={User}/>) : 
                        (<img className='w-16 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />)}





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
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.service}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.profile.solde === undefined ? "0" : ele.profile.solde}
                        {/* <input 
                    className="w-10" 
                    type="text" 
                    name="solde" 
                    value={inputSolde} 
                    onChange={(e) => setInputSolde(e.target.value)} 
                /> */}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{ele.profile.tel}</td>

                      <button
                        onClick={() => handleDeleteJobber(ele._id)}
                        className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => handleSelectJobber(ele._id)}
                        className="border-2 mt-1 border-blue-200 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-xl"
                      >
                        Edit Solde
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Ménage
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
                  {jobbersMenData.map((ele, _id) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {_id + 1}
                        <img className='w-16 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />





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
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.service}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.profile.solde === undefined ? "0" : ele.profile.solde}
                        {/* <input 
                    className="w-10" 
                    type="text" 
                    name="solde" 
                    value={inputSolde} 
                    onChange={(e) => setInputSolde(e.target.value)} 
                /> */}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{ele.profile.tel}</td>

                      <button
                        onClick={() => handleDeleteJobber(ele._id)}
                        className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => handleSelectJobber(ele._id)}
                        className="border-2 mt-1 border-blue-200 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-xl"
                      >
                        Edit Solde
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Peintre
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
                  {jobbersPeintData.map((ele, _id) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {_id + 1}
                        <img className='w-16 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />





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
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.service}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.profile.solde === undefined ? "0" : ele.profile.solde}
                        {/* <input 
                    className="w-10" 
                    type="text" 
                    name="solde" 
                    value={inputSolde} 
                    onChange={(e) => setInputSolde(e.target.value)} 
                /> */}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{ele.profile.tel}</td>

                      <button
                        onClick={() => handleDeleteJobber(ele._id)}
                        className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => handleSelectJobber(ele._id)}
                        className="border-2 mt-1 border-blue-200 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-xl"
                      >
                        Edit Solde
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Plombier
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
                  {jobbersPlombData.map((ele, _id) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {_id + 1}
                        <img className='w-16 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />





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
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.service}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.profile.solde === undefined ? "0" : ele.profile.solde}
                        {/* <input 
                    className="w-10" 
                    type="text" 
                    name="solde" 
                    value={inputSolde} 
                    onChange={(e) => setInputSolde(e.target.value)} 
                /> */}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{ele.profile.tel}</td>

                      <button
                        onClick={() => handleDeleteJobber(ele._id)}
                        className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => handleSelectJobber(ele._id)}
                        className="border-2 mt-1 border-blue-200 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-xl"
                      >
                        Edit Solde
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Déménage
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
                  {jobbersDemenageData.map((ele, _id) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {_id + 1}
                        <img className='w-16 rounded-full' src={ele.profile.photo && `data:${ele.profile.photo.contentType};base64,${ele.profile.photo.data.toString('base64')}`} alt="Profile Photo" />





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
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.service}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {ele.profile.solde === undefined ? "0" : ele.profile.solde}
                        {/* <input 
                    className="w-10" 
                    type="text" 
                    name="solde" 
                    value={inputSolde} 
                    onChange={(e) => setInputSolde(e.target.value)} 
                /> */}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{ele.profile.tel}</td>
                      <button
                        onClick={() => handleDeleteJobber(ele._id)}
                        className="border-2 mt-1 border-red-200 bg-red-500 text-white hover:bg-white hover:text-red-500 p-2 rounded-xl"
                      >
                        Supprimer
                      </button>
                      <button
                        onClick={() => handleSelectJobber(ele._id)}
                        className="border-2 mt-1 border-blue-200 bg-blue-500 text-white hover:bg-white hover:text-blue-500 p-2 rounded-xl"
                      >
                        Edit Solde
                      </button>
                    </tr>
                  ))}
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
