const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

// Attack Handler
function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
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

//Strong Attack Handler
function strongAttackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
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

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);