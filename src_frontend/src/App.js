
import React from 'react';
import './css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
import './App.css';
import img0 from './img/img0.png';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

function App() {
  let name_site='Vikas Bakery'
  let data1=[{
                name:'flower cake', 
                pic:img1, 
                summary:'Creamy cake caressed by artistic flower ',
                price:'129'},
             {name:'Gems Cake', pic:img2, 
             summary:'Wonderful cake , best for children ', 
             price:'139'},
             {name:'rainbow cake', pic:img3,
             summary:'Fabulous cake with multiple flavour of rainbow ', price:'149'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Designer Cake', pic:img0, summary:' Designer Cake for special occasion', price:'159'},
            ]
  return (
    <div className="App">
      <header className="App-header sticky-nav">
        <Navbar collapseOnSelect bg="select" variant='light' expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav variant="tabs" className="nav-link-select">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">{name_site}</Navbar.Brand>
        </Navbar>
      </header>
      <content>
        <div className='welcome' id='home'>
          Welcome to {name_site}, serving delicious, savoury, mouth-watering & award wining bakery items. 
          These bakery items have been curated for the modern and cosmopolitian individuals.
          Don't withhold yourselves from cherishing our relishing offering. Just head out to our menu.
        </div >
        <menu id='menu'>
          <div id="line"><hr /></div>
          <div className="menu-header">
            Menu Items
          </div>
          <div id="line"><hr /></div>
          { 
            data1.map((element,index) => {
              return (<div key={index.toString()} className='item'>
                        <div className='img'>
                          <img src={element.pic} alt={element.name} />
                        </div>
                        <div className='details'>
                          <div className='title'>{element.name}</div>
                          <div className='summary'>{element.summary}</div>
                          <div className='price'>Rs : {element.price} /-</div>
                        </div>
                      </div> )
                          })
          }
        </menu>
      </content>
      <footer>
        <div>
          Contact No: +91-9999911111
        </div>
      </footer>
    </div>
  );
}

export default App;
