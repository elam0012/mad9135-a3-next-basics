export default function Details({project}) {
  console.log("yasir", project)
  return(
    <div>
      <h1>Project Details</h1>
      <p>{project.userId}</p>
      <p>{project.id}</p>
      <p>{project.title}</p>
    </div>
  )
}

export async function getStaticPaths() {
const resp = await fetch("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=7/")
const data = await resp.json()

const paths = data.map((project) => {
  return{
    params: {id: project.id.toString()}
  }
})

return{
  paths,
  fallback: false
}
}

export async function getStaticProps(context) {
  const id = context.params.id
  const response = await fetch ("https://jsonplaceholder.typicode.com/albums?_start=0&_limit=7/" + id)
  const data = await response.json()

  if(!data) {
    return{
      notFound: true,
    }}

    return{
      props:{
        project: data[id-1]
      }
    }
}