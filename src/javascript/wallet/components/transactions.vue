<template>
  <div>
    <el-table
      :data="b"
      border
      style="width: 100%">
      <el-table-column
        prop="index"
        label="Index"
        width="80"
        align="center">
      </el-table-column>      
      <el-table-column
        prop="hash"
        label="Hash"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="timestamp"
        label="Timestamp"
        width="220"
        align="center">
      </el-table-column>
      <el-table-column 
        prop="from"
        label="From"
        align="center">
      </el-table-column>
      <el-table-column
        prop="to"
        label="To"
        align="center" >
      </el-table-column>
      <el-table-column
        prop="amount"
        label="Amount"
        align="center">
      </el-table-column>
      <el-table-column
        prop="status"
        label="Status"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gas"
        label="Fee"
        align="center">
      </el-table-column>                                                 
    </el-table>
  </div>
</template>

<script>
  import axios from 'axios';
  import {store} from "../store/store";
  export default {
    data() {
      return {
        b:[],
        account:'',
      }
    },
    methods:{
      created: function(){
        var self = this;
        //var address = this.getAddress();
        var address = '0x33b8287511ac7F003902e83D642Be4603afCd876';
        axios.get(`http://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken`)
        .then(function (response) {
            var block = response;
            var a = [];
            for(var i=0 ; i < block.data.result.length; i++){    
                a.push({
                  hash: block.data.result[i].hash,
                  timestamp: block.data.result[i].timeStamp,
                  from: block.data.result[i].from,
                  to: block.data.result[i].to,
                  amount: block.data.result[i].value ,
                  status: block.data.result[i].txreceipt_status,
                  gas: block.data.result[i].gasUsed,
                  gasprice: block.data.result[i].gasPrice,
                  index: i
                });
                self.setBlock(a,i);
            }
          self.$data.b = a;  
          console.log(a);
          console.log(self.b);
          })
        .catch(function (error) {
          console.log(error);
        });
      },  
      setBlock: function(block,i) {
        block[i].timestamp = this.toDate(block[i].timestamp);
        block[i].amount = this.amount(block[i].amount)+' ETH';   
        block[i].status = this.transcationStatus(block[i].status);
        block[i].gas = this.amount(block[i].gas*block[i].gasprice)+' ETH';
      },
      toDate: function(unix_timestamp){
        var a = new Date(unix_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = hour + ':' + min + ':' + sec + ' ' + month + '/' + date+ '/' + year ;
        return time;
      },
      amount: function(init_value){
        var value = (init_value/1e18);
        return value;
      },
      transcationStatus: function(txreceipt_status){
        var status;
        if(txreceipt_status === '1'){
          status = 'confirmed';
        } else if(txreceipt_status === '0'){
          status = 'rejected';
        } else{
          status = 'pending';
        }
        return status;
      },
      getAddress: function(){
        if (store.state.web3.eth.accounts[0] === undefined) {
          this.$alert('Please unlock your MetaMask.', 'Notice', {
            confirmButtonText: 'Enter',
            callback: action => {
              // this.$message({
              //   type: 'info',
              //   message: `action: ${ action }`
              // });
            }
          })
        } else {
          this.account = store.state.web3.eth.accounts[0]
          store.commit("updateAccount")
          return this.account;
        }
      }
    }         
  }    
</script>

