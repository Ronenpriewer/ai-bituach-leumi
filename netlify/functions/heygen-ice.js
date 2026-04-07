exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: cors, body: '' };
 
  const API_KEY = process.env.HEYGEN_API_KEY;
  const { session_id, candidate } = JSON.parse(event.body);
 
  const res = await fetch('https://api.heygen.com/v1/streaming.ice', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
    body: JSON.stringify({ session_id, candidate })
  });
 
  const data = await res.json();
  return { statusCode: 200, headers: cors, body: JSON.stringify(data) };
};
 
