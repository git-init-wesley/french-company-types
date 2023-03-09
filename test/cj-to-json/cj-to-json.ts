import * as fs from "fs";
import type {CJ, CJ_LATEST, CJ_N3} from "../../src";

const cj: CJ_LATEST = require('./cj072022.json')

function removeDuplicates(arr: CJ[]) {
    let unique: CJ[] = [];
    arr.forEach((element: CJ) => {
        if (!unique.find(e => e.code == element.code)) {
            unique.push(element);
        }
    });
    return unique;
}

let cj_n1: CJ[] = []
let cj_n2: CJ[] = []
let cj_n3: CJ[] = []
let cj_n3_all: CJ_N3[] = []

for (let i in cj) {
    for (let j = 0; j < cj[i].length; j++) {
        const currentCj: CJ = cj[i][j] as CJ
        if (i === "I") cj_n1.push({
            code: currentCj.code?.toString(),
            label: currentCj.label
        })
        if (i === "II") cj_n2.push({
            code: currentCj.code?.toString(),
            label: currentCj.label
        })
        if (i === "III") cj_n3.push({
            code: currentCj.code?.toString(),
            label: currentCj.label
        })
    }
}

for (let i = 0; i < cj_n3.length; i++) {
    const n3_code = cj_n3[i].code
    const cj1: CJ = cj_n1.find((f) => f.code?.toLowerCase() === n3_code.slice(0, 1)?.toLowerCase())
    const cj2: CJ = cj_n2.find((f) => f.code?.toLowerCase() === n3_code.slice(1, 3)?.toLowerCase())
    const cj3: CJ = cj_n3[i]
    cj_n3_all.push({
        code: n3_code?.toString(),
        I: {
            code: cj1?.code?.toString(),
            label: cj1?.label
        },
        II: {
            code: cj2?.code?.toString(),
            label: cj2?.label
        },
        III: {
            code: cj3?.code?.toString(),
            label: cj3?.label
        },
    })
}

cj_n1 = removeDuplicates(cj_n1)
cj_n2 = removeDuplicates(cj_n2)
cj_n3 = removeDuplicates(cj_n3)

fs.writeFile('./test/cj-to-json/cj/cj_n1.min.json', JSON.stringify(cj_n1), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/cj-to-json/cj/cj_n2.min.json', JSON.stringify(cj_n2), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/cj-to-json/cj/cj_n3.min.json', JSON.stringify(cj_n3), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})

fs.writeFile('./test/cj-to-json/cj/cj_n3.all.min.json', JSON.stringify(cj_n3_all), (err) => {
    if (err) console.log(err)
    else console.log('sucess')
})
