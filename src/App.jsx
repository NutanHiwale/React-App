// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import { Button, Container } from 'reactstrap';
import ProjectCard from "./components/ProjectCard";
import projects from './projects.json'
import LoginPage from './components/LoginPage';
import SignUp from "./components/SignUp";

function App() {

  let[showSignUpPage, setShowSignUpPage] = useState(true)
  let [showLoginPage, setShowLoginPage] = useState(false)
  let [users, setUsers] = useState({})

  
  let title = showLoginPage ? 'Login Page' : 'Project'

  const togglePage = () => setShowLoginPage(!showLoginPage)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn){
      console.log('in useEffect >>>>>>>>>>>>>>>>>>>>>');
      setShowLoginPage(false)

      fetchData()

      
    }
  }, [])
  // console.log('>>>>>>>>>>> ',users.data[0]);
  const onLoginSuccess = () => {
    setShowLoginPage(false)
    localStorage.setItem('isLoggedIn', true)
  }

  const onSignUpSuccess = () => {
    setShowLoginPage(true)
    setShowSignUpPage(false)
  }

  const fetchData = () =>{
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data =>setUsers(data))

  }


  console.log(users);


  return (
    <Container>
      {/* <h1>Hello world</h1> */}
      {/* <h1>{title}</h1>
       <Button onClick={togglePage}>Change Page </Button> */}

      {showSignUpPage?(<SignUp onSignUpSuccess={onSignUpSuccess} />):
        showLoginPage ? (<LoginPage onLoginSuccess={onLoginSuccess}/>) :
        (<div>
          {/* hii */}
          {users.data ? (
            <div>
            {users.data.map((user) => {
            return (<ProjectCard
              img_url={user.avatar}
              name={user.first_name}
              description={user.last_name}
              img_alt_text={user.first_name}
            />)
          })}
            </div>
          ) : (<h1>data not available</h1>)}
           
        {/* <h1>Project Page</h1> */}
        </div>)
      }



    </Container>
  );
}

export default App;