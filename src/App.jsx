import 'bootstrap/dist/css/bootstrap.css';
import 'milligram/dist/milligram.css';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about.jsx';
import Home from './pages/home.jsx';
import Menu from './pages/menu.jsx';
import NotFound from './pages/notfound.jsx';
import Product from './pages/product.jsx';
import Profile from './pages/profile.jsx'; // Correct the import path

function App() {
  let [formObj, setFormObj] = useState({
    name: '',
    email: '',
    city: '',
    gender: '',
  });

  const inputOnchange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formObj);
    alert(JSON.stringify(formObj));
  };

  function Person(name, email, gender, city) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.city = city;
    this.about = function () {
      return `I'm ${this.name}, my email is ${this.email} and gender is ${this.gender}`;
    };
  }

  let person1 = new Person(formObj.name, formObj.email, formObj.gender, formObj.city);

  class PersonAbout {
    constructor(name, email, gender, city) {
      this.name = name;
      this.email = email;
      this.gender = gender;
      this.city = city;
    }

    about() {
      console.log(`I'm ${this.name}, I'm from ${this.city} and my gender is ${this.gender}`);
    }
  }

  let about1 = new PersonAbout(formObj.name, formObj.email, formObj.gender, formObj.city);

  let [data, setData] = useState();
  useEffect(() => {
    fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

  let [data1, setData1] = useState();
  useEffect(() => {
    (async () => {
      let response = await fetch('https://dummyjson.com/products/1');
      let json = await response.json();
      setData1(json);
    })();
  }, []);

  return (


  
  
    

    <div className="container">


      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/profile/:id/:name" element={<Profile/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </HashRouter>



      <div>
        <menu/>
      </div>

      <div>
        <h1>Fetch data using Promise</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>

      <div className="p-2 pb-3">
        <h1>Fetching data using async/await</h1>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
      </div>

      <div className="border w-50 m-auto border-2 p-3 mb-5 shadow-lg">
        <form onSubmit={formSubmit}>
          <p className="text-center">Information Form</p>
          <input
            onChange={(e) => inputOnchange('name', e.target.value)}
            value={formObj.name}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => inputOnchange('email', e.target.value)}
            value={formObj.email}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <select
            onChange={(e) => inputOnchange('city', e.target.value)}
            value={formObj.city}
            name="city"
          >
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Barisal">Barisal</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Gazipur">Gazipur</option>
          </select>

          <input
            onChange={() => inputOnchange('gender', 'Male')}
            checked={formObj.gender === 'Male'}
            type="radio"
            name="gender"
          />
          Male
          <input
            onChange={() => inputOnchange('gender', 'Female')}
            checked={formObj.gender === 'Female'}
            type="radio"
            name="gender"
          />
          Female
          <input
            onChange={() => inputOnchange('gender', 'Other')}
            checked={formObj.gender === 'Other'}
            type="radio"
            name="gender"
          />
          Other

          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Form Information</h5>
            <p className="card-text">Name: {formObj.name}</p>
            <p className="card-text">Email: {formObj.email}</p>
            <p className="card-text">City: {formObj.city}</p>
            <p className="card-text">Gender: {formObj.gender}</p>
          </div>
        </div>
      </div>

      <div className="card m-auto w-50 shadow-lg bg-dark text-white">
        <div className="card-body list-group">
          <h5 className="card-title bg-primary text-center">{person1.name}'s Information</h5>
          <div className="card-body">
            <p><strong>Name: </strong> {person1.name}</p>
            <p><strong>City:</strong> {person1.city}</p>
            <p><strong>Email: </strong>{person1.email}</p>
            <p><strong>Gender: </strong>{person1.gender}</p>
            <button className="btn btn-primary btn-lg" onClick={() => alert(person1.about())}>
              About
            </button>
          </div>
        </div>
      </div>

      <div className="card m-auto w-50 shadow-lg mt-3 bg-dark text-white">
        <div className="card-body list-group">
          <h5 className="card-title bg-primary text-center">{about1.name}'s Information</h5>
          <div className="card-body">
            <p><strong>Name: </strong> {about1.name}</p>
            <p><strong>City:</strong> {about1.city}</p>
            <p><strong>Email: </strong>{about1.email}</p>
            <p><strong>Gender: </strong>{about1.gender}</p>
            <button className="btn btn-primary btn-lg" onClick={() => about1.about()}>
              About
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
