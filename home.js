import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AudiobookList from '../components/Audiobooklist';
import Filter from '../components/filter';
import { Card } from 'react-bootstrap';
import poster from '../poster.jpg';
import kaku from '../kaku.webp';
import kuku from '../kuku.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import review from '../components/reviewform';
import { Link } from 'react-router-dom';




const Home = () => {
  const detail = [
    {
        "title": "IIT Zombay",
        "author": "IIT guy",
        "Gener": "Horror",
        "image": "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/d1789022269a447b980e43d123e38e0c.jpeg",
        "rating": 4.2,
        "Discription": "IIT Bombay ke campus me macha maut ka toofan. Insaan banne lage adamkhor Zombies. Zinda lashe badhne lagi Pawai lake ki taraf jahan se milta hai pure shahar ko pine ka pani. Jahan students bachane me lage hai apni jaan wahi puri Mumbai banne wali hai Kabristaan. Kaun Rokega in zinda murdo ko? ",
        "reviews": [
            {"review": "Great story", "rating": 4.5},
            {"review": "Soo good! its feelings, feel in the real", "rating": 4},
            {"review": "Khtarnaak", "rating": 3.5},
            {"review": "Bhayanak", "rating": 5}
        ]
    },
    {
        "title": "Shree Krishna",
        "author": "Anshu",
        "Gener": "Inspiration",
        "image": "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/50309a75821b494a95415c50514bfa7a.png",
        "rating": 4.6,
        "Discription": "Rishto ke tootne ka gam sabse gehra hota hai, iss liye hum chahte hai ki koi bhi rishta ho, life partner ka, dosti ka, ghar parivaar ka, vo hamesha majbooti se juda rahe. Or yeh bilkul ho sakta hai agar hum Shree Krishna ke rishte nibhane ke un tareeko ko apnaye, jo iss audio me hai. Aaye sunte hai Shree Krishna ",
        "reviews": [
            {"review": "Helpful", "rating": 5},
            {"review": "Great audio", "rating": 4.8},
            {"review": "Bohoot acche se rishto ko samjaya hai", "rating": 4.6},
            {"review": "Superb", "rating": 4}
        ]
    },
    {
        "title": "Indian Germ murder",
        "author": "Virat",
        "Gener": "Crime",
        "image": "https://images.cdn.kukufm.com/w:1920/f:webp/q:75/https://images.cdn.kukufm.com/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/6bf4bb421c5a4b47b2bc83be0b2ec298.jpeg",
        "rating": 4.4,
        "Discription": "Saal 1993 mai kolkata mai hui ek aisi hatya jisne desh hi nahi balki puri duniya ko chauka diya. Hatya jiske liye pahali baar istemaal kiya gaya ek biological weapon. Kiski hui thi hatya or police ne kaise suljaya yeh anokha case? Aaye sunte hai Indian Germ murder story. ",
        "reviews": [
            {"review": "Dil dahlane wali story!!", "rating": 4},
            {"review": "Great story", "rating": 4.5},
            {"review": "superb:)", "rating": 4},
            {"review": "Bohoot acchi kahani", "rating": 5}
        ]
    },
    {
        "title": "Maaya",
        "author": "Aman Pal",
        "Gener": "sensational",
        "image": "https://images.cdn.kukufm.com/w:384/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/ce56648d38b94ffa93f8175884cc7a31_landscape_895.png",
        "rating": 4.4,
        "Discription": "Ek normal workshop mai kaam karne wali Maaya ki zindagi uss wa badal jati hai jab usse milta hai ek naya PA. Iss PA ke pane ke liye ek badi MNC kisi bhi haad tak ja sakti hai, par iss PA ki madad se Maaya aane wali tbahi ko rok sakti hai. Kya Maaya iss duniya ko bacha paegi? Jaane k liye sunye, Maaya",
        "reviews": [
            {"review": "Bohot acche episode hai", "rating": 5},
            {"review": "Great", "rating": 4},
            {"review": "Nice story!!", "rating": 4.6},
            {"review": "Next episode kab??", "rating": 4}
        ]
    },
    {
        "title": "Hunter",
        "author": "Kaushik Roy",
        "Gener": "Crime",
        "image": "https://images.cdn.kukufm.com/w:384/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/90014047a1264b5099bcaab608861790_landscape_227.png",
        "rating": 4, 
        "Discription": "Mumbai me garam hai drugs or crime ka bazaar. Bollywood ke sitare bhi iss dhande mai hai phase. Yeh kahani hai ek brave crime branch officer ki, jo iss mystery ko suljane nikla hai, kon hai yeh hunter? Joh kanoon todkar ker raha kanoon ki hifazat. Kya officer Akriya iss shikari tak pahuch payega?",
        "reviews": [
            {"review": "not that intresting", "rating": 3},
            {"review": "lpve it", "rating": 4},
            {"review": "Superb story!!", "rating": 5},
            {"review": "new episode fast", "rating": 4}
        ]
    },   

]
  const [audiobooks, setAudiobooks] = useState([]);
  const [filteredAudiobooks, setFilteredAudiobooks] = useState([]);
  const [filters, setFilters] = useState({ genre: '', author: '' });

  useEffect(() => {
    axios.get('/api/audiobooks')
      .then(response => {
        setAudiobooks(response.data);
        setFilteredAudiobooks(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    setFilteredAudiobooks(audiobooks.filter(audiobook => {
      return (filters.genre === '' || audiobook.genre === filters.genre) &&
             (filters.author === '' || audiobook.author === filters.author);
    }));
  }, [filters, audiobooks]);

  const handleFilterChange = (type, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
  };

  return (
    <> 

<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ margin: 0, padding: 0 , scrollBehavior: 'unset', position: 'static'}}>
  <div className="container-fluid" style={{maxWidth: 'auto' ,height: '80px', border:'1.5px solid', backgroundColor: '#EF4130'}}>
    <a className="navbar-brand" href="#" style={{fontSize: '25px'}}>KUKU FM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{paddingRight: '79px', paddingLeft: '70px', fontSize: '21px'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="src\pages\home.js">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="src\pages\audiobook.js">Details</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filter
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="./filter">Genre</a></li>
            <li><a className="dropdown-item" href="./filter">Author</a></li>
            <li><a className="dropdown-item" href="./filter">Rating</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search audiobook & stories" aria-label="Search" style={{width: '300px', font: '20px', border: '1.5px solid'}}></input>
        <button className="btn btn-outline-success" type="submit" style={{width: '100px', backgroundColor: 'lightblue'}}>Search</button>
      </form>
    </div>
  </div>
</nav>

<div id="carouselExampleIndicators" className="carousel slide" style={{margin:'10px', height: '500px', border: '3px solid', marginTop: '20px'}}data-bs-ride = "carousel" data-bs-interval ="15000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a href='./audiobook'><img src='https://images.cdn.kukufm.com/w:384/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/90014047a1264b5099bcaab608861790_landscape_227.png' className="d-block w-100" alt="..." style={{height: '495px'}}></img></a>
    </div>
    <div className="carousel-item">
      <a href='audiobook'><img src='https://images.cdn.kukufm.com/w:384/f:webp/q:75/https://images.cdn.kukufm.com/f:webp/https://s3.ap-south-1.amazonaws.com/kukufm/channel_icons/ce56648d38b94ffa93f8175884cc7a31_landscape_895.png' className="d-block w-100" alt="..." style={{height: '495px'}}></img></a>    
    </div>
    <div className="carousel-item">
      <a href='audiobook'><img src={kaku} className="d-block w-100" alt="..." style={{height: '495px'}}></img></a>
    </div>
    <div className="carousel-item">
      <a href='audiobook'><img src={kuku} className="d-block w-100" alt="..." style={{height: '495px'}}></img></a>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="card" style={{margin: '20px',  flexDirection: 'row', borderColor: 'white', borderRadius: '10px'}}>
{
  detail.map((audbook, index) => {
    return < div style={{flexDirection: 'column', border: '2px solid', width: '18rem', marginLeft: '10px'}}>
      {/* <a href='./audiobook'><img src= {audbook.image} className="card-img-top" alt="..." style={{height: '20rem'}}></img></a> */}
      <Link details = {audbook}
      to={{ pathname: '/audDetail', state: { audiobook: audbook } }}>
                <img src={audbook.image} className="card-img-top" alt="..." style={{ height: '20rem' }} />
              </Link>
        <div className="card-body" >
          <h5 className="card-title">{audbook.title}</h5>
          <p className="card-text">{audbook.Discription}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Title: {audbook.title}</li>
          <li className="list-group-item">Author: {audbook.author}</li>
          <li className="list-group-item">Rating: {audbook.rating}⭐</li>
          {/* <li className="list-group-item">Review: {audbook.reviews}</li> */}
        </ul>
  </div>
  })
}
</div>
</>

  );
};

export default Home;
