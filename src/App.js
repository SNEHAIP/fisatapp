import logo from './logo.svg';
import './App.css';
import AdddStudent from './components/AdddStudent';
import SearchStudent from './components/SearchStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AdddStudent/>}/>
      <Route path='/Search'element={<SearchStudent/>}/>
      <Route path='/View'element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
