import {CompanyElected} from "./company-elected"

export * from './company-elected'

/**
 * Interface representing a territorial entity.
 *
 * @interface CompanyTerritorial
 */
export interface CompanyTerritorial {
    /**
     * The INSEE code of the territorial entity.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyTerritorial
     */
    code_insee?: string | null
    /**
     * The code of the territorial entity.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyTerritorial
     */
    code?: string | null
    /**
     *  The level of the territorial entity.
     *
     *  @type {string | undefined | null}
     *  @memberOf CompanyTerritorial
     */
    niveau?: string | null
    /**
     * An array of elected officials in the territorial entity.
     *
     * @type {CompanyElected[] | undefined | null}
     * @memberOf CompanyTerritorial
     */
    elus?: CompanyElected[] | null
}
