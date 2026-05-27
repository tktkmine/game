/* =====================
   タイトル初期化
===================== */

export function initializeTitle({

  startButtonId,

  onStart

}) {

  const startButton =

    document.getElementById(
      startButtonId
    );

  startButton.onclick = () => {

    onStart();
  };
}

/* =====================
   タイトル表示
===================== */

export function showTitle(

  screenId

) {

  document.getElementById(
    screenId
  ).style.display =
    "flex";
}

/* =====================
   タイトル非表示
===================== */

export function hideTitle(

  screenId

) {

  document.getElementById(
    screenId
  ).style.display =
    "none";
}

/* =====================
   タイトル演出
===================== */

export function animateTitle(

  titleId

) {

  const title =

    document.getElementById(
      titleId
    );

  let scale = 1;

  let direction = 1;

  setInterval(() => {

    scale +=
      0.001 * direction;

    /* 折り返し */

    if (scale >= 1.03) {

      direction = -1;
    }

    if (scale <= 1.0) {

      direction = 1;
    }

    title.style.transform =
      `scale(${scale})`;

  }, 16);
}
