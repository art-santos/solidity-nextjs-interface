import { checkMetamask } from "./checkMetamask";

export const checkAccount = async (callback, eth): Promise<any> => {
    const checkMetaMask = await checkMetamask(eth);
    try{
        if(checkMetaMask){
            const accounts = await eth.request({ method: 'eth_requestAccounts' });
            console.log(accounts)
            if(accounts.length !== 0){
                return callback(accounts[0]);
            }else{
                return callback(false);
            }
        }
    }catch(e){
        console.log(e);
        return callback(false);
    } 
}

export default checkAccount;