import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {

    return(
    <footer className="py-0" style={{backgroundColor:"#d8b52e"}}>
      <div className="container">
        <div className="row separated">
          <div className="col-lg-6 py-5">
            <div className="row">
              <div className="col-md-6">
                <h4 className="eyebrow mb-2">Sahra Çanta</h4>
                <ul className="list-group list-group-columns">
                  <li className="list-group-item"><Link style={{color: "black"}} to="/about">Hakkımızda</Link></li>
                  <li className="list-group-item"><Link style={{color: "black"}} to="/contact">İletişim</Link></li>
                  <li className="list-group-item"><Link style={{color: "black"}} to="/faq">Sorular</Link></li>
                  <li className="list-group-item"><Link style={{color: "black"}} to="/text">Kullanım</Link></li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="eyebrow mb-2">Hesap İşlemleri</h4>
                <ul className="list-group list-group-columns">
                  <li className="list-group-item"><Link style={{color: "black"}} to="/about">Hesabım</Link></li>
                  <li className="list-group-item"><Link style={{color: "black"}} to="/contact">Yeni Hesap Oluştur</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-5">
            <div className="row justify-content-end">
              <div className="col-lg-10">
                <h4 className="eyebrow mb-2"> Üyelik </h4>
                <div className="input-group">
                  <input type="text" className="form-control form-control-lg" 
                  placeholder="Email" aria-label="Subscribe" aria-describedby="button-addon2"/>
                  <div className="input-group-append">
                    <button className="btn btn-white" 
                    type="button" id="button-addon2">Üye Ol</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
              <div className="col-lg-10">
                <h4 className="eyebrow mb-2">Takip Et</h4>
                <nav className="nav nav-icons">
                  <Link className="nav-link" to='/'><i className="fab fa-facebook-square"></i></Link>
                  <Link className="nav-link" to='/'><i className="fab fa-twitter-square"></i></Link>
                  <Link className="nav-link" to='/'><i className="fab fa-youtube-square"></i></Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}
export default Footer;