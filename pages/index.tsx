import React from "react";
import { Box, Button, Flex, Spinner, Text, Stack, Input, FormControl, FormLabel, HStack, VStack, StatLabel, Stat, StatNumber, StatHelpText } from "@chakra-ui/react";
import { setWaves } from "../functions/set/setWaves";
import { setAllWaves } from "../functions/set/setTotalWaves";
import { setAccount } from "../functions/set/setAccount";
import { userWave } from "../functions/update/userWave";


const App = () => {
  const [ethereum, setEthereum] = React.useState(null);
  const [pending, setPending] = React.useState(false);
  const [currentAccount, setCurrentAccount] = React.useState("");
  const [wave, setWave] = React.useState(0);
  const [totalWaves, setTotalWaves] = React.useState([]);
  const [message, setMessage] = React.useState("");

React.useEffect(() => {
    const { ethereum }:any = window;
    setEthereum(ethereum);
    setAccount(ethereum, setCurrentAccount);
    setWaves(ethereum, setWave);
    setAllWaves(ethereum, setTotalWaves);
}, [])

const handleSubmit = async () => {
    console.log(message)
    if(message !== undefined && message !== ""){
    await userWave(ethereum, setPending, setWave, message);
    setMessage("");
    }
}

    return (
    <Stack direction="column">
    <Flex p={5} justify="flex-end" align="center" boxShadow="md" >
    <Text>{currentAccount}</Text>
    </Flex>
    <Flex p={5} justify="center" align="center" boxShadow="md" >
    {pending ? <Spinner /> 
    : 
    <Box textAlign="center">
        <Text><strong>total waves:</strong> {wave}</Text>
        <FormControl
        onSubmit={() => handleSubmit()}
        >
        <Input 
        type="string"
        placeholder="Send me your message"
        onChange={(e) => setMessage(e.target.value)} />
        <Input 
        type="submit"
        placeholder="Wave 👋" 
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        color="white"
        fontWeight="bold"
        value="Wave 👋"
        cursor= "pointer"
        onClick={() => handleSubmit()}
        />
        </FormControl>
    </Box>
    }
    
    </Flex>
    <Stack
    justify="center"
    display="grid"
    gridGap={5}
    p={5}
    bgColor="gray.100"
    spacing={5}
    >
        {totalWaves.map((item:any) => (
            <>
            <Stat
            bgColor="white"
            key={item.timestamp}
            p={5}
            justify="center"
            align="center"
            boxShadow="lg"
            borderRadius="5px"
            spacing={5}
            h="100px"
            w="100%"
            >
            <StatLabel><strong>By:</strong> {item.address}</StatLabel>
            <StatNumber fontSize="20px">{item.message}</StatNumber>
            <StatHelpText>{item.timestamp}</StatHelpText>
            </Stat>
            </>
        ))}
    </Stack>
    </Stack>
  );
}

export default App