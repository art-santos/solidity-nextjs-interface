import { getContract } from "../get/getContract";

export const setWaves = async (eth, callbackSetState) => {
    const contract = await getContract(eth).getTotalWaves();
    callbackSetState(contract.toNumber());
    return;
}

export default setWaves;