
import './App.css';
import Header from './Pages/Header/Header';
// import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import LogIn from './Pages/LogIn/LogIn';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import Signup from './Pages/Signup/Signup';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/manage-items' element={<ManageItem></ManageItem>}></Route>
          <Route path='/add-items' element={<AddItems></AddItems>}></Route>
          <Route path='/my-items' element={<MyItems></MyItems>}></Route>
          <Route path='/log-in' element={<LogIn></LogIn>}></Route>
          <Route path='/sign-up' element={<Signup></Signup>}></Route>
          <Route path='/inventory/:id' element={
          <UpdateProduct></UpdateProduct>}
          ></Route>
      </Routes>

    </div>
  );
}

export default App;
