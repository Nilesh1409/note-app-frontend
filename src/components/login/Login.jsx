import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  
  export default function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [token,settoken] = useState('')

   
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    

    const handleSubmit = () =>{
        
        let payload = {
            email,
            password
        }
        console.log(payload)
        fetch('http://localhost:3001/login',{
            method : 'POST',
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res)=>{
            console.log('login')
            settoken(res.token)
          })
          // localStorage.setItem('token',JSON.stringify(token)),
          window.location.href = 'http://localhost:3000/note'

    }




    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>handleEmail(e)}  type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input onChange={(e)=>handlePassword(e)}  type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                </Stack>
                <Button onClick={handleSubmit} 
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }