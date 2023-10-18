import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function addNote(text) {
  return sendRequest(BASE_URL, 'POST', {text});
}

