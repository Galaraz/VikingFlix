import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;