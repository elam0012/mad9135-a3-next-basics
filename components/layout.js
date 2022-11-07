import Header from './header'
import Footer from './footer'
import Navbar from './navbar';

function Layout(props) {
  return (
    <div>
      <Header/>
      <Navbar/>
        {props.children}
      <Footer/>
    </div>
  );
}

export default Layout;