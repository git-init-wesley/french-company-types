/**
 * Represents the seat of an establishment.
 *
 * @interface CompanySeat
 */
export interface CompanySeat {
    /**
     * The main activity of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    activite_principale?: string | null
    /**
     * The main activity of the establishment in the trades register.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    activite_principale_registre_metier?: string | null
    /**
     * The street address of the seat.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    adresse?: string | null
    /**
     * The special distribution.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    cedex?: string | null
    /**
     * The country code for foreign countries.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    code_pays_etranger?: string | null
    /**
     * The postal code of the seat.
     */
    code_postal?: string | null
    /**
     * The name of the city of the seat.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    commune?: string | null
    /**
     * Additional information about the address.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    complement_adresse?: string | null
    /**
     *
     * The creation date of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    date_creation?: string | null
    /**
     * The start date of the establishment's activity.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    date_debut_activite?: string | null
    /**
     *
     * The department of the seat.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    departement?: string | null
    /**
     * The geo ID of the seat.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    geo_id?: string | null
    /**
     * The repetition index.
     * TODO: FIND TYPE (string? number?)
     * @type {unknown | undefined | null}
     * @memberOf CompanySeat
     */
    indice_repetition?: unknown | null
    /**
     * The latitude of the seat.
     *
     * @type {number | undefined | null}
     * @memberOf CompanySeat
     */
    latitude?: number | null
    /**
     *
     * The longitude of the seat.
     *
     * @type {number | undefined | null}
     * @memberOf CompanySeat
     */
    longitude?: number | null
    /**
     * The label for special distribution.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    libelle_cedex?: string | null
    /**
     * The label for the city.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    libelle_commune?: string | null
    /**
     * The label for the foreign city.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    libelle_commune_etranger?: string | null
    /**
     *  The label for the foreign country.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    libelle_pays_etranger?: string | null
    /**
     * The label for the street.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    libelle_voie?: string | null
    /**
     * The list of the establishment's brand names.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanySeat
     */
    liste_enseignes?: string[] | null
    /**
     * The list of the establishment's FINESS numbers.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanySeat
     */
    liste_finess?: string[] | null
    /**
     * The list of the establishment's IDCC codes.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanySeat
     */
    liste_idcc?: string[] | null
    /**
     * The list of the establishment's RGE codes.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanySeat
     */
    liste_rge?: string[] | null
    /**
     * The list of the establishment's UAI codes.
     *
     * @type {string[] | undefined | null}
     * @memberOf CompanySeat
     */
    liste_uai?: string[] | null
    /**
     * The commercial name of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    nom_commercial?: string | null
    /**
     * The street number of the address.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    numero_voie?: string | null
    /**
     * The SIRET number of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    siret?: string | null
    /**
     * The number of employees of the establishment.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    tranche_effectif_salarie?: string | null
    /**
     * The type of the street.
     *
     * @type {string | undefined | null}
     * @memberOf CompanySeat
     */
    type_voie?: string | null
}
