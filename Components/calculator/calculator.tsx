import { Box, Input, Text } from "@chakra-ui/react";


export default function Calculator() {
    return (<Box minH="calc(100vh - 30rem)">
        <Box bg="green">
            <Input
                name="name"
                width={{ base: '347px', lg: '600px' }}
                size={'sm'} mb={'2rem'} borderRadius={'none'}
                placeholder='YOUR NAME' textColor={'black'}
                _placeholder={{ fontSize: '10px', mt: '1rem', color: 'black' }}
                type='text'
                id='name'
            />
        </Box>
    </Box>);
}