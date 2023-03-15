/**
 * An array of strings representing the available code of salary staff ranges.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/etatAdministratifEtablissement)
 *
 * @version 09-2023
 * @type {Array<CompanyEstablishmentStateCodes>}
 */
export const CompanyEstablishmentStateCodes = [
    'A',
    'F',
] as const

/**
 * A union type representing the possible code of salary staff ranges.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/etatAdministratifEtablissement)
 *
 * @version 09-2023
 * @typedef {('A' | 'F')} CompanyEstablishmentStateCodes
 */
export type CompanyEstablishmentStateCode = typeof CompanyEstablishmentStateCodes[number]

/**
 * An object that maps salary staff range codes to corresponding range descriptions.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/etatAdministratifEtablissement)
 *
 * @version 09-2023
 * @type {Record<CompanyEstablishmentStateCode, string>}
 */
export const CompanyEstablishmentStates: Record<CompanyEstablishmentStateCode, string> = {
    'A': 'Actif',
    'F': 'Fermé',
} as const
