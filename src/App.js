import { Navigate, Route, Routes } from 'react-router-dom';
import AllCharacters from './components/allCharacters/AllCharacters';
import DifferentCharacter from './components/differentCharacter/DifferentCharacter';
import './App.scss';
import Login from "./components/login/Login";

function App() {
  return (<div className="fullAppBlock">
      <Routes>
            {/*<Route path="/" element={<Navigate to="/characters"/>} replace/>*/}
            {/*<Route path="/characters" element={<AllCharacters/>}/>*/}
            {/*<Route path="/characters/:id" element={<DifferentCharacter/>}/>*/}
      </Routes>
      <Login/>
          </div>);
}

export default App;
