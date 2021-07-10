
import React from 'react';
import './css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import './App.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';

function App() {
  let data1=[{
                name:'flower cake', 
                pic:img1, 
                summary:'creamy cake designed in artistic flower ',
                price:'129'},
             {name:'Gems Cake', pic:img2, 
             summary:'Wonderful cake cherished by children', 
             price:'139'},
             {name:'rainbow cake', pic:img3,
             summary:'Fabulous cake with multiple flavour of raibow ', price:'149'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
             {name:'Black Forest', pic:img4, summary:'Yummy cake made up of chocolate and milk cream', price:'159'},
            ]
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </header>
      <content>
        <div className='welcome'>
          Welcome to our delicious, savoury, mouth-watering & award wining bakery items. 
          These bakery items have been curated for the modern and cosmopolitian individuals.
          Don't withhold yourselves from cherishing our relishing offering. Just dig out to our menu.
        </div >
        <menu>
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
    </div>
  );
}

export default App;
