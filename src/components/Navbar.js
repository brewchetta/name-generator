import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

      <Link to="/mix-n-match">Mix and Match</Link>
      <Link to="/demonic">Demonic</Link>
      <Link to="/sci-fi-animal">Sci Fi Animal</Link>
      <Link to="/celtic">Celtic</Link>
      <Link to="/fantasy-folk">Fantasy Folk</Link>

    </div>
  )
}
