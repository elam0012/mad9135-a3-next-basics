import '../styles/globals.css'
import Layout from '../components/layout'
import {useTeam, TeamProvider} from "../Context/teamContext"

export default function MyApp({ Component, pageProps }) {
  return (
    <TeamProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TeamProvider>
    ) 
}
