/* =====================
   最大編成数
===================== */

const MAX_PARTY_SIZE = 3;

/* =====================
   パーティ取得
===================== */

export function getParty(

  playerData

) {

  return playerData.party;
}

/* =====================
   編成可能判定
===================== */

export function canAddParty({

  playerData,

  monsterId

}) {

  /* 重複 */

  if (

    playerData.party.includes(
      monsterId
    )

  ) {

    return {

      success: false,

      message:
        "既に編成済み"
    };
  }

  /* 上限 */

  if (

    playerData.party.length
    >=
    MAX_PARTY_SIZE

  ) {

    return {

      success: false,

      message:
        "編成上限"
    };
  }

  return {

    success: true
  };
}

/* =====================
   パーティ追加
===================== */

export function addToParty({

  playerData,

  monsterId

}) {

  const check =

    canAddParty({

      playerData,

      monsterId

    });

  /* 失敗 */

  if (!check.success) {

    return check;
  }

  playerData.party.push(
    monsterId
  );

  return {

    success: true,

    message:
      "編成完了"
  };
}

/* =====================
   パーティ解除
===================== */

export function removeFromParty({

  playerData,

  monsterId

}) {

  playerData.party =

    playerData.party.filter(
      (id) => {

        return (
          id !== monsterId
        );
      }
    );

  return {

    success: true,

    message:
      "編成解除"
  };
}

/* =====================
   編成済み確認
===================== */

export function isInParty({

  playerData,

  monsterId

}) {

  return (

    playerData.party.includes(
      monsterId
    )

  );
}

/* =====================
   パーティリセット
===================== */

export function clearParty(

  playerData

) {

  playerData.party = [];
}
