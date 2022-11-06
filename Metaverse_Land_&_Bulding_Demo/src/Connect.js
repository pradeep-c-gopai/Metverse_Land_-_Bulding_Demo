import abi from "./abi/abi.json" assert {type: "json"};

const connect = new Promise((res,re)=>{
    
    if(typeof window.ethereum == "undefined"){
     
        rej("Install Metamask");
    
    }
    
    window.ethereum.request({method: "eth_requestAccounts"});
    
    let web3 = new Web3(window.ethereum);

    let contract = new web3.eth.Contract(abi,"0x5eBB1efCDaF599b6e7F6d7737DeaC4c3cC089407");
    
    web3.eth.getAccounts().then((accounts) => {

        contract.methods

        .totalSupply()

        .call({from: accounts[0]})

        .then((supply)=>{

            contract.methods

            .getBuildings()

            .call({from: accounts[0]})

            .then((data)=>{

                res({supply: supply, buildings: data});

            });

        });

    });
    
}); 


export default connect;