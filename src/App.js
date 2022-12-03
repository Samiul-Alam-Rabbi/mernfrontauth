import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Mailer from './components/Mailer';
// import ForgetPassword from './components/ForgetPassword';
import NewSubmit from './components/NewSubmit';
import UserLists from './components/UserLists';
import PrivateRoute, { ProtectedRoute } from './components/Private/PrivateRoute';
import ErrorPage from './components/Private/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <Router>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route element={<PrivateRoute />}>
          <Route path='/userslist' element={<UserLists/>} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/otp" element={<NewSubmit/>} />
        <Route path="/forget" element={<Mailer/>} />
      </Route>
      <Route path='/*' element={<ErrorPage/>} />
      {/* <Route path="/forget" element={<ForgetPassword/>} /> */}
    </Routes>
  </Router>
}

export default App;
