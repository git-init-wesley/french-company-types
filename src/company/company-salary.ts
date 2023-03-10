/**
 * An array of strings representing the available code of salary staff ranges.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/trancheEffectifsEtablissement)
 *
 * @version 09-2023
 * @type {Array<SalaryStaffRangeCodes>}
 */
export const SalaryStaffRangeCodes = [
    'NN',
    '00',
    '01',
    '02',
    '03',
    '11',
    '12',
    '21',
    '22',
    '31',
    '32',
    '41',
    '42',
    '51',
    '52',
    '53'
] as const

/**
 * A union type representing the possible code of salary staff ranges.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/trancheEffectifsEtablissement)
 *
 * @version 09-2023
 * @typedef {('NN' | '01' | '02' | '03' | '11' | '12' | '21' | '22' | '31' | '32' | '41' | '42' | '51' | '52' | '53')} SalaryStaffRangeCodes
 */
export type SalaryStaffRangeCode = typeof SalaryStaffRangeCodes[number]

/**
 * An object that maps salary staff range codes to corresponding range descriptions.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/trancheEffectifsEtablissement)
 *
 * @version 09-2023
 * @type {Record<SalaryStaffRangeCode, string>}
 */
export const SalaryStaffRanges: Record<SalaryStaffRangeCode, string> = {
    'NN': 'Etablissement non employeur',
    '00': '0 salarié',
    '01': '1 ou 2 salariés',
    '02': '3 à 5 salariés',
    '03': '6 à 9 salariés',
    '11': '10 à 19 salariés',
    '12': '20 à 49 salariés',
    '21': '50 à 99 salariés',
    '22': '100 à 199 salariés',
    '31': '200 à 249 salariés',
    '32': '250 à 499 salariés',
    '41': '500 à 999 salariés',
    '42': '1 000 à 1 999 salariés',
    '51': '2 000 à 4 999 salariés',
    '52': '5 000 à 9 999 salariés',
    '53': '10 000 salariés et plus'
} as const
