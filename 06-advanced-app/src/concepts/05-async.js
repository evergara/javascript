import { heroes } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  console.log("Async commponent");
  const renderValue = (value) => {
    element.innerHTML = value;
  };

  const heroId = '5d86371f9f80b591f499df32';
  findHero(heroId).then(renderValue).catch(renderValue);
};

/**
 * This function the name the a heroe
 * @param {String} heroId 
 * @returns {Promise<string>} name heroe
 */
const findHero = async(heroId) => {
  const hero = heroes.find(hero => hero.id === heroId);
  if(!hero)
      throw (`Hero with ID ${heroId} not found`);
  return hero.name;
}