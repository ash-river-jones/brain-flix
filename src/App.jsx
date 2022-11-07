import './App.scss';

//Component Imports
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'


//JSON files

function App() {

	return (
		<div className='App'>
			<Header />
			{/* <Home /> */}
			<Upload />
		</div>
	);
}

export default App;