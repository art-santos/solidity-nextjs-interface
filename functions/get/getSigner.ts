import getProvider from "./getProvider";

export const getSigner = (eth) => {
    const provider = getProvider(eth);
    const signer = provider.getSigner();
    return signer;
}

export default getSigner;