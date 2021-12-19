import { checkMetamask } from "../check/checkMetamask";

export const getAccount = async (eth): Promise<any> => {
    const checkMetaMask = await checkMetamask(eth);
    try{
        if(checkMetaMask){
            const accounts = await eth.request({ method: 'eth_requestAccounts' });
            console.log(accounts)
            if(accounts.length !== 0){
                return accounts[0];
            }else{
                return false;
            }
        }
    }catch(e){
        console.log(e);
        return false;
    } 
}

export default getAccount;