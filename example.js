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
