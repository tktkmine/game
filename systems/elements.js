/* =====================
   属性相性
===================== */

const elementTable = {

  fire: {

    strong:
      "nature",

    weak:
      "water"
  },

  nature: {

    strong:
      "earth",

    weak:
      "fire"
  },

  water: {

    strong:
      "fire",

    weak:
      "thunder"
  },

  thunder: {

    strong:
      "water",

    weak:
      "earth"
  },

  earth: {

    strong:
      "thunder",

    weak:
      "nature"
  }

};

/* =====================
   属性倍率取得
===================== */

export function getElementMultiplier({

  attacker,

  defender

}) {

  const attackElement =
    attacker.element;

  const defendElement =
    defender.element;

  const relation =
    elementTable[
      attackElement
    ];

  /* 有利 */

  if (
    relation.strong ===
    defendElement
  ) {

    return 1.5;
  }

  /* 不利 */

  if (
    relation.weak ===
    defendElement
  ) {

    return 0.75;
  }

  /* 等倍 */

  return 1;
}

/* =====================
   相性テキスト
===================== */

export function getElementText({

  attacker,

  defender

}) {

  const multiplier =
    getElementMultiplier({

      attacker,

      defender

    });

  /* 有利 */

  if (multiplier > 1) {

    return "効果抜群！";
  }

  /* 不利 */

  if (multiplier < 1) {

    return "効果はいまひとつ...";
  }

  return "通常ダメージ";
}
