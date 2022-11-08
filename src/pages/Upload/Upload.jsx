import uploadThumbnail from '../../assets/images/images/Upload-video-preview.jpg';

export default function Upload() {
	return (
		<section className='upload'>
			<div className='upload__page-title-wrapper'>
				<h1 className='upload__page-title'>Upload Video</h1>
			</div>
			<div className='upload__wrapper'>
				<form className='upload__form' action='submit'>
					<div className='upload__form-wrapper'>
						<div className='upload__video-section'>
							<p className='upload__label'>VIDEO THUMBNAIL</p>
							<img
								className='upload__thumbnail'
								src={uploadThumbnail}
								alt='Upload Video Thumbnail'
							/>
						</div>
						<div className='upload__details-wrapper'>
							<div className='upload__details'>
								<label
									className='upload__label'
									htmlFor='title'
								>
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
