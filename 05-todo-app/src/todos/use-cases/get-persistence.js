import { PersistenceType } from "../const/index";

/**
 * This function get a item of persistence
 * @param { string } key
 * @param { PersistenceType } persistence
 * @returns string | null
 */
export const getItem = (key, persistence = PersistenceType.LOCALSTORE) => {
  if (persistence === PersistenceType.LOCALSTORE) {
    return localStorage.getItem(key);
  }
};
