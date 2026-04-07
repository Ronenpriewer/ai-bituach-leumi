exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: cors, body: '' };
 
  const API_KEY = process.env.HEYGEN_API_KEY;
  const { session_id } = JSON.parse(event.body || '{}');
 
  if (!session_id) return { statusCode: 200, headers: cors, body: JSON.stringify({ ok: true }) };
 
  const res = await fetch('https://api.heygen.com/v1/streaming.stop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
    body: JSON.stringify({ session_id })
  });
 
  const data = await res.json();
  return { statusCode: 200, headers: cors, body: JSON.stringify(data) };
};
