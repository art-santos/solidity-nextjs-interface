import React from "react";
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { setWaves } from "../functions/set/setWaves";
import { setAccount } from "../functions/set/setAccount";
import { userWave } from "../functions/update/userWave";


const App = () => {
  const [ethereum, setEthereum] = React.useState(null);
  const [pending, setPending] = React.useState(false);
  const [currentAccount, setCurrentAccount] = React.useState("");
  const [wave, setWave] = React.useState(0);

React.useEffect(() => {
    const { ethereum } = window;
    setEthereum(ethereum);
    setAccount(ethereum, setCurrentAccount);
    setWaves(ethereum, setWave);
}, [])

const handleClick = async () => {
    await userWave(ethereum, setPending, setWave);
}

    return (
    <React.Fragment>
    <Flex height={10} p={5} justify="flex-end" align="center" boxShadow="md" >
    <Text>{currentAccount}</Text>
    </Flex>
    <Flex p={5} justify="center" align="center" boxShadow="md" >
    {pending ? <Spinner /> 
    : 
    <Box>
        <Text textAlign="center">{wave}</Text>
        <Button onClick={() => handleClick()}>Wave 👋</Button>
    </Box>
    }
    </Flex>
    </React.Fragment>
  );
}

export default App