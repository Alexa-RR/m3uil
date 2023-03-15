import HLS from 'hls-parser';

async function getstreamticket() {
    const res = await fetch('https://mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=gt&lp=/stream/hls/live/2033791/k12/index.m3u8&rv=AKAMAI');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
      
      return res.json();    
}
/*
async function getstream(ticket) {
  const res = await fetch(`https://mako-streaming.akamaized.net/stream/hls/live/2033791/k12/index.m3u8?${ticket.tickets[0].ticket}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  var output = res.text()
  

  return output;
}
*/
export default async function handler(req, res) {
    const ticket = await getstreamticket()
    //const stream = await getstream(ticket)
    //const parse = HLS.parse(stream)
    res.status(301)
    //res.json(parse.variants[5].uri)
    //res.redirect(`https://mako-streaming.akamaized.net/stream/hls/live/2033791/k12?b-in-range=800-2700/${parse.variants[5].uri}`)
    res.redirect(`https://mako-streaming.akamaized.net/stream/hls/live/2033791/k12/index.m3u8?b-in-range=4600-4700&${ticket.tickets[0].ticket}`)
  }