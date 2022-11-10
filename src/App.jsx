// React module imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// SASS Import
import './App.scss';

//Component Imports
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Upload from './pages/Upload/Upload'

function App() {

	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/upload' element={<Upload />} />			
					<Route path='/video/:id' element={<Home />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;