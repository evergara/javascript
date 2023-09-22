import { heroes } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async(element) => {
  console.log("Async Awit commponent");

  const heroId = '5d86371f9f80b591f499df32';
  const heroId2 = '5d86371fd55e2e2a30fe1cc4';

  try {
    const {name: name1} = await findHero(heroId);
    const {name: name2 }= await findHero(heroId2);
    element.innerHTML = `${name1} / ${name2}`;

  } catch (error) {
     element.innerHTML = error;
  }

 
};

/**
 * This function the name the a heroe
 * @param {String} heroId 
 * @returns {Promise<string>} name heroe
 */
const findHero = (heroId) => {
  const hero = heroes.find(hero => hero.id === heroId);
  if(!hero)
      throw (`Hero with ID ${heroId} not found`);
  return hero;
}