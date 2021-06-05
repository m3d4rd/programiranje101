import { Link } from 'react-router-dom'

const Header = () => {
  const movieCategories = [
    { name: 'Animacija' },
    { name: 'Akcijski' },
    { name: 'Western' },
    { name: 'Komedija' },
  ]

  return (
  <div className='header'>
    <h1 className='header-text'><a href='/index.html'>filmi.si</a></h1>
    <div className='main-menu'>
      {movieCategories.map((category) => {
        return <div className='main-menu-item'><a href=''>{category.name}</a></div>
      })}
    </div>

    <div className='user-menu'>
      <Link to="/prijava">
      <div className='main-menu-item'>
          <span>Prijava</span>
      </div>
      </Link>
    </div>
  </div>
  )
}

export default Header
