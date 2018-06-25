const fetch = require('node-fetch');
const config = require('../config');

const headers = {};
headers['OS'] = '3';
headers['OS-VERSION'] = '3';
headers['DEVICE-ID'] = 'h5';
headers['DEVICE-TYPE'] = 'h5';
headers['PUSH-ID'] = '10086';
headers['CLIENT'] = '1002';
headers['Content-Type'] = 'application/json';
headers['BIT-CID'] = '5a82adf3b06c97e0cd6c0f3d';
headers['BIT-UID'] = '5ab8bf9de4b0eb5599459a5d';

module.exports = function(token) {
    headers['BIT-TOKEN'] = token;
    this.getDetail = function() {
        const option = {
            method: 'GET',
            headers: headers,
            timeout: 5000,
        }
        return fetch(config.dev.root +'/property/fault/5b13aff8d5de6b200a435aee/detail', option)
    }

    this.signIn = function(body) {
        const option = {
            body: JSON.stringify(body),
            method: 'POST',
            headers: headers,
            timeout: 5000,
        }
        return fetch(config.dev.root +'/user/signIn', option)
    }

    this.getTable = function(query) {
        const option = {
            method: 'GET',
            headers: headers,
            timeout: 5000,
        }
        return fetch(config.dev.root +`/community/building/page?page=${query.page}`, option)
    }

    this.ossGet = function(query) {
        const option = {
            method: 'GET',
            headers: headers,
            timeout: 5000,
        }
        return fetch(config.dev.root +`/oss/sts-token/read-only`, option)
    }
    return this;
}