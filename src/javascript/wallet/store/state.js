// import Web3 from "web3"
// Note: 這裡 import 會蓋掉 browser 的 web3
 
// set the provider of web3
if (typeof web3 !== 'undefined') {
  // web3 = new Web3(web3.currentProvider)
  console.log("Get web3 provider")
} else {
  alert("No currentProvider for web3")
}

const state = {
  count: 0,
  funcationName: "",
  web3: web3,
  account: ""
}

export {state}
