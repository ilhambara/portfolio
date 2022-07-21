import { getNowPlaying } from "@/lib/spotify";

export default async function spotifyHandler(_, request) {
  const response = await getNowPlaying();

  // check whether the response returns the desired value or not
  if (response.status === 204 || response.status > 400) {
    return request.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  // check whether the song is available or not. could be not if Spotify playing an advertisement
  if (song.item === null) {
    return request.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return request.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
