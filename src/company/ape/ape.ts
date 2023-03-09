/* tslint:disable:class-name */
/**
 * Interface representing an APE2008 code
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/activitePrincipaleUniteLegale)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/information/2406147)
 *
 * **Version** `NAF REV 2`
 *
 * **Version** `CPF REV 2.1`
 *
 * @version 2008
 * @interface APE2008
 */
export interface APE2008 {
    /**
     * The code of the activity at level 1.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n1_code?: string

    /**
     * The label of the activity at level 1.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n1_label?: string

    /**
     * The code of the activity at level 2.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n2_code?: number

    /**
     * The label of the activity at level 2.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n2_label?: string

    /**
     * The code of the activity at level 3.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n3_code?: number

    /**
     * The label of the activity at level 3.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n3_label?: string

    /**
     * The code of the activity at level 4.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n4_code?: number

    /**
     * The label of the activity at level 4.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n4_label?: string

    /**
     * The code of the activity at level 5.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n5_code?: string

    /**
     * The label of the activity at level 5.
     * @type {string | undefined}
     * @memberOf APE2008
     */
    n5_label?: string
}

/**
 * Interface representing an APE code
 * @interface APE
 */
export interface APE {
    /**
     * The code of the activity
     * @type {string | undefined}
     * @memberOf APE
     */
    code?: string
    /**
     * The label of the activity
     * @type {string | undefined}
     * @memberOf APE
     */
    label?: string
}

/**
 * An interface representing the APE (Activité Principale Exercée) code at level 5 with all ref levels.
 *
 * **Source SIRENE** [link](https://www.sirene.fr/sirene/public/variable/activitePrincipaleUniteLegale)
 *
 * **Source INSEE** [link](https://www.insee.fr/fr/information/2406147)
 *
 * **Version** `NAF REV 2`
 *
 * **Version** `CPF REV 2.1`
 * @version 2008
 * @interface APE_N5
 */
export interface APE_N5 {
    /**
     * The APE code at level 5.
     *
     * @type {string}
     * @memberOf APE_N5
     */
    code: string,
    /**
     * The first category of the APE code at level 5.
     *
     * @type {APE}
     * @memberOf APE_N5
     */
    "I": APE,
    /**
     * The second category of the APE code at level 5.
     *
     * @type {APE}
     * @memberOf APE_N5
     */
    "II": APE,
    /**
     * The third category of the APE code at level 5.
     *
     * @type {APE}
     * @memberOf APE_N5
     */
    "III": APE,
    /**
     * The fourth category of the APE code at level 5.
     *
     * @type {APE}
     * @memberOf APE_N5
     */
    "IV": APE,
    /**
     * The fifth category of the APE code at level 5.
     *
     * @type {APE}
     * @memberOf APE_N5
     */
    "V": APE
}

