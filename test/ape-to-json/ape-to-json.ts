import * as fs from "fs";
import type {APE, APE2008, APE_N5} from "../../src";

const ape: APE2008[] = require('./ape2008.json')

function removeDuplicates(arr: APE[]) {
    let unique: APE[] = [];
    arr.forEach((element: APE) => {
        if (!unique.find(e => e.code == element.code)) {
            unique.push(element);
        }
    });
    return unique;
}

let ape_n1: APE[] = []
let ape_n2: APE[] = []
let ape_n3: APE[] = []
let ape_n4: APE[] = []
let ape_n5: APE[] = []
let ape_n5_all: APE_N5[] = []

for (let i = 0; i < ape.length; i++) {
    ape_n1.push({
        code: ape[i].n1_code.toString(),
        label: ape[i].n1_label
    })
    ape_n2.push({
        code: ape[i].n2_code.toString(),
        label: ape[i].n2_label
    })
    ape_n3.push({
        code: ape[i].n3_code.toString(),
        label: ape[i].n3_label
    })
    ape_n4.push({
        code: ape[i].n4_code.toString(),
        label: ape[i].n4_label
    })
    ape_n5.push({
        code: ape[i].n5_code.toString(),
        label: ape[i].n5_label
    })
    ape_n5_all.push({
        code: ape[i].n5_code.toString(),
        I: {
            code: ape[i].n1_code.toString(),
            label: ape[i].n1_label
        },
        II: {
            code: ape[i].n2_code.toString(),
            label: ape[i].n2_label
        },
        III: {
            code: ape[i].n3_code.toString(),
            label: ape[i].n3_label
        },
        IV: {
            code: ape[i].n4_code.toString(),
            label: ape[i].n4_label
        },
        V: {
            code: ape[i].n5_code.toString(),
            label: ape[i].n5_label
        }
    })
}

ape_n1 = removeDuplicates(ape_n1)
ape_n2 = removeDuplicates(ape_n2)
ape_n3 = removeDuplicates(ape_n3)
ape_n4 = removeDuplicates(ape_n4)
ape_n5 = removeDuplicates(ape_n5)

fs.writeFile('./test/ape-to-json/ape/ape_n1.min.json', JSON.stringify(ape_n1), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/ape-to-json/ape/ape_n2.min.json', JSON.stringify(ape_n2), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/ape-to-json/ape/ape_n3.min.json', JSON.stringify(ape_n3), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/ape-to-json/ape/ape_n4.min.json', JSON.stringify(ape_n4), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/ape-to-json/ape/ape_n5.min.json', JSON.stringify(ape_n5), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/ape-to-json/ape/ape_n5.all.min.json', JSON.stringify(ape_n5_all), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

