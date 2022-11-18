import uploadThumbnail from '../../assets/images/images/Upload-video-preview.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const api_url =  process.env.REACT_APP_BACKEND_SERVER_API_URL || '';


export default function Upload() {
	const navigate = useNavigate();

	const handelSubmit= (event) => {
		event.preventDefault()
		const newVideo = {
			title: event.target.title.value,
			desc: event.target.desc.value
		}
		if(newVideo.title && newVideo.desc){
			alert("Your video has been published to BrainFlix")
			event.target.reset()
			axios
				.post(`${api_url}/videos`,newVideo)
				.then(()=>{
					navigate('/')
				})
		}

	}

	return (
		<section className='upload'>
			<div className='upload__page-title-wrapper'>
				<h1 className='upload__page-title'>Upload Video</h1>
			</div>
			<div className='upload__wrapper'>
				<form className='upload__form' action='submit' onSubmit={handelSubmit}>
					<div className='upload__form-wrapper'>
						<div className='upload__video-section'>
							<p className='upload__label'>VIDEO THUMBNAIL</p>
							<img className='upload__thumbnail' src={uploadThumbnail} alt='Upload Video Thumbnail' />
						</div>
						<div className='upload__details-wrapper'>
							<div className='upload__details'>
								<label className='upload__label' htmlFor='title'>
									TITLE YOUR VIDEO
								</label>
								<input
									className='upload__title'
									name='title'
									id='title'
									placeholder='Add a title to your video'
									type='text'
								/>
							</div>
							<div className='upload__details'>
								<label className='upload__label' htmlFor='desc'>
									ADD A VIDEO DESCRIPTION
								</label>
								<textarea
									className='upload__desc'
									name='desc'
									id='desc'
									placeholder='Add a description to your video'
									cols='30'
									rows='5'
								></textarea>
							</div>
						</div>
					</div>
					<div className='upload__btn-section'>
						<div className='upload__btn-wrapper'>
								<button
									className='upload__btn-publish'
									type='submit'
								>
									PUBLISH
								</button>
							<button className='upload__btn-cancel' type='reset'>
								CANCEL
							</button>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
}
