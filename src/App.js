import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AjoutePrestataire from './pages/AjoutePrestataire'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import Avis from './pages/Avis'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Admin from './pages/Admin'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import PrivateRouter from './components/PrivateRouter'
import NoAccess from './pages/NoAccess'
import AdminRouter from './components/AdminRouter'
import store from './redux/store';
import { Logout, setUser } from './redux/actions/authActions'
import jwt_decode from 'jwt-decode'
import ForceRedirect from './components/ForceRedirect'
import { useSelector } from 'react-redux'
import { setAuth } from './util/setAuth'
import DemanderService from './pages/DemanderService'
import Electriciens from './pages/Electriciens'
import Peinture from './pages/Peinture'
import Jardinage from './pages/Jardinage'
import Users from './pages/Users'
import SettingUser from './pages/SettingUser'
import Plombie from './pages/Plombie'
import Menage from './pages/Ménage'
import ShareApp from './components/ShareApp'
import Chat from './pages/Chat'


if (window.localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt)
  store.dispatch(setUser(decode)) 
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000
  if (decode.exp > currentDate) {
    store.dispatch(Logout(decode))
  }
}

function App() {
  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    firstname: auth.user.name,
    lastname: auth.user.lastname,
    email: auth.user.email,
    role: auth.user.role
  }
  document.title = 'Click Brico votre platforme pour Trouvez le prestataire idéal pour tous les services'
  return (
    <BrowserRouter>
    <div className="App">
      <Nav user={user} />
      <ShareApp/>




      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={        
        <AdminRouter user={user}>
          <Admin/>
        </AdminRouter>}/>
        <Route path='/profile' element={
          <PrivateRouter user={user}>
          <Profile/>
        </PrivateRouter>}/>
        <Route path='/electriciens' element={
        <PrivateRouter user={user}>
          <Electriciens />
        </PrivateRouter>}/>
        <Route path='/peintres' element={
        <PrivateRouter user={user}>
          <Peinture />
        </PrivateRouter>}/>
        <Route path='/jardinier' element={
        <PrivateRouter user={user}>
          <Jardinage />
        </PrivateRouter>}/>
        <Route path='/plombie' element={
        <PrivateRouter user={user}>
          <Plombie />
        </PrivateRouter>}/>
        <Route path='/menage' element={
        <PrivateRouter user={user}>
          <Menage />
        </PrivateRouter>}/>
        <Route path='/chat' element={
        <PrivateRouter user={user}>
          <Chat />
        </PrivateRouter>}/>
        <Route path='demanderservice' element={<DemanderService/>}/>
        <Route path='ajoutePrestataire' element={<AjoutePrestataire/>}/>
        <Route path='/login' element={
        <ForceRedirect user={user}>
          <Connexion/>
        </ForceRedirect>}/>
        <Route path='/register' element={
        <ForceRedirect user={user}>
          <Inscription/>
        </ForceRedirect>}/>
        <Route path='avis' element={<Avis/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/noaccess' element={<NoAccess/>}/>
        {/* <Route path='/utilisateurs' element={<Users/>} /> */}
        <Route path='/utilisateurs' element={
        <PrivateRouter user={user}>
          <Users/>
        </PrivateRouter>}/>
        <Route path='/setting-user' element={
        <PrivateRouter user={user}>
          <SettingUser/>
        </PrivateRouter>}/>
      </Routes>
      
      <Footer />

    </div>
    </BrowserRouter>
  )
}

export default App
