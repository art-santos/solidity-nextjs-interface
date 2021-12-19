import { ethers } from 'ethers';
import json from "../../utils/wave.json";
import getSigner from "./getSigner";

export const getContract = (eth) => {
    const contractABI = json.abi
    const contractAddress = "0x2ED14FeF9B278De158Fd2B21cae8bcA2AeC23B68";
    
    const wavePortalContract = new ethers.Contract(contractAddress, contractABI, getSigner(eth));
    return wavePortalContract;
}

export default getContract;