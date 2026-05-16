export const config = {
  runtime: 'edge', // required for Web Request standard
};

import server from '../dist/server/server.js';

export default async function handler(request) {
  // convert native Request to Response using the fetch handler
  return server.fetch(request, {}, {});
}
