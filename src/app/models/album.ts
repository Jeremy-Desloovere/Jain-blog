import { AlbumTrack } from "./albumtrack";
import { SocialMusic } from "./social_music";

export interface Album {
  id: number;
  title: string;
  year: string;
  social_music: SocialMusic;
  description: string;
  tracks: AlbumTrack[];
  photoCover: string;
}
