'use client'
import { Box, Button, Center, Flex, FormControl, Image, Input, Text, Textarea, useToast } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"

const initState = {
  name: "",
  email: "",
  message: "",
}


export default function GITright() {
  const [data, setData] = useState(initState)
  const toast = useToast()


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const name = e.target.name

    setData(prevData => ({
      ...prevData,
      [name]: e.target.value
    }))
  }


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(JSON.stringify(data))
    const { name, email, message } = data

    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, email, message
        }),
      });

      const result = await res.json()
      console.log(result)
      setData({
        name: '',
        email: '',
        message: '',
      });
      toast({
        status: "success",
        title: "success",
        description: "Message sent"
      })

    } catch (error) {
      console.error('Error submitting the form:', error)
    }

    console.log(process.env.NEXT_PUBLIC_EMAIL)

  }


  return (
    <Box mt={{ base: '2rem ', lg: '0rem' }} margin={'auto'} width={{ base: 'none', lg: '614px' }} >
      <Text fontSize="3.5rem" fontWeight="700" id="contact_us" textAlign={"center"} my="2rem" >Contact US</Text>
      <Center>
        <form onSubmit={onSubmit}>
          <Center flexDirection={"column"}>
            <Input
              name="name"
              width={{ base: '347px', lg: '600px' }}
              size={'sm'} mb={'2rem'} borderRadius={'none'}
              placeholder='YOUR NAME' textColor={'black'}
              _placeholder={{ fontSize: '10px', mt: '1rem', color: 'black' }}
              type='text'
              id='name'
              value={data.name}
              onChange={handleChange}
            />
            <Input
              name="email"
              width={{ base: '347px', lg: '600px' }}
              size={'sm'} mb={'2rem'}
              borderRadius={'none'}
              placeholder='YOUR EMAIL'
              textColor={'black'}
              _placeholder={{ fontSize: '10px', color: 'black' }}
              type='email'
              id='email'
              value={data.email}
              onChange={handleChange}
            />
            <Textarea
              name="message"
              width={{ base: '347px', lg: '600px' }}
              height={'200px'}
              size={'sm'}
              mb={'1rem'}
              borderRadius={'none'}
              textColor={'black'}
              placeholder='YOUR MESSAGE'
              _placeholder={{ fontSize: '10px', mt: '2rem', textColor: 'black', color: 'black' }}
              id='message'
              value={data.message}
              onChange={handleChange}
            />
          </Center>
          <Button
            //  onClick={onSubmit}
            type="submit"
            width="100%"
            //  isLoading={isLoading}
            color={'black'} bgColor={'black'}
            borderRadius={'none'} >
            <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'}>
              <Box>
                <Image
                  alt={'#'}
                  src={'/Image/Dash.png'}
                  height={'2px'}
                />
              </Box>
              <Box>
                <Text color={"white"} fontWeight={500} fontSize={'12px'}>Submit</Text>
              </Box>
            </Flex>
          </Button>
        </form>
      </Center>
    </Box>
  )
}







