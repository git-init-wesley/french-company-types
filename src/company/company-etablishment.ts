/**
 * Represents an establishment.
 *
 * @interface CompanyEstablishment
 */
export interface CompanyEstablishment {
    /**
     * The primary activity of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    activite_principale?: string | null
    /**
     * The address of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    adresse?: string | null
    /**
     * The postal code of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    code_postal?: string | null
    /**
     * Indicates whether the establishment is the main office or not.
     *
     * @type {boolean | undefined | null}
     * @memberOf CompanyEstablishment
     */
    est_siege?: boolean | null
    /**
     * The administrative state of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    etat_administratif?: string | null
    /**
     * The geo ID of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    geo_id?: string | null
    /**
     * The latitude of the establishment's location.
     *
     * @type {number | undefined | null}
     * @memberOf CompanyEstablishment
     */
    latitude?: number | null
    /**
     * The longitude of the establishment's location.
     *
     * @type {number | undefined | null}
     * @memberOf CompanyEstablishment
     */
    longitude?: number | null
    /**
     * The list of brands associated with the establishment.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanyEstablishment
     */
    liste_enseignes?: string[] | null
    /**
     * The list of FINESS codes associated with the establishment.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanyEstablishment
     */
    liste_finess?: string[] | null
    /**
     * The list of IDCC codes associated with the establishment.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanyEstablishment
     */
    liste_idcc?: string[] | null
    /**
     * The list of RGE codes associated with the establishment.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanyEstablishment
     */
    liste_rge?: string[] | null
    /**
     * The list of UAI codes associated with the establishment.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanyEstablishment
     */
    liste_uai?: string[] | null
    /**
     * The commercial name of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    nom_commercial?: string | null
    /**
     * The SIRET code of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanyEstablishment
     */
    siret?: string | null
}
