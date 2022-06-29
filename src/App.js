import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Router from './Routes';
import GlobalStyle from './Styles/global';

function App() {
  return (
    <>
    <GlobalStyle />
    <ToastContainer />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
  );
}

export default App;
