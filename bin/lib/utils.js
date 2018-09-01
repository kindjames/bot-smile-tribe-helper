"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const node_fetch_1 = require("node-fetch");
const ramda_1 = require("ramda");
const ramda_adjunct_1 = require("ramda-adjunct");
const util_1 = require("util");
exports.report = (label) => ramda_1.tap(ramda_1.pipe(ramda_1.cond([
    [ramda_1.either(ramda_adjunct_1.isNull, ramda_adjunct_1.isUndefined), ramda_1.always('')],
    [ramda_adjunct_1.isObjectLike, ramda_1.pipe(exports.toJson, ramda_1.concat(' \n'))],
    [ramda_1.T, x => ' ' + x]
]), ramda_1.when(ramda_adjunct_1.isObjectLike, exports.toJson), ramda_1.concat(label), console.log));
exports.writeFile = ramda_1.curryN(2, util_1.promisify(fs.writeFile));
exports.readFile = ramda_1.curryN(1, util_1.promisify(fs.readFile));
exports.toJson = (x) => JSON.stringify(x, null, 2);
exports.fromJson = JSON.parse;
exports.delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
exports.downloadText = ramda_1.pipe(exports.report('> downloading'), node_fetch_1.default, ramda_adjunct_1.thenP(ramda_1.invoker(0, 'text')));
exports.downloadJson = ramda_1.pipe(exports.report('> downloading'), node_fetch_1.default, ramda_adjunct_1.thenP(ramda_1.invoker(0, 'json')));
exports.buildUrl = (baseUrl, params = {}) => ramda_1.pipe(ramda_1.toPairs, ramda_1.map(ramda_1.join('=')), ramda_1.join('&'), ramda_1.unless(ramda_1.isEmpty, ramda_1.concat('?')), ramda_1.concat(baseUrl))(params);
