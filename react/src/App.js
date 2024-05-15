import { useState, useEffect } from 'react'

import axios from 'axios'
import Header from "./components/Header"
import Form from "./components/Form"
import Users from './components/Users'


// create state formData
const App =()=> {

    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''
    })



    const [ users, setUsers ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))
        
    }, [])

    // console.log(users)



    

    // need in our form to key in our input  
    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value.toLowerCase()
            }
        })
    }




    // runs axios (post the data when we hit submit) takes formData and passes that in as data
    const handleSubmit =()=> {
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/user/create',
            data: formData
        })
    }




    // passing in as props (formData, handleChange, handleSubmit)
    return (
        <>
            <Header />
            <Form 
                formData={formData} 
                handleChange={handleChange}
                handleSubmit={handleSubmit}    
            />
            <Users users={users} />
        </>
    )
}

export default App