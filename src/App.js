
import './App.css';
import React, {useState} from 'react';
import InputField from './Components/InputField'



function App() {

  const inputRefs = React.useRef([
    React.createRef(),
    React.createRef()
  ]);

  const [data, setData] = useState({});

  const handleChange = (name, value) => {
    setData(prevState => ({...prevState, [name]: value
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true

   for  (let i = 0; i < inputRefs.current.length; i++){
   const valid = inputRefs.current[i].current.validate();

   console.log(valid);

    if(!valid) {
      isValid = false

       
     }
    

   } 
   
   if(!isValid){
      return
   }
    console.log('Logged In')
   //Otherwise carry on as normal

  }

  

  return (
    <div className="App">
      
     
      <form className='form' onSubmit={handleSubmit}>
      <h1>REACT VALIDATION FORM</h1>
          
       <InputField
          ref={inputRefs.current[0]}
          name='username'
          label='Username'
          onChange={handleChange}
          validation={"required|min:6|max:12"}
       />

        <InputField
          ref={inputRefs.current[1]}
          name='password'
          label='Password'
          onChange={handleChange}
          validation="required|min:6"
       />
          <button type='submit' className='button'>Login</button>

      <footer className='footer'>
        <p>&copy; Cletus_Ogah @2022</p>
     </footer>
      </form>
     
    </div>
  );
}

export default App;
