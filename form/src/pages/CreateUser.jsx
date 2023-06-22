import { useState } from 'react';
import './CreateUser.css'
import axios from 'axios';
import { Button, Container } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'

const CreateUser = () => {
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const onChangeTitle = (event) => {
        const inputValue = event.target.value
        setTitle(inputValue)
    }
    const onChangeBody = (event) => {
        const inputValue = event.target.value
        setBody(inputValue)
    }
    const handleSubmit = async() => {
        try {
            const postToSubmit = {
                userId : 1,
                title: title,
                body: body
            }
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', postToSubmit)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div className='container'>
            <Container centerContent>
            <Input placeholder='Título' onChange={onChangeTitle} value={title}/>
            <Textarea placeholder='Body' onChange={onChangeBody} value={body}></Textarea>
            <Button onClick={handleSubmit}>Cadastrar POST</Button>
            </Container>
           
        </div>
    );
}

export default CreateUser;