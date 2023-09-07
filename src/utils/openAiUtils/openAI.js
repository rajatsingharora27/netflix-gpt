import OpenAI from "openai";
import { OPENAI_API_KEY } from "../constants/apiConstants";

export const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});
