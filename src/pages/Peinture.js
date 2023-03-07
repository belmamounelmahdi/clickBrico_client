/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API_URL from "../config";

function Peinture() {
  const auth = useSelector((state) => state.auth);
  const user = {
    name: auth.user.name,
    email: auth.user.email,
  };
  const [photoUrl, setPhotoUrl] = useState("");
  const [jobberProfiles, setJobberProfiles] = useState([]);
  const [selectedProviderEmail, setSelectedProviderEmail] = useState("");
  const [display, setDisplay] = useState("hidden");

  const sendMessage = async (message) => {
    const response = await fetch(`${API_URL}/send-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: user.name,
        recipient: selectedProviderEmail,
        body: message,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const handelClose = () => {
    setDisplay("hidden");
  };

  const handleSelectProvider = (email) => {
    setSelectedProviderEmail(email);
    setDisplay();
    console.log(selectedProviderEmail);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}/service-peinture`)
      .then((res) => {
        setJobberProfiles(res.data);
        if (res.data.profile.photo) {
          const photo = new Blob([res.data.profile.photo.data], {
            type: res.data.profile.photo.contentType,
          });
          const photoUrl = URL.createObjectURL(photo);
          setPhotoUrl(photoUrl);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(jobberProfiles);
  return (
    <div>
      <h1>Nos peintre sont à votre service</h1>

      <div className="flex h-screen">
        {jobberProfiles.map((ele, index) => (
          <div key={index} className="w-80 h-64 p-4 shadow-2xl m-8">
            <img
              className="w-24 h-24"
              src={
                ele.profile.photo &&
                `data:${
                  ele.profile.photo.contentType
                };base64,${ele.profile.photo.data.toString("base64")}`
              }
              alt="Profile Photo"
            />

            <h1>{ele.name}</h1>
            <h1>{ele.service}</h1>
            <h1>{ele.profile.city}</h1>
            <h1>{ele.profile.address}</h1>
            <h1 className="hidden">{ele.email}</h1>
            <button
              onClick={() => handleSelectProvider(ele.email)}
              className="bg-sky-600 hover:bg-sky-500 hidden md:inline p-2 text-white"
            >
              Envoyer un message
            </button>
          </div>
        ))}
      </div>
      <div
        className={
          display +
          " modal-dialog fade fixed h-screen right-0 top-20 duration-500 outline-none overflow-x-hidden overflow-y-auto"
        }
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative  pointer-events-none">
          <div className="modal-content border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Envoyer un message
              </h5>
            </div>
            <div className="p-4">
              <form
                className="flex flex-col space-y-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(e.target.message.value);
                  e.target.message.value = "";
                  console.log();
                }}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  className="border-2 border-sky-200 bg-gray-100 rounded-lg p-3 w-72 h-60 focus:outline-sky-600"
                  placeholder="Bonjour, est ce que ..."
                ></textarea>
                <input
                  className="px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out
            ml-1"
                  type="submit"
                  value="Envoyer"
                />
              </form>
            </div>
            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                onClick={handelClose}
                type="button"
                className="px-6
            py-2.5
            bg-purple-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-purple-700 hover:shadow-lg
            focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-purple-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Peinture;
