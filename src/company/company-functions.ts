import {Company, CompanyLeader} from "./company"

/**
 * Check if a company is an association.
 *
 * @param company - The company object to check.
 * @returns True if the company is an association, false otherwise.
 */
export const isAssociation = (company: Company) => typeof company.complements?.identifiant_association === "string"

/**
 * Check if a leader is a moral person.
 *
 * @param leader - The leader object to check.
 * @returns True if the leader is a moral person, false otherwise.
 */
export const isMoralPerson = (leader: CompanyLeader) => leader.type_dirigeant === "personne morale"

/**
 * Check if a leader is a physical person.
 *
 * @param leader - The leader object to check.
 * @returns True if the leader is a physical person, false otherwise.
 */
export const isPhysicalPerson = (leader: CompanyLeader) => leader.type_dirigeant === "personne physique"


/**
 * Check if a company is active.
 *
 * @param company - The company object to check.
 * @returns True if the company is active, false otherwise.
 */
export const isActiveCompany = (company: Company) => company.etat_administratif?.toUpperCase() === "A"
