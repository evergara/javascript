import { heroes } from "../data/heroe";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbackComponent = (element) => {
  const heroId = "5d86371f1efebc31def272e2";
  findHero(heroId, (error, hero) => {
    if (error) {
      element.innerHTML = error;
      return;
    }

    const html = `
        Hero: ${hero?.name}
    `;
    element.innerHTML = html;
  });
  console.log("Callback commponent");
};

/**
 *
 * @param {string} id
 * @param {(error?: string, hero: Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero With id ${id} not found.`);
    return;
  }

  callback(undefined, hero);
};
