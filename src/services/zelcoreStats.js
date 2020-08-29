const request = require('request-promise-native');

function apiRequest(url) {
  return request({ uri: url, json: true })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log("ERROR: " + url)
      return error
    })
}


function apiRequestExplorer(url) {
  return request({uri: url, simple: false, resolveWithFullResponse: true})
    .then(() => {
      return 'ok';
    })
    .catch((error) => {
      console.log(error);
      console.log("ERROR: " + url)
      return error
    })
}

function apiRequestPOST(url, data) {
  var options = {
    method: 'POST',
    uri: url,
    body: data,
    json: true
  };
  return request(options)
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log("ERROR: " + url)
      return error
    })
}

var zelcoreRates = {
  getAll() {
    return Promise.all([
      // explorer.zel.cash
      apiRequest('https://explorer.zel.cash/api/addr/t3c51GjrkUg7pUiS8bzNdTnW2hD25egWUih'), // 0
      apiRequest('https://explorer.zel.cash/api/sync'), // 1
      // explorer2.zel.cash
      apiRequest('https://explorer2.zel.cash/api/addr/t3c51GjrkUg7pUiS8bzNdTnW2hD25egWUih'), // 2
      apiRequest('https://explorer2.zel.cash/api/sync'), // 3
      // explorer2.zel.cash
      apiRequest('https://explorer.zel.zelcore.io/api/addr/t3c51GjrkUg7pUiS8bzNdTnW2hD25egWUih'), // 4
      apiRequest('https://explorer.zel.zelcore.io/api/sync'), // 5
      // explorer.zelcash.online
      apiRequest('https://explorer.zelcash.online/api/addr/t3c51GjrkUg7pUiS8bzNdTnW2hD25egWUih'), // 6
      apiRequest('https://explorer.zelcash.online/api/sync'), // 7
      // explorer-asia.zel.cash
      apiRequest('https://explorer-asia.zel.cash/api/addr/t3c51GjrkUg7pUiS8bzNdTnW2hD25egWUih'), // 8
      apiRequest('https://explorer-asia.zel.cash/api/sync'), // 9
      // explorer.anon.zelcore.io
      apiRequest('https://explorer.anon.zelcore.io/api/addr/AnY5LGSDdUgawBW8TQuFL1fJeTbswo65xeK'), // 10
      apiRequest('https://explorer.anon.zelcore.io/api/sync'), // 11
      // explorer.dash.zelcore.io
      apiRequest('https://explorer.dash.zelcore.io/api/addr/XmCgmabJL2S8DJ8tmEvB8QDArgBbSSMJea'), // 12
      apiRequest('https://explorer.dash.zelcore.io/api/sync'), // 13
      // explorer.bze.zelcore.io
      apiRequest('https://explorer.bze.zelcore.io/api/addr/t1UPSwfMYLe18ezbCqnR5QgdJGznzCUYHkj'), // 14
      apiRequest('https://explorer.bze.zelcore.io/api/sync'), // 15
      // explorer.zcoin.zelcore.io
      apiRequest('https://explorer.zcoin.zelcore.io/api/addr/aBEJgEP2b7DP7tyQukv639qtdhjFhWp2QE'), // 16
      apiRequest('https://explorer.anon.zelcore.io/api/sync'), // 17
      // explorer.btcz.zelcore.io
      apiRequest('https://explorer.btcz.zelcore.io/api/addr/t1UPSwfMYLe18ezbCqnR5QgdJGznzCUYHkj'), // 18
      apiRequest('https://explorer.btcz.zelcore.io/api/sync'), // 19
      // explorer.zer.zelcore.io
      apiRequest('https://explorer.zer.zelcore.io/api/addr/t1UPSwfMYLe18ezbCqnR5QgdJGznzCUYHkj'), // 20
      apiRequest('https://explorer.zer.zelcore.io/api/sync'), // 21
      // explorer.kmd.zelcore.io
      apiRequest('https://explorer.kmd.zelcore.io/api/addr/RKo31qpgy9278MuWNXb5NPranc4W6oaUFf'), // 22
      apiRequest('https://explorer.kmd.zelcore.io/api/sync'), // 23
      // explorer.rvn.zelcore.io
      apiRequest('https://explorer.rvn.zelcore.io/api/addr/RKo31qpgy9278MuWNXb5NPranc4W6oaUFf'), // 24
      apiRequest('https://explorer.rvn.zelcore.io/api/sync'), // 25
      // explorer.zcl.zelcore.io
      apiRequest('https://explorer.zcl.zelcore.io/api/addr/t1UPSwfMYLe18ezbCqnR5QgdJGznzCUYHkj'), // 26
      apiRequest('https://explorer.zcl.zelcore.io/api/sync'), // 27
      // explorer.safe.zelcore.io
      apiRequest('https://explorer.safe.zelcore.io/api/addr/Rj8dzx7ygKUywo3bPwvPrX8NR7KSmnKHca'), // 28
      apiRequest('https://explorer.safe.zelcore.io/api/sync'), // 29
      // explorer.cmm.zelcore.io
      apiRequest('https://explorer.cmm.zelcore.io/api/addr/CSyjWNHUFNC4xVSjb6vsrP9QeTpKNRMLZP'), // 30
      apiRequest('https://explorer.cmm.zelcore.io/api/sync'), // 31
      // explorer.btc.zelcore.io
      apiRequest('https://explorer.btc.zelcore.io/api/addr/1BWqwKwQNKDY4MYJuMbxGsXP2LbuNGzQ4m'), // 32
      apiRequest('https://explorer.btc.zelcore.io/api/sync'), // 33
      // explorer.zec.zelcore.io
      apiRequest('https://explorer.zec.zelcore.io/api/addr/t1UPSwfMYLe18ezbCqnR5QgdJGznzCUYHkj'), // 34
      apiRequest('https://explorer.zec.zelcore.io/api/sync'), // 35
      // explorer.axe.zelcore.io
      apiRequest('https://explorer.axe.zelcore.io/api/addr/PK726JLFREhj3CD5FRvUwmVee5mnX7g4ia'), // 36
      apiRequest('https://explorer.axe.zelcore.io/api/sync'), // 37
      // explorer.btx.zelcore.io
      apiRequest('https://explorer.btx.zelcore.io/api/addr/2PXeteqGVrcAWexZycbujFLjurNjXhqDXo'), // 38
      apiRequest('https://explorer.btx.zelcore.io/api/sync'), // 39
      // explorer.ltc.zelcore.io
      apiRequest('https://explorer.ltc.zelcore.io/api/addr/LVjoCYFESyTbKAEU5VbFYtb9EYyBXx55V5'), // 40
      apiRequest('https://explorer.ltc.zelcore.io/api/sync'), // 41
      // explorer.xsg.zelcore.io
      apiRequest('https://explorer.xsg.zelcore.io/api/addr/s1XibA2S46fGxtaWjKNTBadS1eMh9s9eGrD'), // 42
      apiRequest('https://explorer.xsg.zelcore.io/api/sync'), // 43

      // blockbook.zel.network
      apiRequest('https://blockbook.zel.network/api/v2/address/t1UPSwfMYLe18ezbCqnR5QgdJGznzCUYHkj?pageSize=50'), // 44
      apiRequest('https://blockbook.zel.network/api/sync'), // 45
      // explorer.etc.zelcore.io // blockbook
      apiRequest('https://explorer.etc.zelcore.io/api/v2/address/0x0e009d19cb4693fcf2d15aaf4a5ee1c8a0bb5ecf?pageSize=50'), // 46
      apiRequest('https://explorer.etc.zelcore.io/api/sync'), // 47
      // blockbook.btc.zelcore.io
      apiRequest('https://blockbook.btc.zelcore.io/api/v2/address/1BWqwKwQNKDY4MYJuMbxGsXP2LbuNGzQ4m?pageSize=50'), // 48
      apiRequest('https://blockbook.btc.zelcore.io/api/sync'), // 49
      // blockbook.btc.zelcore.io
      apiRequest('https://blockbook.ltc.zelcore.io/api/v2/address/LVjoCYFESyTbKAEU5VbFYtb9EYyBXx55V5?pageSize=50'), // 50
      apiRequest('https://blockbook.ltc.zelcore.io/api/sync'), // 51

      // GENX check. Just one check to check proxy, node, electrumx
      apiRequest('https://proxy.genx.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=genesis&call=nicehistory&param=CSyjWNHUFNC4xVSjb6vsrP9QeTpKNRMLZP'), // 52
      // GRS check. Just one check to check proxy, node, electrumx
      apiRequest('https://proxy.grs.zelcore.io/?server=127.0.0.1&port=56002&contype=tls&coin=groestlcoin&call=nicehistory&param=FfgZPEfmvou5VxZRnTbRjPKhgVsrx7Qjq9'), // 53
      // DGB check. Just one check to check proxy, node, electrumx
      apiRequest('https://proxy.dgb.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=digibyte&call=nicehistory&param=DFewUat3fj7pbMiudwbWpdgyuULCiVf6q8'), // 54
      // DOGE check. Just one check to check proxy, node, electrumx
      apiRequest('https://proxy.doge.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=dogecoin&call=nicehistory&param=DFewUat3fj7pbMiudwbWpdgyuULCiVf6q8'), // 55
      // BTH check. Just one check to check proxy, node, electrumx
      apiRequest('https://proxy.bth.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=bithereum&call=nicehistory&param=BExvZ3Pc7poSWC2UWqvvQ1L3kx3VDdrERo'), // 56
      // SIN check. Just one check to check proxy, node, electrumx
      apiRequest('https://proxy.sin.zelcore.io/?server=127.0.0.1&port=50002&contype=tls&coin=sinovate&call=nicehistory&param=SXoqyAiZ6gQjafKmSnb2pmfwg7qLC8r4Sf'), // 57

      // GENX explorer
      apiRequestExplorer('https://explorer.genx.zelcore.io'), // 58
      // GRS explorer
      apiRequestExplorer('https://explorer.grs.zelcore.io'), // 59
      // DGB explorer
      apiRequestExplorer('https://explorer.dgb.zelcore.io'), // 60
      // DOGE explorer
      apiRequestExplorer('https://explorer.doge.zelcore.io'), // 61
      // BTH explorer
      apiRequestExplorer('https://explorer.bth.zelcore.io'), // 62
      // SIN explorer
      apiRequestExplorer('https://explorer.sin.zelcore.io'), // 63

      // VBK transactions
      apiRequest('https://explorer.vbk.zelcore.io/api/address/VBZ3J16cLrhxeEwZvswQSucfrFKvMF/transaction-normal?count=50'), // 64

      // VBK balance - node and its proxy
      apiRequestPOST('https://proxy.vbk.zelcore.io/addressesbalance', {
        addresses: ['VBZ3J16cLrhxeEwZvswQSucfrFKvMF']
      }), // 65

      // END OF OUR SERVICES

      // THIRS PARTY SERVICES USED TODO


      // https://blockscout.com/etc/mainnet/api/?module=account&action=txlist&address=0x0e009d19cb4693fcf2d15aaf4a5ee1c8a0bb5ecf outside etc transactions

    ]).then((results) => {
      var ok = []
      var errors = []

      function checkInsight(i, j, name) {
        try {
          if (results[i] instanceof Error) {
            throw results[i]
          }
          if (results[j] instanceof Error) {
            throw results[j]
          }
          if (results[i].transactions.length > 0 && results[j].status === 'finished') {
            ok.push(name)
          } else {
            throw new Error(name, 500)
          }
        } catch (e) {
          errors.push(name)
        }
      }

      function checkBlockBook(i, j, name) {
        try {
          if (results[i] instanceof Error) {
            throw results[i]
          }
          if (results[j] instanceof Error) {
            throw results[j]
          }
          // or txs > 0 as txids may not be there
          if (results[i].txids.length > 0 && results[j].blockbook.inSync === true && results[j].blockbook.bestHeight === results[j].backend.blocks) { // last check not needed
            ok.push(name)
          } else {
            throw new Error(name, 500)
          }
        } catch (e) {
          errors.push(name)
        }
      }

      function checkElectrumx(i, name) {
        try {
          if (results[i] instanceof Error) {
            throw results[i]
          }
          if (results[i].length > 0) {
            ok.push(name)
          } else {
            throw new Error(name, 500)
          }
        } catch (e) {
          errors.push(name)
        }
      }

      function checkExplorer(i, name) {
        try {
          if (results[i] instanceof Error) {
            throw results[i]
          }
          ok.push(name)
        } catch (e) {
          errors.push(name)
        }
      }

      function checkVeriblockTransactions(i, name) {
        try {
          if (results[i] instanceof Error) {
            throw results[i]
          }
          if (results[i].length > 0) {
            ok.push(name)
          } else {
            throw new Error(name, 500)
          }
        } catch (e) {
          errors.push(name)
        }
      }

      function checkVeriblockBalance(i, name) {
        try {
          if (results[i] instanceof Error) {
            throw results[i]
          }
          const confirmedObject = results[i].result.confirmed.find((a) => a.address === 'VBZ3J16cLrhxeEwZvswQSucfrFKvMF');
          const confirmedBal = confirmedObject.unlockedAmount;
          console.log(confirmedBal)
          if (confirmedBal > 0) {
            ok.push(name)
          } else {
            throw new Error(name, 500)
          }
        } catch (e) {
          errors.push(name)
        }
      }

      checkInsight(0, 1, 'explorer.zel.cash');
      checkInsight(2, 3, 'explorer2.zel.cash');
      checkInsight(4, 5, 'explorer.zel.zelcore.io');
      checkInsight(6, 7, 'explorer.zelcash.online');
      checkInsight(8, 9, 'explorer-asia.zel.cash');
      checkInsight(10, 11, 'explorer.anon.zelcore.io');
      checkInsight(12, 13, 'explorer.dash.zelcore.io');
      checkInsight(14, 15, 'explorer.bze.zelcore.io');
      checkInsight(16, 17, 'explorer.zcoin.zelcore.io');
      checkInsight(18, 19, 'explorer.btcz.zelcore.io');
      checkInsight(20, 21, 'explorer.zer.zelcore.io');
      checkInsight(22, 23, 'explorer.kmd.zelcore.io');
      checkInsight(24, 25, 'explorer.rvn.zelcore.io');
      checkInsight(26, 27, 'explorer.zcl.zelcore.io');
      checkInsight(28, 29, 'explorer.safe.zelcore.io');
      checkInsight(30, 31, 'explorer.cmm.zelcore.io');
      checkInsight(32, 33, 'explorer.btc.zelcore.io');
      checkInsight(34, 35, 'explorer.zec.zelcore.io');
      checkInsight(36, 37, 'explorer.axe.zelcore.io');
      checkInsight(38, 39, 'explorer.btx.zelcore.io');
      checkInsight(40, 41, 'explorer.ltc.zelcore.io');
      checkInsight(42, 43, 'explorer.xsg.zelcore.io');

      checkBlockBook(44, 45, 'blockbook.zel.network');
      checkBlockBook(46, 47, 'explorer.etc.zelcore.io');
      checkBlockBook(48, 49, 'blockbook.btc.zelcore.io');
      checkBlockBook(50, 51, 'blockbook.ltc.zelcore.io');

      checkElectrumx(52, 'proxy.genx.zelcore.io');
      checkElectrumx(53, 'proxy.grs.zelcore.io');
      checkElectrumx(54, 'proxy.dgb.zelcore.io');
      checkElectrumx(55, 'proxy.doge.zelcore.io');
      checkElectrumx(56, 'proxy.bth.zelcore.io');
      checkElectrumx(57, 'proxy.sin.zelcore.io');

      checkExplorer(58, 'explorer.genx.zelcore.io');
      checkExplorer(59, 'explorer.grs.zelcore.io');
      checkExplorer(60, 'explorer.dgb.zelcore.io');
      checkExplorer(61, 'explorer.doge.zelcore.io');
      checkExplorer(62, 'explorer.bth.zelcore.io');
      checkExplorer(63, 'explorer.sin.zelcore.io');

      checkVeriblockTransactions(64, 'explorer.vbk.zelcore.io');
      checkVeriblockBalance(65, 'proxy.vbk.zelcore.io');

      const statuses = {};
      statuses.ok = ok;
      statuses.errors = errors;

      return statuses;
    });
  },
};

module.exports = zelcoreRates;
