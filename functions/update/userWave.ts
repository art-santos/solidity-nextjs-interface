import { getContract } from "../get/getContract";

export const userWave = async (eth, setState, setWaves, _message) => {
    setState(true)
    const wave = await getContract(eth).wave(_message);
    wave.wait();
    const totalWaves = await getContract(eth).getTotalWaves();
    setWaves(totalWaves.toNumber());
    setState(false)
};

export default userWave;