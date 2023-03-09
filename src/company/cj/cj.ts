/* tslint:disable:class-name */
/**
 * Interface representing a Legal Category Collection
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/categorieJuridiqueUniteLegale)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/information/2028129)
 *
 * @version 07-2022
 * @interface CJ_LATEST
 */
export interface CJ_LATEST {
    /**
     * The collection of Legal Categories for section I
     * @type {CJ[] | undefined}
     * @memberOf CJ_LATEST
     */
    "I"?: CJ[]
    /**
     * The collection of Legal Categories for section II
     * @type {CJ[] | undefined}
     * @memberOf CJ_LATEST
     */
    "II"?: CJ[]
    /**
     * The collection of Legal Categories for section III
     * @type {CJ[] | undefined}
     * @memberOf CJ_LATEST
     */
    "III"?: CJ[]
}

/**
 * Interface representing a Legal Category
 * @interface CJ
 */
export interface CJ {
    /**
     * The code of the Legal Category
     * @type {string | undefined}
     * @memberOf CJ
     */
    code?: string
    /**
     * The label of the Legal Category
     * @type {string | undefined}
     * @memberOf CJ
     */
    label?: string
}

/**
 * Interface representing a Legal Category Objec
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/categorieJuridiqueUniteLegale)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/information/2028129)
 *
 * @version 07-2022
 * @interface CJ_N3
 */
export interface CJ_N3 {
    /**
     * The code of the Legal Category
     * @type {string | undefined}
     * @memberOf CJ_N3
     */
    code?: string
    /**
     * The Legal Category for section I
     * @type {CJ | undefined}
     * @memberOf CJ_N3
     */
    "I"?: CJ
    /**
     * The Legal Category for section II
     * @type {CJ | undefined}
     * @memberOf CJ_N3
     */
    "II"?: CJ
    /**
     * The Legal Category for section III
     * @type {CJ | undefined}
     * @memberOf CJ_N3
     */
    "III"?: CJ
}
