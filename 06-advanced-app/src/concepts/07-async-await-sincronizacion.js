import { heroes } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitSincronizationComponent = async (element) => {
  console.log("Async Awit secuencial commponent");

  const heroId = "5d86371f9f80b591f499df32";
  const heroId2 = "5d86371fd55e2e2a30fe1cc4";

  console.time('Start')
  const value = await racePromise();
  const value2 = await racePromise('Medium', 1500);
  const value3 = await racePromise('fast', 1000);

  element.innerHTML = `
     value: ${value} </br>
     value2: ${value2} </br>
     value3: ${value3} </br>
  `;

  console.timeEnd('Start')
};

/**
 * This function the name the a heroe
 * @param {String} heroId
 * @returns {Promise<string>} name heroe
 */
const findHero = (heroId) => {
  const hero = heroes.find((hero) => hero.id === heroId);
  if (!hero) throw `Hero with ID ${heroId} not found`;
  return hero;
};


const racePromise = (message = "Slow", time = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} Promise`);
    }, time);
  });
