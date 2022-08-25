// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {name, id, teamImageURL} = teamData

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="team-card">
          <img src={teamImageURL} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    </li>
  )
}

export default TeamCard
