import { Navigate, Route, Routes } from 'react-router-dom';
import { RequireAuth } from './high_order_component/RequireAuth';
import AllCharacters from './components/allCharacters/AllCharacters';
import DifferentCharacter from './components/differentCharacter/DifferentCharacter';
import Login from './components/login/Login';
import './App.scss';

function App() {
  return (<div className="fullAppBlock">
      <Routes>
          <Route path="/characters" element={
              <RequireAuth>
                  <AllCharacters/>
              </RequireAuth>
          }/>
          <Route path="/characters/:id" element={
              <RequireAuth>
                  <DifferentCharacter/>
              </RequireAuth>
          }/>
            <Route path="/" element={<Navigate to="/login"/>} replace/>
            <Route path="/login" element={<Login/>}/>
      </Routes>
          </div>);
}

export default App;
