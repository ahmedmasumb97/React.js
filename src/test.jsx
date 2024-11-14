
// import 'https://matcha.mizu.sh/@syntax-highlighting.css';
// import 'public/index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import 'milligram/dist/milligram.css';
import { useRef, useState } from 'react';
import Contact from './component/Contact';
import Content from './component/Content';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
/* App.css or index.css */
function App() {


  let mark = 60;
  let person = ['Mark', 'John', 'Alice', 'Bob', 'Charlie'];
  let obj = {
    name: 'Mark', 
    age: 25, 
    address: '123 Main St'
  }

  let buttonPress = () => {
    alert('Button Pressed')
  }

  let num1 = 5;
  let num2 = 10;
  let myfunction = () => {
    let result = num1 + num2;
    return result;
  }



  let postForm = (e) => {
    e.preventDefault();
    alert('Form Submitted')
  
  }

  // react hook 

  //useRef

  let myheader = useRef()

  // function myfun(){

  //   myheader.current.innText = 'this is inner text';


  // }

  const myfun = () =>{
    myheader.innerHTML = `
    
    <ul>

    <li>Name: ${person[0]}</li>
    <li>Name: ${person[1]}</li>
    <li>Name: ${person[2]}</li>
    
    </ul>
    
    `;

  }


  
  let myimg = useRef()


  const changefun = () => {
    console.log('change');
    myimg.current.src = 'https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg';
    myimg.current.setAttribute('width', '400px');
    myimg.current.setAttribute('height', '300px');
  };


  let name,email = useRef()

  const changeInput = () =>{

  let n = name.value
  let e = email.value
  alert(n+ " " + e)


  }

  let changeOne = useRef()
  let changeStyle = () => {
    changeOne.classList.remove('bg-primary')
    changeOne.classList.add('bg-success')
  }

  let demo = useRef()
  let Increment = useRef(0)
  let changeNumber = () => {
   
    Increment.current++
    demo.current.innerHTML = Increment.current
    console.log(Increment.current)

  }








  const dataStore = useRef(null)
  const myDiv = useRef(null)

  const fetchData = async() => {
    const response = await fetch('https://dummyjson.com/products');
    dataStore.current = await response.json();
    console.log(dataStore.current);
  }

  let showData = () => {

    myDiv.current.innerHTML = JSON.stringify(dataStore)

  }

  const [number,setNumber] = useState(0)
  let numberChange = () => {
    setNumber(number + 1)
  };


  const [ myobject,myObjectSet ]= useState({
    name: 'Mark', 
    age: 25, 
    address: '123 Main St'
  })


  let changeText = () => {

    myObjectSet({
      name: 'Mohmmad Masum', 
      age: 27, 
      address: 'Tongi,Gazipur',
      education: "Bsc in EEE"

    })

  }


  const [myObj,myObjSet] = useState({
    name: 'Mark', 
    age: 27, 
    address: '123 Main St',
    hobbies: ['Reading', 'Coding', 'Traveling'],
    skills: ['JS', 'React', 'Node.js']
  })


  let addHobby = () => {

    myObjSet(
      {
       ...myObj,
        name: "Mohmmad Masum",
        age: 27, 
        address: 'Tongi,Gazipur',
        hobbies: [...myObj.hobbies, 'Swimming'],
        skills: ['Python','boostrap']
      }
    )

  }

  let [list,setList] = useState([])
  let [item,setItem] = useState("")


  let addSkill = () => {

    list.push(item)
    setList([... list])
    console.log(setList)


  }

  let removeItem = (index) => {
    list.splice(index)
    setList([...list])
  }


  let [formObj,setFormObj] = useState({name: '',email: '' ,city: ' ',gender: '',})

let inputOnchange = (property,value) => {
    setFormObj(precObj => ({
       ...precObj,
        [property]: value
  
    }))
}


const formSubmite = (e) => {
  console.log('this')

  e.preventDefault();
  console.log(formObj)

}

  // let day = new Date().getDay();
  let status = true;
  return (

    
  
    
      <div>

        <Header />
        <Hero />
        <Content />
        <Contact />
        <Footer />


        {
          mark >80? <h1>Good</h1>:<h1>Bad</h1>
        }


        {
          (
            ()=>{

              if(mark >= 80 && mark <= 100){
                return <h1>You have got A+ and mark is {mark}</h1>
              }

              else if(mark >= 70 && mark < 80){
                return <h1>You have got A and mark is {mark}</h1>
              }

              else if(mark >= 60 && mark < 70){
                return <h1>You have got B and mark is {mark}</h1>
              }

              else if(mark >= 50 && mark < 60){
                return <h1>You have got C and mark is {mark}</h1>
              }

              else{
                return <h1>You have got F and mark is {mark}</h1>
              }


            }
          )()
        }

        <ul>
        {
          person.map((name,index) => {
            return <li key={index}>{name}</li>
          })
        }
        </ul>



        {/* switch(day){
          
          case 0:
            return <h1>Today is Sunday</h1>
          case 1:
            return <h1>Today is Monday</h1>
          case 2:
            return <h1>Today is Tuesday</h1>
          case 3:
            return <h1>Today is Wednesday</h1>
          case 4:
            return <h1>Today is Thursday</h1>
          case 5:
            return <h1>Today is Friday</h1>
          case 6:
            return <h1>Today is Saturday</h1>
          default:
            return <h1>Invalid Day</h1>
          
        } */}



      {
        status && <button type='button'>Login</button>
      }


      {(
        ()=>{
          if(status){
            return <h1>You are Logged In</h1>
          }
          else{
            return <h1>You are Logged Out</h1>
          }
        }
      )()}

      {/* taking props */}
      {/* passing data to the child from parent this is props means propeties and data only can recive child and child do not chnage(imutable) data and read only and does not passing the data to parent from the child and it unidirectional flow  and those data will be string,object,function*/}




      <p>

        <Hero title='this is title one' description = 'Title description is for description' type='text type data' item ={obj} btn = {buttonPress} />

      </p>


      <p id='number'></p>


      <p>
        <button type='button' onClick={() => {
          alert('Button Pressed from App')
          document.getElementById('number').innerText = myfunction()
          console.log(num1 + num2)

        }}>Click</button>
      </p>


      <form action="php" className='' onSubmit={postForm}>
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <textarea name="message" placeholder="Enter your message"></textarea>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="submit" value="Submit" />
      </form>


{/* use useRef */}
      <p>
        {/* <h1 ref={myheader}></h1> */}
        
         {/* if we do not use current then */}
        <h1 ref={(h1) => {
          myheader=h1
        }}></h1>
        <button onClick={myfun}>click</button>
      </p>

<img ref={myimg} src="https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073_1280.jpg" alt="img"  />

<button onClick={changefun}>Click</button>



<p>
  <form action="php">
    <input ref={(a) => {return name = a}} type="text" name="name" placeholder="Enter your name" />
    <input ref={(a) => {return email = a}} type="email" name="email" placeholder="Enter your email" />
    <button type='button' onClick={changeInput}>Click</button>
  </form>
</p>


<div className="m-auto w-50 bg-primary">
  <div ref={(div => changeOne = div)} className="card p-2 bg-primary ">
    <h1 className="card-title">this is card title</h1>
    <div className="card-body">
      <p className="card-text">this is card text</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
      
    </div>
    <img src="https://designsvalley.com/wp-content/uploads/2023/04/product-hunting-1024x576.jpg" className="card-img-top" alt="..." />
  </div>


</div>
<button type='button' onClick={() => {
  return changeStyle()
}}>Click</button>


<div className='p-3 w-25 m-auto shadow-lg '>
  <h1 className='text-center' ref={demo}></h1>
</div>

<div className='w-25 m-auto p-3'>
  <button onClick={() => changeNumber()}>Increment</button>
</div>


<div>
  <div ref={myDiv}></div>
  <button onClick={showData}>Show Data</button>
  <button onClick={fetchData}>Fetch Data</button>

</div>


<div className='m-auto bg-danger p-2'>
  <h1 className='p-3 w-25 m-auto bg-secondary text-center mt-2 '>{number}</h1>
  <button type='button' className='btn btn-primary w-100  mt-2 text-center' onClick={numberChange}>Increment</button>
</div>



<div>
  <h1><strong>Name: </strong>{myobject.name}</h1>
  <h1><strong>Address: </strong>{myobject.address}</h1>
  <h1><strong>Age: </strong>{myobject.age}</h1>
  <button onClick={changeText}>Change Text</button>
</div>


<div>
  <h1><strong>Name: </strong>{myObj.name}</h1>
  <h1><strong>Address: </strong>{myObj.address}</h1>
  <h1><strong>Age: </strong>{myObj.age}</h1>
  <p><strong>Hobbies: </strong>{myObj.hobbies}</p>
  <p><strong>Skills: </strong>{myObj.skills}</p>

  <button onClick={addHobby}>Change Text</button>
</div>



<div className='w-50 m-auto'>
  <input onChange={ (e) => setItem(e.target.value)

  } type="text" placeholder='Enter' />
  <button onClick={addSkill}>Add</button>
  <table>
  
    <tbody>
      {

        list.length!==0? (list.map((element,index) => {
          return(
            <tr >
              <td className='p-1  border-2 text-center '>{element}</td>
              <td><button type='button' onClick={() => {
                removeItem(index)
              }}>Remove</button></td>
            </tr>
          )
        }) ):(<tr></tr>)
          
      }
    </tbody>
  </table>


<div className='border border-2 p-3 mb-5 shadow-lg'>
  <form onSubmit={formSubmite} action="php">
    <h1 className='text-center'>Information Form</h1>
    <input onChange={(e) => {inputOnchange("name",e.target.value)}} value={formObj.name} type="text" name="name" placeholder="Enter your name" />
    <input onChange={(e) => {inputOnchange("email",e.target.value)}} value={ formObj.email} type="email" name="email" placeholder="Enter your email" />
    <select onChange={ (e) => {inputOnchange('city',e.target.value)}} value={formObj.city } name="city" id="city">
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

    <input onChange={ (e) => { inputOnchange('gender',male)}} checked = {formObj.gender === 'Male'} type="radio" name='gender' />Male
    <input onChange={ (e) => {inputOnchange("gender",Female)}} checked = {formObj.gender === 'female'} type="radio" name='gender' />Female
    <input onChange={(e) => {inputOnchange("gender",Other)}} checked = {formObj.gender === 'other'} type="radio" name='gender' />Other
    <br/>
    <button type='button'>Submit</button>
  </form>
</div>




</div>



<div>
  <form action="">
    <input type="text" placeholder='Fir' />
  </form>
</div>





       
       
      </div>
     
    
  )
}

export default App



