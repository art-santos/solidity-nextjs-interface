export const checkMetamask = async (eth): Promise<boolean> => {
  if (!eth) {
    return false;
  } else {
    return eth.isMetaMask;
  }
}