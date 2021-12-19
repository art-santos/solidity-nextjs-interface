import React from "react";
import { Box, Button, Flex, Spinner, Text, Stack, Input, FormControl, FormLabel, HStack } from "@chakra-ui/react";
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
        <Text>{wave}</Text>
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
        {totalWaves.map((item:any) => (
            <>
            <HStack key={item.timestamp} p={5} justify="center" align="center" boxShadow="md" >
            <Text>{item.message}</Text>
            |
            <Text>By: {item.address}</Text>
            |
            <Text>In: {item.timestamp}</Text>
            </HStack>
            </>
        ))}
    </Stack>
  );
}

export default App