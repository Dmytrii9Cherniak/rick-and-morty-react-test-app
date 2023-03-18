import './App.scss';
import AllCharacters from "./components/allCharacters/AllCharacters";
import {Navigate, Route, Routes} from "react-router-dom";
import DifferentCharacter from "./components/differentCharacter/DifferentCharacter";

function App() {
  return (<div className="fullAppBlock">
      <Routes>
            <Route path="/" element={<Navigate to="/characters"/>} replace/>
            <Route path="/characters" element={<AllCharacters/>}/>
            <Route path="/characters/:id" element={<DifferentCharacter/>}/>
      </Routes>
          </div>);
}

export default App;
