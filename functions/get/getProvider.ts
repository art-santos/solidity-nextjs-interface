import { ethers } from "ethers";

export const getProvider = (eth) => {
    const provider = new ethers.providers.Web3Provider(eth);
    return provider;
}

export default getProvider;