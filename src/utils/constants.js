export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PROFILE_URL =
  "https://occ-0-54-47.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const LOGIN_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/6f5fcbd6-993f-4d76-b207-799c937026ae/US-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMAGE_URL_PATH = 'https://image.tmdb.org/t/p/w500/'

export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"},{identifier:"es", name:"Espanol"},{identifier:"hindi", name:"Hindi"}]

export const OPEN_API_GPT_KEY = process.env.REACT_APP_OPENAI_KEY