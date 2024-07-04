import React from 'react';
import AudiobookDetail from '../components/Audiobookdetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Audiobook = (props) => {
  return (
  <><nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ margin: 0, padding: 0 }}>
        <div className="container-fluid" style={{ maxWidth: 'auto', height: '80px', border: '1.5px solid', backgroundColor: '#EF4130' }}>
          <a className="navbar-brand" href="#" style={{ fontSize: '25px' }}>KUKU FM</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ paddingRight: '79px', paddingLeft: '70px', fontSize: '21px' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href=".src\home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="src\pages\audiobook.js">Details</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search audiobook & stories" aria-label="Search" style={{ width: '300px', font: '20px', border: '1.5px solid' }}></input>
              <button className="btn btn-outline-success" type="submit" style={{ width: '100px', backgroundColor: 'black' }}>Search</button>
            </form>
          </div>
        </div>
      </nav>


      </>
  )
};

export default Audiobook;
