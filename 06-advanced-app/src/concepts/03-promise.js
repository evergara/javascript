/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseCompoponent = (element) => {
  console.log("Promise commponent");
};


/**
 *
 * @param {string} id
 */
const findHero = (id) => {
  const hero = heroes.find((hero) => hero.id === id);
}