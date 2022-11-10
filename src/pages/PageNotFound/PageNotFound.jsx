import gif from '../../assets/gifs/pageNotFound.gif'

export default function PageNotFound () {

    return(
        <>
        <section className='page-not-found'>
            <div className='page-not-found__wrapper'>
                <img className='page-not-found__img' src={gif} alt="404 - page not found"/>
            </div>
        </section>
        </>
    )
}