import logo from '../../assets/images/logo/logo.svg';
import avatar from '../../assets/images/images/Mohan-muruge.jpg';
import './PageHeader.scss';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='header__wrapper'>
			<section className='header'>
				<div className='header__logo-section'>
					<Link to='/'>
						<img className='header__logo' src={logo} alt='logo' />
					</Link>
				</div>
				<div className='header__search-upload-wrapper'>
					<div className='header__search'>
						<input className='header__search-bar' placeholder='Search'></input>
						<img src={avatar} alt='avatar' className='header__avatar header__avatar--mobile' />
					</div>
					<div className='header__upload-bar'>
						<Link to='/upload'>
							<button className='header__upload-btn' type='#'>
								UPLOAD
							</button>
						</Link>
						<img src={avatar} alt='avatar' className='header__avatar header__avatar--tablet' />
					</div>
				</div>
			</section>
		</div>
	);
}

export default Header;
