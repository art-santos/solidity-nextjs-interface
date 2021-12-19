import { getContract } from "../get/getContract";

export const setAllWaves = async (eth, callbackSetState) => {
    let waves = [];
    const contract = await getContract(eth).getAllWaves();
    contract.forEach((element) => {
        waves.push({
        address: element.waver,
        timestamp: new Date(element.timestamp * 1000).toLocaleString(),
        message: element.message
        })
    })
    callbackSetState(waves);
}

export default setAllWaves;