import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import {Routes, Route, useParams, Link, useNavigate} from "react-router-dom";

const HatsPAge = (props) => {
    const navigate = useNavigate();
    console.log(props)
    const { id } = useParams();
    return (
    <div>
        <Link to='/'>go home</Link>
        <button onClick={()=> navigate('/')}>ddddd</button>
        <h1>Hats Page {id}</h1>
    </div>

    )};

function App() {

    return (

        <div className="App">

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hats" element={<HatsPAge />} />
            </Routes>

        </div>
    );
}

export default App;
