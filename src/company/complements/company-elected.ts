/**
 * Interface representing an elected person.
 *
 * @interface CompanyElected
 */
export interface CompanyElected {
    /**
     * The last name of the elected person.
     * @type {string | undefined | null}
     * @memberOf CompanyElected
     */
    nom?: string | null

    /**
     * The first name(s) of the elected person.
     * @type {string | undefined | null}
     * @memberOf CompanyElected
     */
    prenoms?: string | null

    /**
     * The year of birth of the elected person.
     * @type {string | undefined | null}
     * @memberOf CompanyElected
     */
    annee_de_naissance?: string | null

    /**
     * The function/position held by the elected person.
     * @type {string | undefined | null}
     * @memberOf CompanyElected
     */
    fonction?: string | null

    /**
     * The gender of the elected person.
     * @type {string | undefined | null}
     * @memberOf CompanyElected
     */
    sexe?: string | null
}
