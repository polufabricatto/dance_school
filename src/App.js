import "./App.css";
import NavbarComponent from "./header/Header";
import Directions from "./directions/Directions";
import Main from "./main/Main";
import Trainers from "./trainers/Trainers";
import Gyms from "./gyms/Gyms";
import Footer from "./Components/Footer";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<NavbarComponent />
			<Router>
				<Switch>
					<Route path="/main">
						<Main />
					</Route>

					<Route path="/trainers">
						<Trainers />
					</Route>

					<Route path="/gyms">
						<Gyms />
					</Route>

					<Route path="/directions">
						<Directions />
					</Route>

					<Route path="*">
						<Redirect to="/Main" push={true} />
					</Route>
				</Switch>
			</Router>
			<Footer/>
		</div>
	);
};

export default App;
