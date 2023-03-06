import { useState, useEffect } from "react"
import wretch from 'https://cdn.skypack.dev/wretch'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Loading from '../components/Loading'


const Stars = () => {
    
    return (
        <div>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
        </div>
    )
}


const Avis = () => {
    const [nom, setNom] = useState("")
    const [title, setTitle] = useState("")
    const [avis, setAvis] = useState("")
    const [backendData, setBackenData] = useState([])
    const [ display, setDisplay ] = useState("hidden")

    
    useEffect(() => {
        fetch("/avis").then(
            response => response.json()
            ).then(
                data => {
                    setBackenData(data)
                }
                )
                
            }, [])
            
            
    const handelSubmit = (event) => {
        event.preventDefault();
        wretch('/api/submitavis')
        .post({
        "nom": nom,
        "title": title,
        "avis": avis
        })
        handelClose()

    }

    const handelChange = (event) => {
        if (event.target.placeholder === "nom") {
            setNom(event.target.value)
        }else if (event.target.placeholder === "avis") {
            setAvis(event.target.value)
        }else if (event.target.placeholder === "title") {
            setTitle(event.target.value)
        }
    }


    const handelOpen = () => {
        setDisplay("inline")
    }
    const handelClose = () => {
        setDisplay("hidden")
    }


    return ( 
        <div className="avis">
            {/** Start Add Avis */}
            
    <div className={display+ " modal fade fixed top-20 left-3 md:left-1/3 w-84 md:96 outline-none overflow-x-hidden overflow-y-auto"}
            id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog relative  pointer-events-none">
    <div
        className="modal-content border-none shadow-lg relative pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div
        className="modal-header p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Ajoutez un avis</h5>
        </div>
        <div className="p-4">
            <form className="flex flex-col space-y-1" onSubmit={handelSubmit}>
                <label htmlFor="Note">Note </label>
                <Stars/>
                <label htmlFor="Nom">Nom</label>
                <input className="border-2 border-sky-200 bg-gray-100 p-2 rounded-lg w-72 focus:outline-sky-600" type="text" placeholder="nom" onChange={handelChange}/>
                <label htmlFor="Title-Avis" >Titre de l'Avis</label>
                <input htmlFor="title" className="border-2 border-sky-200 bg-gray-100 p-2 rounded-lg w-72 focus:outline-sky-600" type="text" placeholder="title" onChange={handelChange}/>
                <label htmlFor="Avis">Avis</label>
                <textarea className="border-2 border-sky-200 bg-gray-100 rounded-lg p-3 w-72 h-60 focus:outline-sky-600"  placeholder="avis" onChange={handelChange} ></textarea>
                
            </form>
        
        </div>
        <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button onClick={handelClose} type="button" className="px-6
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
            ease-in-out" data-bs-dismiss="modal">Close</button>
        <button onClick={handelSubmit} type="button" className="px-6
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
            ml-1">Ajouter</button>
        </div>
    </div>
    </div>
            </div>
            {/** End Add Avis */}
            <div className="head ">
                <div className="flex justify-center h-screen items-start md:items-center">
                    <button onClick={handelOpen} className="bg-sky-600 p-3 rounded-xl text-white ml-2 mr-2 mt-20 shadow-2xl hover:bg-sky-500 ">Ajoutez un avis</button>
                    <a href="#avis-c" className="bg-sky-600 p-3 rounded-xl text-white ml-2 mr-2 mt-20 shadow-2xl hover:bg-sky-500 ">Lire les avis</a>
                </div>                           
            </div>
            <div id="avis-c" className="avis-clients flex">
                
                    {(typeof backendData == 'undefined') ? (
                        <div>
                            <Loading />
                        </div>
                    ): (
                        backendData.map((element, id) => (
                            <div >
                                <div key={id} className="w-80 h-56 p-4 shadow-2xl m-8">
                                <Stars />
                                <h1>
                                    {element.nom}
                                </h1>
                                <h1 className="text-xl font-bold">
                                    {element.title}
                                </h1>
                                <br />
                                <p>
                                {element.avis}
                                </p>
                                </div>
                            </div>
                        
                        ))
                    )}
                
            </div>
            
        </div>
    );
}

export default Avis;