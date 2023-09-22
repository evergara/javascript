/**
 * This function rende conten in a Element of DOM
 * @param {HTMLDivElement} element
 */
export const environmentsCompoponent = (element) => {
  console.log(import.meta.env);
  const html = `
         Variables:
         DEV: ${import.meta.env.DEV}</br>
         PROD: ${import.meta.env.PROD}</br>
         MODE: ${import.meta.env.MODE}</br>
         BASE_URL: ${import.meta.env.BASE_URL}</br>
         SSR: ${import.meta.env.SSR}</br>
         VITE_API_KEY: ${import.meta.env.VITE_API_KEY}</br>
         VITE_BASE_URL: ${import.meta.env.VITE_BASE_URL}</br>
         
    `;

  element.innerHTML = html;
};
