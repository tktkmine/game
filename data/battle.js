/* =====================
   属性相性
===================== */

const strengths = {

  fire: "nature",

  nature: "water",

  water: "thunder",

  thunder: "earth",

  earth: "fire"
};

/* =====================
   ダメージ計算
===================== */

export function calculateDamage(
  attacker,
  defender,
  multiplier
) {

  /* 基本ダメージ */

  let damage =
    (
      attacker.atk -
      defender.def
    ) * multiplier;

  /* 属性有利 */

  if (
    strengths[attacker.element]
    ===
    defender.element
  ) {

    damage *= 1.5;
  }

  /* 最低保証 */

  damage =
    Math.max(
      1,
      Math.floor(damage)
    );

  return damage;
}
