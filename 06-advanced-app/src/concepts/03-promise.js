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

export const promiseComponent = (element) => {
  console.log("Promise commponent");
  const heroId = "5d86371f1efebc31def272e2";
  const heroIdTwo = "5d86371f2343e37870b91ef1";


  Promise.all([findHero(heroId), findHero(heroIdTwo)])
    .then(([hero, hero2]) => {
      renderHeroTwo(element, hero, hero2);
    })
    .catch((error) => {
      renderHeroError(element, error);
    });
};

export const promiseComponent2 = (element) => {
  console.log("Promise commponent");
  const heroId = "5d86371f1efebc31def272e2";
  const heroIdTwo = "5d86371f2343e37870b91ef1";

  let heroTemp;
  findHero(heroId)
    .then((hero) => {
      heroTemp = hero;
      return findHero(heroIdTwo);
    })
    .then((hero) => {
      renderHeroTwo(element, heroTemp, hero);
    })
    .catch((error) => {
      renderHeroError(element, error);
    });
};

export const promiseComponent1 = (element) => {
  console.log("Promise commponent");
  const heroId = "5d86371f1efebc31def272e2";

  findHero(heroId)
    .then((hero) => {
      renderHero(element, hero);
    })
    .catch((error) => {
      renderHeroError(element, error);
    });
};

const renderHeroTwo = (element, hero, heroTwo) => {
  element.innerHTML = `${hero.name} / ${heroTwo.name}`;
};
const renderHero = (element, hero) => {
  element.innerHTML = `Heroe: ${hero.name}`;
};
const renderHeroError = (element, error) => {
  element.innerHTML = `<h3> ${error}<h3>`;
};

// export const promiseComponent = (element) => {
//   console.log("Promise commponent");
//   const heroId = "5d86371f1efebc31def272e2-";

//   findHero(heroId)
//     .then((hero) => {
//       const html = `Heroe: ${hero.name}`;
//       element.innerHTML = html;
//     })
//     .catch((error) => {
//       element.innerHTML = error;
//     });
// };
