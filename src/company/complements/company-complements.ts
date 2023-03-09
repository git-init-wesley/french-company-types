import {CompanyTerritorial} from "./company-territorial"

export * from './company-territorial'

/**
 * Additional information about a user or entity
 *
 * @interface CompanyComplements
 */
export interface CompanyComplements {
    /**
     * The territorial entities associated with the user or entity
     *
     * @type {CompanyTerritorial[] | undefined | null}
     * @memberOf CompanyComplements
     */
    collectivite_territoriale?: CompanyTerritorial[] | null
    /**
     * Whether the entity has specified their collective bargaining agreement
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    convention_collective_renseignee?: boolean | null
    /**
     * Whether the entity is an individual entrepreneur
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    est_entrepreneur_individuel?: boolean | null
    /**
     * Whether the entity is an entertainment entrepreneur
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    est_entrepreneur_spectacle?: boolean | null
    /**
     * Whether the entity is an 'ESS' (social and solidarity-based economy) entity
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    est_ess?: boolean | null
    /**
     * Whether the entity is registered in the FINESS (National Health Establishment Identification) directory
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    est_finess?: boolean | null
    /**
     * Whether the entity is a Recognized Guarantor of the Environment (RGE)
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    est_rge?: boolean | null
    /**
     * Whether the entity has a UAI (Unique Establishment Identifier) code
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyComplements
     */
    est_uai?: boolean | null
    /**
     * The identifier of an association associated with the user or entity
     *
     * @type {string | undefined | null}
     * @memberOf CompanyComplements
     */
    identifiant_association?: string | null
}
