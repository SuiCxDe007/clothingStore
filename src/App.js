import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import './App.css';
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from '../src/components/header/header.component'
import LoginnSigninComponent from "./pages/LoginnSignUp/LoginnSignin.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


class App extends React.Component {
    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                })
            }
            this.setState({currentUser: userAuth})
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
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
