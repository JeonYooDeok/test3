if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

const ethereumButton = document.querySelector('.connetMetamask');
const myAccount = document.querySelector('.myAccount');

ethereumButton.addEventListener('click', () => {
    getAccount();
});

async function getAccount() {
    const accounts = await ethereum.request({
        method: 'eth_requestAccounts'
    });
    const account = accounts[0];
    myAccount.innerHTML = account;
}


//https://docs.metamask.io/guide/rpc-api.html#permissions

function connect() {
    ethereum.request({
            method: 'eth_requestAccounts'
        })
        .then(handleAccountsChanged)
        .catch((error) => {
            if (error.code === 4001) {
                // EIP-1193 userRejectedRequest error
                console.log('Please connect to MetaMask.');
            } else {
                console.error(error);
            }
        });
}