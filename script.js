import * as arrays from './characters';

// Variables
const msgProgress = document.querySelector('#progress');
const msgInfo = document.querySelector('#info');
const msgSuccess = document.querySelector('#success');
const msgError = document.querySelector('#error');
const pwdLvl1 = 'rjvawr';
const pwdLvl2 = 'HmDJHY';
const pwdLvl3 = 'dtzxbG';
const pwdLvl4 = '0`I=AU';
let pwdWanted = pwdLvl1;
let lastKeystrokes = {};

// Main
// #region frontend
function toggleMenu (el) {
  if (!el.classList.contains('pill-active')){
    document.querySelector('.pill-active').classList.remove('pill-active');
    el.classList.add('pill-active');
  }
  activeLvl(el.id);
  resetMessages();
};

function activeLvl(levelToActivate) {
  switch (levelToActivate) {
    case 'lvl1':
      pwdWanted = pwdLvl1;
      break;

    case 'lvl2':
      pwdWanted = pwdLvl2;
      break;
      
    case 'lvl3':
      pwdWanted = pwdLvl3;
      break;

      case 'lvl4':
      pwdWanted = pwdLvl4;
      break;

    default: 
      console.error('error -- levelToActivate -- case Default');
      break;
  }
}
// #endregion

function checkPassword() {
  const inputPwd = document.querySelector('#secretPassword').value;
  if (inputPwd === pwdWanted) {
    msgError.style.display='none';
    msgSuccess.style.display='block';
  } else {
    msgProgress.style.display='none';
    msgInfo.style.display='none';
    msgSuccess.style.display='none';
    msgError.style.display='block';
  }
}

document.addEventListener('keydown', (e) => {
  lastKeystrokes[e.code] = e.type === 'keydown';
  if (lastKeystrokes.Enter && lastKeystrokes.Space) {
    lastKeystrokes = {};
    msgProgress.style.display='block';
    msgError.style.display='none';
    msgInfo.style.display='none';
    msgSuccess.style.display='none';
    hackPassword();
  } 
});

function hackPassword() {
  // HACK THE WORLD
  // HACK THE WORLD
  // HACK THE WORLD

  const res = 'YOUR RESULT VARIABLE HERE';
  // Give the result below
  msgInfo.textContent = `>> Password found: ${  res}`;
  msgInfo.style.display = 'block';
}

function resetMessages() {
  msgError.style.display='none';
  msgInfo.style.display='none';
  msgProgress.style.display='none';
  msgSuccess.style.display='none';
}


