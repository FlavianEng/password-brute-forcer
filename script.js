// #region VARIABLES
const charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
const charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
const charNumeric = ['0','1','2','3','4','5','6','7','8','9'];
const charSpecial = [' ','!','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~','"',];
const msgProgress = document.querySelector('#progress');
const msgInfo = document.querySelector('#info');
const msgSuccess = document.querySelector('#success');
const msgError = document.querySelector('#error');
const pwdLvl1 = 'rjvawr';
const pwdLvl2 = 'HmDJHY';
const pwdLvl3 = 'dt11bG';
const pwdLvl4 = '0`I=AU';
let pwdWanted = pwdLvl1;
let lastKeystrokes = {};
// #endregion

// #region MAIN
// #region FRONTEND
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
      // eslint-disable-next-line no-console
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
    return true;
  } 
    msgProgress.style.display='none';
    msgInfo.style.display='none';
    msgSuccess.style.display='none';
    msgError.style.display='block';
    return false;
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
// #endregion
