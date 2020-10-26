const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

//Attack Monster
function attackMonster(mode) {
  let maxDamage;
  if (mode === 'ATTACK') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You win !!!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert(' The bad monster won !!!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    console.log('You have a draw');
  }
}

// Attack Handler
function attackHandler() {
  attackMonster('ATTACK');
}

//Strong Attack Handler
function strongAttackHandler() {
  attackMonster('STRONG_ATTACK')
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);