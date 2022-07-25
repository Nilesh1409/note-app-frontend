import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    

    const handleSubmit = () =>{
        
        let payload = {
            name,
            email,
            password
        }
        console.log(payload)
        fetch('http://localhost:3001/register',{
            method : 'POST',
            body : JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res)=>{
            console.log('registerd')
            window.location.href = 'http://localhost:3000/login'
        })

    }
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name </FormLabel>
                    <Input onChange={(e)=>handleName(e)} type="text" />
                  </FormControl>
                </Box>
                
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={(e)=>handleEmail(e)} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={(e)=>handlePassword(e)} type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSubmit}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link href="/login" color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }