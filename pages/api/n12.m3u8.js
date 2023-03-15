async function getstreamticket() {
    const res = await fetch('https://mass.mako.co.il/ClicksStatistics/entitlementsServicesV2.jsp?et=gt&lp=/stream/hls/live/2033791/k12/index.m3u8&rv=AKAMAI');
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
      }
      
      return res.json();    
}


export default async function handler(req, res) {
    const ticket = await getstreamticket()
    res.status(301)
    res.redirect(`https://mako-streaming.akamaized.net/stream/hls/live/2033791/k12/index.m3u8?${ticket.tickets[0].ticket}`)
  }