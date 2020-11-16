(function () {
    'use strict';

    const ABI = [
        {
            "constant": true,
            "inputs": [],
            "name": "contractInfo",
            "outputs": [
                {
                    "name": "_total_users",
                    "type": "uint256"
                },
                {
                    "name": "_total_deposited",
                    "type": "uint256"
                },
                {
                    "name": "_total_withdraw",
                    "type": "uint256"
                },
                {
                    "name": "_pool_last_draw",
                    "type": "uint40"
                },
                {
                    "name": "_pool_balance",
                    "type": "uint256"
                },
                {
                    "name": "_pool_lider",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "pool_balance",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "userInfo",
            "outputs": [
                {
                    "name": "upline",
                    "type": "address"
                },
                {
                    "name": "deposit_time",
                    "type": "uint40"
                },
                {
                    "name": "deposit_amount",
                    "type": "uint256"
                },
                {
                    "name": "payouts",
                    "type": "uint256"
                },
                {
                    "name": "direct_bonus",
                    "type": "uint256"
                },
                {
                    "name": "pool_bonus",
                    "type": "uint256"
                },
                {
                    "name": "match_bonus",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "admin_widthdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "pool_bonuses",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "payoutOf",
            "outputs": [
                {
                    "name": "payout",
                    "type": "uint256"
                },
                {
                    "name": "max_payout",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "pool_users_refs_deposits_sum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_addr",
                    "type": "address"
                }
            ],
            "name": "userInfoTotals",
            "outputs": [
                {
                    "name": "referrals",
                    "type": "uint256"
                },
                {
                    "name": "total_deposits",
                    "type": "uint256"
                },
                {
                    "name": "total_payouts",
                    "type": "uint256"
                },
                {
                    "name": "total_structure",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "maxPayoutOf",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "pool_cycle",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "total_withdraw",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "pool_last_draw",
            "outputs": [
                {
                    "name": "",
                    "type": "uint40"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "users",
            "outputs": [
                {
                    "name": "cycle",
                    "type": "uint256"
                },
                {
                    "name": "upline",
                    "type": "address"
                },
                {
                    "name": "referrals",
                    "type": "uint256"
                },
                {
                    "name": "payouts",
                    "type": "uint256"
                },
                {
                    "name": "direct_bonus",
                    "type": "uint256"
                },
                {
                    "name": "pool_bonus",
                    "type": "uint256"
                },
                {
                    "name": "match_bonus",
                    "type": "uint256"
                },
                {
                    "name": "deposit_amount",
                    "type": "uint256"
                },
                {
                    "name": "deposit_payouts",
                    "type": "uint256"
                },
                {
                    "name": "deposit_time",
                    "type": "uint40"
                },
                {
                    "name": "total_deposits",
                    "type": "uint256"
                },
                {
                    "name": "total_payouts",
                    "type": "uint256"
                },
                {
                    "name": "total_structure",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "poolTopInfo",
            "outputs": [
                {
                    "name": "addrs",
                    "type": "address[4]"
                },
                {
                    "name": "deps",
                    "type": "uint256[4]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "cycles",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "ref_bonuses",
            "outputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "dev_fee",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint8"
                }
            ],
            "name": "pool_top",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "total_deposited",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "total_users",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_upline",
                    "type": "address"
                }
            ],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "name": "_dev_fee",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "upline",
                    "type": "address"
                }
            ],
            "name": "Upline",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "NewDeposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "DirectPayout",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "MatchPayout",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "PoolPayout",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "addr",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "LimitReached",
            "type": "event"
        }
    ];

    let contract, odometer;

    let VueTRON = {
        data() {
            return {
                tron: {
                    tronWeb: false,
                    auth: false,
                    account: ''
                }
            };
        },
        created() {
            let self = this,
                tries = 0;

            setTimeout(function initTimer() {
                if (!window.tronWeb) return ++tries < 50 ? setTimeout(initTimer, 100) : null;

                self.tron.tronWeb = !!window.tronWeb;

                window.tronWeb.on('addressChanged', function () {
                    self.tron.account = window.tronWeb.defaultAddress.base58;
                });

                setTimeout(function chechAuth() {
                    self.tron.auth = window.tronWeb && window.tronWeb.ready;
                    if (!self.tron.auth) setTimeout(chechAuth, 200);
                    else self.tron.account = window.tronWeb.defaultAddress.base58;
                }, 200);
            }, 100);
        },
        methods: {
            getTronWeb() {
                return new Promise((resolve, reject) => {
                    window.tronWeb ? resolve(window.tronWeb) : reject('TronWeb not found');
                });
            },
            awaitTx(tx) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve();
                    }, 8000);
                });
            }
        }
    };

    Vue.directive('timer', {
        bind(el, binding) {
            el.__time = binding.value;
            el.__timer = setInterval(() => {
                let f = v => (v < 10 ? '0' + v : v),
                    o = Math.abs(el.__time + 86400000 * 10000 - Date.now()),
                    d = Math.floor(o / 86400000),
                    h = Math.floor((o - d * 86400000) / 3600000),
                    m = Math.floor((o - d * 86400000 - h * 3600000) / 60000),
                    s = Math.floor((o - d * 86400000 - h * 3600000 - m * 60000) / 1000);

                el.innerText = el.__time > 0 ? f(h) + ':' + f(m) + ':' + f(s) : '00:00:00';
            }, 1000);
        },
        update(el, binding) {
            el.__time = binding.value;
        },
        unbind(el, binding) {
            clearInterval(el.__timer);
        }
    });

    // Main
    new Vue({
        mixins: [VueTRON],
        el: '#App',
        data: {
            tab: 'main',
            contract_address: 'TG23zAa7khKJbqyEaEg8HA9ddJYwDiLXWd',
            upline: '',
            contract: {
                balance: 0,
                total_users: 0,
                total_deposited: 0,
                total_withdraw: 0,
                pool_balance: 0,
                pool_last_draw: 0,
                pool_lider: 0
            },
            user: {
                balance: 0,
                payout: 0,
                upline: '',
                referrals: 0,
                payouts: 0,
                direct_bonus: 0,
                pool_bonus: 0,
                match_bonus: 0,
                deposit_amount: 0,
                deposit_time: 0,
                total_deposits: 0,
                total_payouts: 0,
                total_structure: 0
            },
            pool_top: [],
            rates: {},
            deposit_amount: 0,
            upmodal: {
                show: false,
                upline: document.querySelector('meta[name="upline"]').content,
                upline_edit: '',
                edit: false
            }
        },
        mounted() {
            // Upline
            var m = (location.hash + '; ' + document.cookie).match(/ref=(T[1-9A-HJ-NP-Za-km-z]{33})/i);
            if (m) {
                document.cookie = "ref=" + m[1] + "; path=/; expires=" + (new Date(new Date().getTime() + 86400 * 365 * 1000)).toUTCString();
                this.upline = this.upmodal.upline = m[1];
            }

            // Rates
            fetch('https://api.smartcontract.ru/gateway/rates_usd.json').then(r => r.json()).then(r => {
                this.rates = r.data;
                this.contract.balance = parseFloat(document.querySelector('meta[name="sc.balance"]').content);
            });

            if (!document.cookie.match(/coopolice=1/)) {
                this.notice('This website uses cookies for functionality, analytics and advertising purposes as described in our Privacy Policy. If you agree to our use of cookies, please continue to use our site.<br/><br/><a href="javascript:void()" style="color:#fff; text-decoration:none"><b>OK</b></a>', '007eff', 0)
                    .then(() => { document.cookie = 'coopolice=1; Max-Age=31536000; path=/'; });
            }

            $(window).on('focus', () => {
                this.updateInfo();
            });
        },
        watch: {
            'tron.account'() {
                this.getTronWeb().then(tronWeb => {
                    contract = tronWeb.contract(ABI, tronWeb.address.toHex(this.contract_address));
                    this.updateInfo();
                });
            },
            'contract.balance'() {
                if (!odometer) {
                    odometer = new Odometer({
                        el: this.$refs.odometer,
                        format: 'd,ddd,ddd',
                        theme: 'digital'
                    });
                }

                odometer.update(parseInt(this.contract.balance * this.rates.trx));
            }
        },
        methods: {
            // colors: primary = 007eff; success = 4caf50; warning = fb8c00; error = e53935
            notice(msg, color = '007eff', time = 3000) {
                return new Promise((resolve, reject) => {
                    let wrap = $('<div style="box-sizing:border-box; position:fixed; left:calc(50% - 160px); box-shadow:0 5px 25px rgba(0,0,0,0.2); width:320px; top:40px; background:#' + (color ? color : '007eff') + '; border-radius:10px; color:#fff; padding:20px 20px; text-transform:none; font:16px/1.2 Tahoma, sans-serif; cursor:pointer; z-index:999999; text-align:center;">' + msg + '</div>')
                        .on('click', () => { wrap.remove(); resolve(); })
                        .appendTo('body');
                    if (time > 0) setTimeout(() => { wrap.remove(); }, time);
                });
            },
            copyText(value) {
                let s = document.createElement('input');
                s.value = value;
                document.body.appendChild(s);

                if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                    s.contentEditable = true;
                    s.readOnly = false;
                    let range = document.createRange();
                    range.selectNodeContents(s);
                    let sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    s.setSelectionRange(0, 999999);
                }
                else s.select();

                try { document.execCommand('copy'); this.notice('Copied!', '4caf50'); }
                catch (err) { this.notice('Copy error', 'e53935'); }

                s.remove();
            },
            safe(value) {
                return this.tron.account ? value : '---';
            },
            updateInfo() {
                this.getTronWeb().then(tronWeb => {
                    tronWeb.trx.getBalance(this.contract_address).then(balance => {
                        this.contract.balance = parseInt(tronWeb.fromSun(balance));
                    });

                    tronWeb.trx.getBalance(this.tron.account).then(balance => {
                        this.user.balance = parseInt(tronWeb.fromSun(balance));
                    });

                    contract.contractInfo().call().then(res => {
                        this.contract.total_users = parseInt(res._total_users);
                        this.contract.total_deposited = parseInt(tronWeb.fromSun(res._total_deposited));
                        this.contract.total_withdraw = parseInt(tronWeb.fromSun(res._total_withdraw));
                        this.contract.pool_last_draw = parseInt(res._pool_last_draw);
                        this.contract.pool_balance = parseInt(tronWeb.fromSun(res._pool_balance));
                        this.contract.pool_lider = parseInt(tronWeb.fromSun(res._pool_lider));
                    });

                    contract.payoutOf(this.tron.account).call().then(res => {
                        this.user.payout = parseInt(tronWeb.fromSun(res.payout));
                        if (this.user.payout > 1e60) this.user.payout = 0;
                    });

                    contract.userInfo(this.tron.account).call().then(res => {
                        this.user.upline = res.upline.substr(2) != '0000000000000000000000000000000000000000' ? tronWeb.address.fromHex(res.upline) : '';
                        this.user.deposit_time = parseInt(res.deposit_time);
                        this.user.deposit_amount = parseInt(tronWeb.fromSun(res.deposit_amount));
                        this.user.payouts = parseInt(tronWeb.fromSun(res.payouts));
                        this.user.direct_bonus = parseInt(tronWeb.fromSun(res.direct_bonus));
                        this.user.pool_bonus = parseInt(tronWeb.fromSun(res.pool_bonus));
                        this.user.match_bonus = parseInt(tronWeb.fromSun(res.match_bonus));
                    });

                    contract.userInfoTotals(this.tron.account).call().then(res => {
                        this.user.referrals = parseInt(res.referrals);
                        this.user.total_deposits = parseInt(tronWeb.fromSun(res.total_deposits));
                        this.user.total_payouts = parseInt(tronWeb.fromSun(res.total_payouts));
                        this.user.total_structure = parseInt(res.total_structure);
                    });
                });
            },
            getPoolTopInfo() {
                this.getTronWeb().then(tronWeb => {
                    contract.poolTopInfo().call().then(res => {
                        this.pool_top = [];
                        for (let i = 0; i < res.addrs.length; i++) {
                            if (res.addrs[i].substr(2) == '0000000000000000000000000000000000000000') break;

                            this.pool_top.push({
                                address: tronWeb.address.fromHex(res.addrs[i]),
                                deposit: res.deps[i] / 1e6
                            });
                        }
                    });
                });
            },
            structure() {
                fetch('/tree/getLink/?address=' + tronWeb.address.toHex(this.tron.account)).then(r => r.json()).then(res => {
                    window.open(res.link);
                });
            },
            sendTx(name, address) {
                this.getTronWeb().then(tronWeb => {
                    (address ? tronWeb.contract(ABI, tronWeb.address.toHex(address)) : contract)[name]().send().then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            this.updateInfo();
                        });
                    });
                });
            },
            deposit(upline) {
                let auto_upline = false;

                if (!(this.deposit_amount >= 0.1)) return this.notice('Zero amount', 'fb8c00');
                //if(this.user.deposit_amount > 0 && Math.floor(this.user.deposit_amount * 2.1 - this.user.payouts) > 0) return this.notice('You did not receive all the income 210%. You need to get ' + (this.user.deposit_amount * 2.1 - this.user.payouts).toFixed(2) + ' TRX.<br/>Make a new deposit when you receive all the income.', 'fb8c00');
                if (!this.tron.account) return this.notice('To join the project you need to use the Tron wallet. Read more <a href="https://etherchain.io/tutorial">here</a>', 'fb8c00');
                //if(this.user.balance < this.deposit_amount) return this.notice('To join the project you need to have TRX in your wallet.<br/>If you just received funds to your wallet, wait 1 minute for network confirmation and try again', 'fb8c00');
                if (this.user.deposit_amount > 0 && this.deposit_amount < this.user.deposit_amount) return this.notice('You are trying to make a deposit less than your last deposit<br/>Use an amount no less than the previous deposit', 'fb8c00');

                if (this.user.total_deposits == 0) {
                    if (upline) {
                        if (upline.toLowerCase() == this.tron.account.toLowerCase()) {
                            upline = 'TRDPTjYfMHZ9AwXQpUwPjpJ4f8KjMKWnVy';
                            auto_upline = true;
                        }
                        this.upline = upline;
                    }
                    else return this.upmodal.show = true;
                }
                else if (!this.upline) this.upline = 'TRDPTjYfMHZ9AwXQpUwPjpJ4f8KjMKWnVy';

                this.getTronWeb().then(tronWeb => {
                    contract.deposit(this.upline).send({
                        callValue: tronWeb.toSun(this.deposit_amount.toFixed(2))
                    }).then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            if (auto_upline) fetch('/auto_upline/?address=' + this.tron.account + '&upline=' + this.upline);
                            this.updateInfo();
                        });
                    });
                });
            },
            withdraw() {
                if (!this.tron.account) return this.notice('To join the project you need to use the Tron wallet. Read more <a href: https://etherchain.io/tutorial/>here</a>', 'fb8c00');
                if (this.user.payout + this.user.direct_bonus + this.user.match_bonus + this.user.pool_bonus < 5) return this.notice('To withdraw funds, wait when the amount of income exceeds 5 TRX (because of gas fee)', 'fb8c00');
                if (this.user.payouts >= this.user.deposit_amount * 2.1) return this.notice('You have reached the 210% limit<br/>To get income again make a new deposit', 'fb8c00');

                this.getTronWeb().then(tronWeb => {
                    contract.withdraw().send().then(tx => {
                        this.notice('Transaction was successfully sent. Wait confirming..', '4caf50');
                        this.awaitTx(tx).then(() => {
                            this.updateInfo();
                        });
                    });
                });
            }
        }
    });
})();