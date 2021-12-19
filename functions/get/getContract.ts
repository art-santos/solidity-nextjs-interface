import { ethers } from 'ethers';
import json from "../../utils/wave.json";
import getSigner from "./getSigner";

export const getContract = (eth) => {
    const contractABI = json.abi
    const contractAddress = "0x54E5B7CA7Fbb97b2B8488E9F03E1a6fC07B8dc7b";
    
    const wavePortalContract = new ethers.Contract(contractAddress, contractABI, getSigner(eth));
    return wavePortalContract;
}

export default getContract;