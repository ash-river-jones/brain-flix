import logo from '../../assets/images/logo/logo.svg';
import avatar from '../../assets/images/images/Mohan-muruge.jpg';
import './Header.scss';

function Header() {
	return (
		<section className='header'>
			<div className='header__logo-section'>
				<img className='header__logo' src={logo} alt='logo' />
			</div>
			<div className='header__search'>
				<input
					className='header__search-bar'
					placeholder='Search'
				></input>
				<img src={avatar} alt='avatar' className='header__avatar' />
			</div>
			<div className='header__upload-bar'>
				<button className='header__upload-btn' type='submit'>
					UPLOAD
				</button>
			</div>
		</section>
	);
}

export default Header;
