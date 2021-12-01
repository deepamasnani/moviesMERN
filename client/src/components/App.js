import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";

// import LandingPage2 from './views/NavBar/Sections/LandingPage2/LandingPage2';
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import MovieDetail from "./views/MovieDetail/MovieDetail"
import FavoritePage from "./views/FavoritePage/FavoritePage"
import SearchHelp from './views/NavBar/Sections/SearchChildren/SearchHelp';
// import SearchResult from './views/SearchResults/SearchResult';


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 72px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          {/* <Route exact path="/search" component={Auth(SearchHelp, null)} /> */}
          <Route exact path="/search" component={Auth(SearchHelp, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, null)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;