import { heroes } from "../data/heroe";
/**
 *
 * @param {HTMLDivElement} element
 */

/**
 *
 * @param {string} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);
    return hero ? resolve(hero) : reject(`Hero with id ${id} not found`);
  });
};

export const promiseRaceComponent = (element) => {
  console.log("Promise Race commponent");
  element.innerHTML = "Loading ...";
  const renderValue = (value) => {
    element.innerHTML = value;
  };

  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
    renderValue
  );
};

const slowPromise = (time = 2000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, time);
  });

const mediumPromise = (time = 1500) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium Promise");
    }, time);
  });

const fastPromise = (time = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast Promise");
    }, time);
  });
