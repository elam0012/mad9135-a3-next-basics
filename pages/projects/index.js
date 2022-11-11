import Link from "next/link"

export default function Projects({projects}) {
  return(
    <div>
      <h1>Projects List</h1>
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={"/projects/" + project.id}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/albums?_start=0&_limit=7')
  const data = await resp.json()

  if(!data) {
    return {
      notFound: true,
    }
  }
    return{
      props:{
        projects: data // will be passed to the page components as props
      }
    }
  }