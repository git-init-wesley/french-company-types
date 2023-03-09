/**
 * A constant representing the possible company categories.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/categorieEntreprise)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/metadonnees/definition/c1057)
 *
 * @version 02-2021
 * @type {readonly CompanyCategories[]}
 */
export const CompanyCategories = [
    /**
     * Petites et Moyennes Entreprises
     *
     * @type {CompanyCategories}
     */
    'PME',
    /**
     * Entreprises de Taille Intermédiaire
     *
     * @type {CompanyCategories}
     */
    'ETI',
    /**
     * Grandes Entreprises
     *
     * @type {CompanyCategories}
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
 * @typedef {'PME' | 'ETI' | 'GE'} CompanyCategory
 */
export type CompanyCategory = typeof CompanyCategories[number]
