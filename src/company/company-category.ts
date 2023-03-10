/**
 * A constant representing the possible company categories.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/categorieEntreprise)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/metadonnees/definition/c1057)
 *
 * @version 02-2021
 * @type {readonly CompanyCategoryCodes[]}
 */
export const CompanyCategoryCodes = [
    /**
     * Petites et Moyennes Entreprises
     *
     * @type {CompanyCategoryCodes}
     */
    'PME',
    /**
     * Entreprises de Taille Intermédiaire
     *
     * @type {CompanyCategoryCodes}
     */
    'ETI',
    /**
     * Grandes Entreprises
     *
     * @type {CompanyCategoryCodes}
     */
    'GE'
] as const

/**
 * An array of company categories.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/categorieEntreprise)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/metadonnees/definition/c1057)
 *
 * @version 02-2021
 * @typedef {'PME' | 'ETI' | 'GE'} CompanyCategoryCode
 */
export type CompanyCategoryCode = typeof CompanyCategoryCodes[number]

/**
 * An array of company categories.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/categorieEntreprise)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/metadonnees/definition/c1057)
 *
 * @version 02-2021
 * @typedef {'PME' | 'ETI' | 'GE'} CompanyCategoryCode
 */
export const CompanyCategories: Record<CompanyCategoryCode, string> = {
    'PME': 'Petites et Moyennes Entreprises dont les microentreprises',
    'ETI': 'Entreprises de Taille Intermédiaire',
    'GE': 'Grandes Entreprises'
} as const
