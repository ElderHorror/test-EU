import { Image, Box, Button, Center, Flex, Input, Text, FormLabel, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useLayoutEffect, useState } from "react";

const initState = {
    amount: 0,
    percent: 5,
    month: 2,
    mode: 1,
}

export default function Calculator() {
    const [data, setData] = useState(initState)
    const [monthlyPayback, setMonthlyPayback] = useState(0)


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: e.target.value
        }))
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    console.log(data, monthlyPayback)

    useLayoutEffect(
        () => {
            if (data.month > 1 && data.month <= 18 && data.percent > 1 && data.amount) {
                // Convert percentage to decimal and then to monthly interest rate
                const monthlyInterestRate: number = (data.percent / 100) / 12;

                // Calculate monthly payback amount using the formula for amortizing loans
                const monthlyPayback: number = (data.amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, data.percent)) /
                    (Math.pow(1 + monthlyInterestRate, data.month) - 1);

                setMonthlyPayback(monthlyPayback)
            }
        }, [data])
    return (<Box minH="calc(100vh - 40rem)" mt="10rem">
        <Box mt={{ base: '2rem ', lg: '0rem' }} margin={'auto'} p="1.5rem 2rem" border="1px solid black" borderRadius={"0.5rem"} maxW="30rem">
            <Text fontSize="1.25rem" fontWeight="700" id="contact_us" textAlign={"center"} my="2rem" >Service Calculator</Text>
            <form onSubmit={onSubmit}>
                <FormLabel htmlFor="amount">
                    Amount (max. £{`${data.mode == 4 ? 500 : 2000}`})
                </FormLabel>
                <Input
                    name="amount"
                    size={'sm'} mb={'2rem'} borderRadius={'none'}
                    placeholder='amount' textColor={'black'}
                    _placeholder={{ fontSize: '10px', mt: '1rem', color: 'black' }}
                    type='number'
                    max={data.mode == 4 ? 500 : 2000}
                    id='amount'
                    step={1}
                    min={1}
                    value={data.amount}
                    onChange={handleChange}
                />
                <FormLabel htmlFor="percent">
                    Percentage (%)
                </FormLabel>
                <Input
                    name="percent"
                    size={'sm'} mb={'2rem'}
                    borderRadius={'none'}
                    placeholder='percent'
                    textColor={'black'}
                    _placeholder={{ fontSize: '10px', color: 'black' }}
                    type='percent'
                    id='percent'
                    isDisabled
                    value={data.percent}
                    onChange={handleChange}
                />

                <FormLabel htmlFor="month">
                    Payback Duration(months)
                </FormLabel>
                <Input
                    name="month"
                    size={'sm'} mb={'2rem'}
                    borderRadius={'none'}
                    placeholder='month'
                    textColor={'black'}
                    _placeholder={{ fontSize: '10px', color: 'black' }}
                    type="number"
                    id='month'
                    max={18}
                    min={1}
                    value={data.month}
                    onChange={handleChange}
                />
                <RadioGroup defaultValue='1' onChange={(e) => {
                    if (+e == 1) {
                        setData({ ...data, mode: +e, percent: 5, month: 2 })
                    } else if (+e == 2) {
                        setData({ ...data, mode: +e, percent: 8, month: 3 })
                    }
                    else if (+e == 3) {
                        setData({ ...data, mode: +e, percent: 15, month: 2 })
                    }
                    else {
                        setData({ ...data, amount: 500, mode: +e, percent: 7.5, month: 2 })
                    }
                }}>
                    <Stack>
                        <Radio size='md' value='1'>
                            Visa Processing Fee Loan
                        </Radio>
                        <Radio size='md' value='2' >
                            Accommodation Payment Visa
                        </Radio>
                        <Radio size='md' value='3' >
                            Flight Expense Loan
                        </Radio>
                        <Radio size='md' value='4' >
                            Settler&apos;s Safety Net Loan
                        </Radio>
                    </Stack>
                </RadioGroup>

                <Button
                    //  onClick={onSubmit}
                    type="submit"
                    width="100%"
                    mt="0.75rem"
                    //  isLoading={isLoading}
                    color={'black'} bgColor={'black'}
                    borderRadius={'none'} >
                    <Flex justifyContent={'center'} alignItems={'center'} gap={'12px'}>
                        <Box>
                            <Image
                                alt={'#'}
                                src={'/Image/Dash.png'}
                                h={'2px'}
                            />
                        </Box>
                        <Box>
                            <Text color={"white"} fontWeight={500} fontSize={'12px'}>Submit</Text>
                        </Box>
                    </Flex>
                </Button>
            </form>
            {monthlyPayback > 0 && data.amount <= (data.mode == 4 ? 500 : 2000) ?
                <Box>
                    <Flex gap="1rem">
                        <Text flexBasis={"45%"}>
                            Service fee:
                        </Text>
                        <Text>
                            £5.0
                        </Text>
                    </Flex>
                    <Flex gap="1rem">
                        <Text flexBasis={"45%"}>
                            Monthly payback:
                        </Text>
                        <Text>
                            {`£${monthlyPayback.toFixed(2)}/month`}
                        </Text>
                    </Flex>
                </Box>
                : null}
        </Box>
    </Box>);
}