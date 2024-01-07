const BASE_PATH = {
  BASE: '/',
  TRAVELS: '/travels',
  // 경로 추가해주세요
  // App.jsx에서, path 추가할때 사용하시면 됩니다. 예시코드 9번줄
};

const API_PATH = {
  FAVORITE_TRAVELS: `${BASE_PATH.TRAVELS}/favorite`,
  TRAVEl_TEST: `${BASE_PATH.TRAVELS}/test`,
};

const KAKAO_REDIRECT_URL = ``;

export { BASE_PATH, API_PATH };
