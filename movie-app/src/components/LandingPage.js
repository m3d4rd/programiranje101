import './style.css';
import Header from './Header'
import Footer from './Footer'

const LandingPage = () => {

  const movies= [
    { id: 1, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 2, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 3, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 4, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 5, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 6, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 7, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 8, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
    { id: 9, name: 'Titanic', imageUrl:'https://www.joblo.com/assets/images/oldsite/posters/images/full/1997-titanic-poster2.jpg' },
  ]

  return (
    <div className="container">
      <Header />
      <div className="search-bar">
        <div className="search-container">
          <input type="search" placeholder="Vpiši naslov filma" />
        </div>
      </div>
      <div className="movie-list">
        {
          movies.map((movie) => {
            return <img className="movie-list-item"
                 src={movie.imageUrl} ></img>
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage
