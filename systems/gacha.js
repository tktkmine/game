import {

  monsters

}
from "../data/monsters.js";

import {

  addMonster,

  saveGame

}
from "./save.js";

/* =====================
   ガチャ価格
===================== */

export const GACHA_COST = 100;

/* =====================
   排出率
===================== */

const rarityTable = [

  {
    rank: "a",
    rate: 10
  },

  {
    rank: "b",
    rate: 30
  },

  {
    rank: "c",
    rate: 60
  }

];

/* =====================
   ランク抽選
===================== */

export function rollRarity() {

  const random =
    Math.random() * 100;

  let total = 0;

  for (
    const rarity
    of
    rarityTable
  ) {

    total += rarity.rate;

    if (random <= total) {

      return rarity.rank;
    }
  }

  return "c";
}

/* =====================
   ランク一致抽出
===================== */

export function getMonstersByRank(

  rank

) {

  return monsters.filter(
    (monster) => {

      return (
        monster.rank
        ===
        rank
      );
    }
  );
}

/* =====================
   モンスター抽選
===================== */

export function rollMonster() {

  /* ランク */

  const rarity =
    rollRarity();

  /* 候補 */

  const candidates =

    getMonstersByRank(
      rarity
    );

  /* ランダム */

  const randomIndex =

    Math.floor(

      Math.random()
      *
      candidates.length

    );

  return candidates[
    randomIndex
  ];
}

/* =====================
   ガチャ実行
===================== */

export function executeGacha({

  playerData

}) {

  /* 金不足 */

  if (

    playerData.gold
    <
    GACHA_COST

  ) {

    return {

      success: false,

      message:
        "ゴールド不足"
    };
  }

  /* 消費 */

  playerData.gold -=
    GACHA_COST;

  /* 抽選 */

  const monster =
    rollMonster();

  /* 所持追加 */

  addMonster({

    saveData:
      playerData,

    monsterId:
      monster.id

  });

  /* 保存 */

  saveGame(playerData);

  return {

    success: true,

    monster
  };
}
