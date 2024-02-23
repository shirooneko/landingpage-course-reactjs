import {Routes, Route} from 'react-router-dom'

import { NavbarComponent } from './components/NavbarComponent';
import { FooterComponent } from './components/FooterComponent';

import { Home } from './pages/Home';
import { Kelas } from './pages/Kelas';
import { Testimonial } from './pages/Testimonial';
import { SyaratKetentuan } from './pages/SyaratKetentuan';
import { Faq } from './pages/Faq';


function App() {
  return(
    <div>
      <NavbarComponent/>

      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/kelas' Component={Kelas} />
        <Route path='/testimonial' Component={Testimonial} />
        <Route path='/faq' Component={Faq} />
        <Route path='/syaratKetentuan' Component={SyaratKetentuan} />
      </Routes>

      <FooterComponent/>
    </div>

  );
}

export default App
