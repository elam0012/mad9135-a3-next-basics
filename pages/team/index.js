
import Image from "next/image";

export default function Team({team}) {
  return(
    <div>
      <h1>Team Members</h1>
      <ul>
        {team.map((member) => (
          <div>
            <p>{member.id}</p>
            <p>{member.age}</p>
            <p>{member.gender}</p>
            <Image
              src= {member.avatar}
              height={150}
              width={150}
              alt="Profile Pic"/>
          </div>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/team");
  const data = await resp.json();
  return {
    props: {
      team: data
    },
  };
}