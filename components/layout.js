import Header from './header'
import Footer from './footer'
import Navbar from './navbar'

function Layout(props) {
  return (
      <div className='content'>
        <div className='header-nav'>
          <Header/>
          <Navbar/>
        </div>
          {props.children}
        <Footer/>
      </div>
  );
}

export default Layout;