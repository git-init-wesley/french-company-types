/**
 * An array of strings representing the available categories of company leaders.
 * @type {Array<CompanyLeaderCategory>}
 */
export const CompanyLeaderCategories = ['personne morale', 'personne physique'] as const

/**
 * A union type representing the possible categories of company leaders.
 * @typedef {('personne morale' | 'personne physique')} CompanyLeaderCategory
 */
export type CompanyLeaderCategory = typeof CompanyLeaderCategories[number]


/**
 * Represents a leader associated with an entity or user
 *
 * @interface CompanyLeader
 */
export interface CompanyLeader {
    /**
     * The last name of the leader
     *
     * @type {string | null}
     * @memberOf CompanyLeader
     */
    nom?: string | null
    /**
     * The first name(s) of the leader
     *
     * @type {string | null}
     * @memberOf CompanyLeader
     */
    prenoms?: string | null
    /**
     * The year of birth of the leader
     *
     * @type {string | null}
     * @memberOf CompanyLeader
     */
    annee_de_naissance?: string | null
    /**
     * The quality (title) of the leader
     *
     * @type {string | null}
     * @memberOf CompanyLeader
     */
    qualite?: string | null
    /**
     * The type of leader
     *
     * @typedef {('personne morale' | 'personne physique') | undefined | null} CompanyLeaderCategoryType
     * @memberOf CompanyLeader
     */
    type_dirigeant?: CompanyLeaderCategory | null
    /**
     * The name of the entity or organization the leader is associated with
     *
     * @type {string | null}
     * @memberOf CompanyLeader
     */
    denomination?: string | null
    /**
     * The acronym of the entity or organization the leader is associated with
     *
     * //TODO: Make sigles with INSEE/SIRENE dictionary
     *
     * @type {unknown | null}
     * @memberOf CompanyLeader
     */
    sigle?: unknown | null
    /**
     * The SIREN (Business Identification System) number of the entity or organization the leader is associated with
     *
     * @type {string | null}
     * @memberOf CompanyLeader
     */
    siren?: string | null
}
