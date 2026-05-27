import {

  loadGame,

  saveGame

}
from "./save.js";

/* =====================
   プレイヤーデータ取得
===================== */

export function getPlayerData() {

  return loadGame();
}

/* =====================
   プレイヤー名変更
===================== */

export function setPlayerName({

  playerData,

  name

}) {

  playerData.playerName =
    name;

  saveGame(playerData);
}

/* =====================
   所属世界設定
===================== */

export function setPlayerWorld({

  playerData,

  world

}) {

  playerData.world =
    world;

  saveGame(playerData);
}

/* =====================
   ゴールド追加
===================== */

export function addGold({

  playerData,

  amount

}) {

  playerData.gold += amount;

  saveGame(playerData);
}

/* =====================
   ゴールド消費
===================== */

export function useGold({

  playerData,

  amount

}) {

  /* 不足 */

  if (
    playerData.gold < amount
  ) {

    return false;
  }

  playerData.gold -= amount;

  saveGame(playerData);

  return true;
}

/* =====================
   モンスター所持確認
===================== */

export function hasMonster({

  playerData,

  monsterId

}) {

  return playerData.collection
    .includes(monsterId);
}

/* =====================
   モンスター追加
===================== */

export function addMonster({

  playerData,

  monsterId

}) {

  /* 重複防止 */

  if (
    hasMonster({

      playerData,

      monsterId

    })
  ) {

    return false;
  }

  playerData.collection
    .push(monsterId);

  saveGame(playerData);

  return true;
}
