exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: cors, body: '' };
  }

  const API_KEY  = process.env.HEYGEN_API_KEY;
  const AVATAR_ID = '8606fa763539444abcb8ab1048b667b3';

  try {
    // Step 1: Get Hebrew voice
    const voicesRes = await fetch('https://api.heygen.com/v2/voices', {
      headers: { 'X-Api-Key': API_KEY }
    });
    const voicesData = await voicesRes.json();
    const voices = voicesData.data?.voices || [];

    const hebrewVoice =
      voices.find(v => v.language === 'Hebrew' && v.gender === 'Female' && v.name?.includes('Miriam')) ||
      voices.find(v => v.language === 'Hebrew' && v.gender === 'Female') ||
      voices.find(v => v.language === 'Hebrew') ||
      voices[0];

    const voiceId = hebrewVoice?.voice_id || '';

    // Step 2: Create streaming session
    const sessionRes = await fetch('https://api.heygen.com/v1/streaming.new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Api-Key': API_KEY },
      body: JSON.stringify({
        quality: 'medium',
        avatar_name: AVATAR_ID,
        voice: { voice_id: voiceId, rate: 0.88, emotion: 'Friendly' },
        version: 'v2',
        video_encoding: 'H264'
      })
    });

    const sessionData = await sessionRes.json();

    if (sessionData.code !== 100) {
      return {
        statusCode: 402,
        headers: cors,
        body: JSON.stringify({ error: 'streaming_unavailable', message: sessionData.message })
      };
    }

    return {
      statusCode: 200,
      headers: cors,
      body: JSON.stringify({ ...sessionData.data, voice_id: voiceId })
    };

  } catch (err) {
    return {
      statusCode: 500,
      headers: cors,
      body: JSON.stringify({ error: err.message })
    };
  }
};
