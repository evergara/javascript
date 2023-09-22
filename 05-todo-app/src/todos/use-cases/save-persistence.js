import { PersistenceType } from "../const/index";

/**
 * This function save a item in the persistence
 * @param { string } key 
 * @param { string } data JSON.stringify
 * @param { PersistenceType } persistence 
 * @returns void
 */
export const saveItem = (key, data, persistence = PersistenceType.LOCALSTORE) => {
  if (persistence === PersistenceType.LOCALSTORE) {
    return localStorage.setItem(key, data);
  }
};
