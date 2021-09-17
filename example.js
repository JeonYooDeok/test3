if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

const ethereumButton = document.querySelector('.connetMetamask');
const myAccount = document.querySelector('.myAccount');
const requestPermissionsButton = document.getElementById('requestPermissions')
const getPermissionsButton = document.getElementById('getPermissions')
const permissionsResult = document.getElementById('permissionsResult')

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


requestPermissionsButton.onclick = async () => {
    try {
        const permissionsArray = await ethereum.request({
            method: 'wallet_requestPermissions',
            params: [{
                eth_accounts: {}
            }],
        })
        permissionsResult.innerHTML = getPermissionsDisplayString(permissionsArray)
    } catch (err) {
        console.error(err)
        permissionsResult.innerHTML = `Error: ${err.message}`
    }
}

getPermissionsButton.onclick = async () => {
    try {
        const permissionsArray = await ethereum.request({
            method: 'wallet_getPermissions',
        })
        permissionsResult.innerHTML = getPermissionsDisplayString(permissionsArray)
    } catch (err) {
        console.error(err)
        permissionsResult.innerHTML = `Error: ${err.message}`
    }
}

getAccountsButton.onclick = async () => {
    try {
        const _accounts = await ethereum.request({
            method: 'eth_accounts',
        })
        getAccountsResults.innerHTML = _accounts[0] || 'Not able to get accounts'
    } catch (err) {
        console.error(err)
        getAccountsResults.innerHTML = `Error: ${err.message}`
    }
}
