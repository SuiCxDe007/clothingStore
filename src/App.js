import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from '../src/components/header/header.component'
import LoginnSigninComponent from "./pages/LoginnSignUp/LoginnSignin.component";
import { auth} from "./firebase/firebase.utils";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount () {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({currentUser : user})
            console.log(user)
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (

            <div className="App">
                <Header currentUser = {this.state.currentUser}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/shop" element={<ShopPage/>}/>
                    <Route path="/signin" element={<LoginnSigninComponent/>}/>
                </Routes>

            </div>
        );
    }


}

export default App;
