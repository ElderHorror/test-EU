import {
  Image,
  Box,
  Button,
  Center,
  Flex,
  Input,
  Text,
  FormLabel,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useLayoutEffect, useState } from "react";

const initState = {
  amount: 0,
  percent: 5,
  month: 2,
  mode: 1,
  firstRepaymentPercent: 10,
};

const MODE = {
  ACCOMMODATION: 2,
  FLIGHT: 3,
  SAFETY_LOAN: 4,
};

export default function Calculator(props: any) {
  const [data, setData] = useState(initState);
  const [monthlyPayback, setMonthlyPayback] = useState(0);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(data, monthlyPayback);

  useLayoutEffect(() => {
    if (data.month > 1 && data.month <= 3 && data.percent > 1 && data.amount) {
      // Convert percentage to decimal and then to monthly interest rate
      const monthlyInterestRate: number = data.percent / 100 / 12;

      // Calculate monthly payback amount using the formula for amortizing loans
      const monthlyPayback: number =
        (data.amount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, data.percent)) /
        (Math.pow(1 + monthlyInterestRate, data.month) - 1);

      setMonthlyPayback(monthlyPayback);
    }
  }, [data]);
  return (
    <Box minH="calc(100vh - 30rem)" mt="10rem" {...props}>
      <Box
        mt={{ base: "2rem ", lg: "0rem" }}
        margin={!props ? "auto" : "unset"}
        p="1.5rem 2rem"
        border="1px solid black"
        borderRadius={"0.5rem"}
        maxW={!props ? "30rem" : "40rem"}
      >
        <Text
          fontSize="1.25rem"
          fontWeight="700"
          textAlign={"center"}
          my="2rem"
        >
          Service Calculator
        </Text>
        <form onSubmit={onSubmit}>
          <FormLabel htmlFor="amount">
            Amount (max. £{`${data.mode == 4 ? 500 : 1500}`})
          </FormLabel>
          <Input
            name="amount"
            size={"sm"}
            mb={"2rem"}
            borderRadius={"none"}
            placeholder="amount"
            textColor={"black"}
            _placeholder={{ fontSize: "10px", mt: "1rem", color: "black" }}
            type="number"
            max={data.mode == 4 ? 500 : 1500}
            id="amount"
            step={1}
            min={1}
            value={data.amount}
            onChange={handleChange}
          />

          <FormLabel htmlFor="month">Payback Duration(months)</FormLabel>
          <Input
            name="month"
            size={"sm"}
            mb={"2rem"}
            borderRadius={"none"}
            placeholder="month"
            textColor={"black"}
            _placeholder={{ fontSize: "10px", color: "black" }}
            type="number"
            id="month"
            max={3}
            min={1}
            value={data.month}
            onChange={handleChange}
          />
          <RadioGroup
            defaultValue="1"
            onChange={(e) => {
              if (+e == 1) {
                setData({
                  ...data,
                  mode: +e,
                  percent: 5,
                  month: 2,
                  firstRepaymentPercent: 10,
                });
              } else if (+e == MODE.ACCOMMODATION) {
                setData({
                  ...data,
                  mode: +e,
                  percent: 4,
                  month: 3,
                  firstRepaymentPercent: 10,
                });
              } else if (+e == MODE.FLIGHT) {
                setData({
                  ...data,
                  mode: +e,
                  percent: 5,
                  month: 2,
                  firstRepaymentPercent: 10,
                });
              } else {
                setData({
                  ...data,
                  amount: 500,
                  mode: +e,
                  percent: 5,
                  month: 3,
                  firstRepaymentPercent: 15,
                });
              }
            }}
          >
            <Stack>
              {/* <Radio size="md" value="1">
                Visa Processing Fee Loan
              </Radio> */}
              <Radio size="md" value="2">
                Accommodation Payment Visa
              </Radio>
              <Radio size="md" value="3">
                Flight Expense Loan
              </Radio>
              <Radio size="md" value="4">
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
            color={"black"}
            bgColor={"black"}
            borderRadius={"none"}
          >
            <Flex justifyContent={"center"} alignItems={"center"} gap={"12px"}>
              <Box>
                <Image alt={"#"} src={"/Image/Dash.png"} h={"2px"} />
              </Box>
              <Box>
                <Text color={"white"} fontWeight={500} fontSize={"12px"}>
                  Submit
                </Text>
              </Box>
            </Flex>
          </Button>
        </form>
        {monthlyPayback > 0 &&
        data.amount <= (data.mode == 4 ? 500 : 1500) &&
        data.month < 4 ? (
          <Box>
            <Flex gap="1rem">
              <Text flexBasis={"45%"}>Service fee:</Text>
              <Text>
                {data.mode == MODE.ACCOMMODATION
                  ? "£10.0"
                  : data.mode == MODE.FLIGHT
                  ? "£15.0"
                  : "£10.0"}
              </Text>
            </Flex>
            <Flex gap="1rem">
              <Text flexBasis={"45%"}>First Month Minimum Repayment:</Text>
              <Text>{`£${(
                data.amount *
                (1 + data.firstRepaymentPercent / 100) *
                (data.month == 1
                  ? 1
                  : data.month == 2
                  ? 0.6
                  : data.month == 3
                  ? 0.4
                  : 0.1)
              ).toFixed(2)}/month`}</Text>
            </Flex>
            {/* {data.month > 4 && (
              <Flex gap="1rem">
                <Text flexBasis={"45%"}>Monthly payback:</Text>
                <Text>{`£${(
                  data.amount *
                  (1 + data.firstRepaymentPercent / 100) *
                  0.44
                ).toFixed(2)}/month`}</Text>
              </Flex>
            )} */}
            {(data.month == 2 || data.month == 3) && (
              <>
                <Flex gap="1rem">
                  <Text flexBasis={"45%"}>Second Month payback:</Text>
                  <Text>{`£${(
                    (data.amount *
                      (1 + data.firstRepaymentPercent / 100) *
                      0.4 *
                      (100 + data.percent)) /
                    100
                  ).toFixed(2)}/month`}</Text>
                </Flex>
              </>
            )}
            {data.month == 3 && (
              <>
                <Flex gap="1rem">
                  <Text flexBasis={"45%"}>Third Month payback:</Text>
                  <Text>{`£${(
                    (data.amount *
                      (1 + data.firstRepaymentPercent / 100) *
                      0.2 *
                      (100 + data.percent)) /
                    100
                  ).toFixed(2)}/month`}</Text>
                </Flex>
              </>
            )}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
