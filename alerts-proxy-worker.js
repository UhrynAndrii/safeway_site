const UPSTREAM = new URL('https://ubilling.net.ua/aerialalerts/');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders });
  }

  let target;
  try {
    target = new URL(new URL(request.url).searchParams.get('url') || UPSTREAM);
  } catch {
    return new Response('Invalid URL', { status: 400, headers: corsHeaders });
  }
  if (target.origin !== UPSTREAM.origin || target.pathname !== UPSTREAM.pathname) {
    return new Response('Upstream not allowed', { status: 403, headers: corsHeaders });
  }

  try {
    const response = await fetch(target, { headers: { Accept: 'application/json' } });
    return new Response(response.body, {
      status: response.status,
      headers: {
        ...corsHeaders,
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch {
    return new Response('Alerts source unavailable', {
      status: 502,
      headers: { ...corsHeaders, 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
}