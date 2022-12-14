import Image from "next/image";
import {useTeam} from "../../Context/teamContext"

export default function Team() {
  const [team] = useTeam();
  console.log(team)
  return(
    <div>
      <h1>Team Members</h1>
      <ul className="card-container">
        {team.map((member) => (
          <li key={member.id} className="card">
            <div className="card-image">
            <Image
              src= {member.avatar}
              height={150}
              width={150}
              alt="Profile Pic"/>
            </div>
            <div className="card-text">
              <p>Name: {member.name}</p>
              <p>Age: {member.age}</p>
              <p>Gender: {member.gender}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}