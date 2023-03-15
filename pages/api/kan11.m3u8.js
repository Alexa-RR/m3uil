export default async function handler(req, res) {
    res.status(301)
    res.redirect(`https://kan11.media.kan.org.il/hls/live/2024678/2024678/source1_4k/chunklist.m3u8`)
}