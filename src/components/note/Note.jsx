import React from "react";
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

const Note  = () =>{

    return <>

    <h1>NOTE</h1>

    <Stack spacing={3}>
  <Input
    focusBorderColor='pink.400'
    placeholder='Lable'
  />
  <Input
    ifocusBorderColor='pink.400'
    placeholder='Title'
  />
  <Input
    focusBorderColor='pink.400'
    placeholder='Type your thoughts......'
  />
</Stack>
    </>
}
export default Note;