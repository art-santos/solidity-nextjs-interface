import getAccount from "../get/getAccount";

export const setAccount = async (eth, setState) => {
    const account = await getAccount(eth);
    setState(account);
};

export default setAccount;