import OpenAI from 'openai';
import { OPEN_API_GPT_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPEN_API_GPT_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});


export default openai