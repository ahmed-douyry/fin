import logo from './logo.svg';
import './App.css';
import { UserList } from './UserListe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Edit } from './Edit';
import { Add } from './Add';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserList />} />
      <Route path='/modifier/:id' element={<Edit />} />
      <Route path='/add' element={<Add />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
