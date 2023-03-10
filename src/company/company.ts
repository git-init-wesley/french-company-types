import {CompanyCategoryCode} from "./company-category"
import {CompanyComplements} from "./complements/company-complements"
import {CompanyLeader} from "./company-leader"
import {CompanyEstablishment} from "./establishment/company-establishment"
import {CompanySeat} from "./company-seat"
import {SalaryStaffRangeCode} from "./company-salary";
import {CompanyStateCode} from "./company-state";

export * from './complements/company-complements'
export * from './company-functions'
export * from './establishment/company-establishment'
export * from './company-category'
export * from './company-salary'
export * from './company-leader'
export * from './company-state'
export * from './company-seat'
export * from './ape/ape'
export * from './cj/cj'

/**
 * Represents a company.
 *
 * @interface Company
 */
export interface Company {
    /**
     * The SIREN (Système d'Identification du Répertoire des Entreprises) number of the company.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    siren?: string | null

    /**
     * The full name of the company.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    nom_complet?: string | null

    /**
     * The number of establishments of the company.
     *
     * @type {number | undefined | null}
     * @memberOf Company
     */
    nombre_etablissements?: number | null

    /**
     * The number of open establishments of the company.
     *
     * @type {number | undefined | null}
     * @memberOf Company
     */
    nombre_etablissements_ouverts?: number | null

    /**
     * The registered seat of the company.
     *
     * @type {CompanySeat | undefined | null}
     * @memberOf Company
     */
    siege?: CompanySeat | null

    /**
     * The date of creation of the company.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    date_creation?: string | null

    /**
     * The employee headcount range of the company.
     *
     * @type {SalaryStaffRangeCode | undefined | null}
     * @typedef {('NN' | '01' | '02' | '03' | '11' | '12' | '21' | '22' | '31' | '32' | '41' | '42' | '51' | '52' | '53') | SalaryStaffRangeCodes | undefined | null}
     * @memberOf Company
     */
    tranche_effectif_salarie?: SalaryStaffRangeCode | null

    /**
     * The date of last update of the company data.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    date_mise_a_jour?: string | null

    /**
     * The category of the company.
     *
     * @type {CompanyCategoryCode | undefined | null}
     * @typedef {('PME' | 'ETI' | 'GE') | CompanyCategoryCode | undefined | null}
     * @memberOf Company
     */
    categorie_entreprise?: CompanyCategoryCode | string | null

    /**
     * The administrative status of the company.
     *
     * @type {CompanyStateCode | undefined | null}
     * @typedef {('A' | 'C') CompanyStateCode | undefined | null}
     * @memberOf Company
     */
    etat_administratif?: CompanyStateCode | null

    /**
     * The name or business name of the company.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    nom_raison_sociale?: string | null

    /**
     * The legal nature of the company.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    nature_juridique?: string | null

    /**
     * Represents the legal nature of a company at level 1.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_nature_juridique_n1?: string | null

    /**
     * Represents the legal nature of a company at level 2.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_nature_juridique_n2?: string | null

    /**
     * Represents the legal nature of a company at level 3.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_nature_juridique_n3?: string | null


    /**
     * The main activity of the company (code).
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    activite_principale?: string | null

    /**
     * The label of the main activity at level 1.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_activite_principale_n1?: string | null

    /**
     * The label of the main activity at level 2.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_activite_principale_n2?: string | null

    /**
     * The label of the main activity at level 3.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_activite_principale_n3?: string | null

    /**
     * The label of the main activity at level 4.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_activite_principale_n4?: string | null

    /**
     * The label of the main activity at level 5.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    libelle_activite_principale_n5?: string | null

    /**
     * The section of the main activity of the company.
     *
     * @type {string | undefined | null}
     * @memberOf Company
     */
    section_activite_principale?: string | null

    /**
     * The establishments of the company that matched the search query.
     *
     * @type {CompanyEstablishment[] | undefined | null}
     * @memberOf Company
     */
    matching_etablisssements?: CompanyEstablishment[] | null

    /**
     * The leaders of the company.
     *
     * @type {CompanyLeader[] | undefined | null}
     * @memberOf Company
     */
    dirigeants?: CompanyLeader[] | null

    /**
     * The additional information about the company.
     *
     * @type {CompanyComplements | undefined | null}
     * @memberOf Company
     */
    complements?: CompanyComplements | null
}
