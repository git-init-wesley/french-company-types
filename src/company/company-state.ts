/**
 * An array of strings representing the available code of salary staff ranges.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/etatAdministratifUniteLegale)
 *
 * @version 09-2023
 * @type {Array<CompanyStateCodes>}
 */
export const CompanyStateCodes = [
    'A',
    'C',
] as const

/**
 * A union type representing the possible code of salary staff ranges.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/etatAdministratifUniteLegale)
 *
 * @version 09-2023
 * @typedef {('A' | 'C')} CompanyStateCodes
 */
export type CompanyStateCode = typeof CompanyStateCodes[number]

/**
 * An object that maps salary staff range codes to corresponding range descriptions.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/etatAdministratifUniteLegale)
 *
 * @version 09-2023
 * @type {Record<CompanyStateCode, string>}
 */
export const CompanyStates: Record<CompanyStateCode, string> = {
    'A': 'Active',
    'C': 'Cessée',
} as const
