import { onNavigate } from '../../utils/history.js';

export const Clapping = () => {
  const rootElement = document.createElement('div');

  rootElement.innerHTML = `
  <div>
    <img class="img-logo" src='./assets/applause-outline.gif'>   
    <p class='clapping-text'> Parabéns, nossa equipe entrará em contato com você!!</p>
      <input class='button' 
      id='back' type='submit' 
      value='Voltar'/>
  </div>
  `;

  const back = rootElement.querySelector('#back');

  back.addEventListener('click', () => {
    onNavigate('/');
  });

  return rootElement;
};
