export interface Album {
  id: number;
  title: string;
  year: string;
  description: string;
  tracks: AlbumTrack[];
  photoCover: string;
}

export interface AlbumTrack {
  id: number;
  title: string;
  duration: string;
}

export const albums: Album[] = [
  {
    id: 1,
    title: 'Zanaka',
    year: '2015',
    description:
      'Zanaka est le premier album de la chanteuse française Jain, sorti le 6 novembre 2015. Il contient des musiques extraites de son premier EP Hope, dont le titre Come. Il est certifié disque de diamant en France en décembre 2018.',
    tracks: [
      {
        id: 1,
        title: 'Come',
        duration: '02:42',
      },
      {
        id: 2,
        title: 'Heads Up',
        duration: '03:31',
      },
      {
        id: 3,
        title: 'Mr Johnson',
        duration: '03:04',
      },
      {
        id: 4,
        title: 'Lil Mama',
        duration: '02:38',
      },
      {
        id: 5,
        title: 'Hope',
        duration: '03:15',
      },
      {
        id: 6,
        title: 'All my Days',
        duration: '03:48',
      },
      {
        id: 7,
        title: 'Hob',
        duration: '02:25',
      },
      {
        id: 8,
        title: 'Makeba',
        duration: '04:10',
      },
      {
        id: 9,
        title: 'You Can Blame Me',
        duration: '03:46',
      },
      {
        id: 10,
        title: 'So Peaceful',
        duration: '04:00',
      },
    ],
    photoCover: 'zanaka.jpg',
  },
  {
    id: 2,
    title: 'Souldier',
    year: '2018',
    description:
      "Souldier est le deuxième album studio de la chanteuse française Jain, sorti le 24 août 2018. Après le succès de son premier album et de la tournée qui a suivi, Jain se rend à Cuba en septembre 2017 pour découvrir de nouvelles inspirations pour l'enregistrement de son deuxième album. Puis, elle se rend au studio Spookland à partir du 2 octobre pour le finir.",
    tracks: [
      {
        id: 1,
        title: 'On My Way (Jain, Yodelice)',
        duration: '03:23',
      },
      {
        id: 2,
        title: 'Flash (Pointe Noire)',
        duration: '02:19',
      },
      {
        id: 3,
        title: 'Alright',
        duration: '03:42',
      },
      {
        id: 4,
        title: 'Oh Man',
        duration: '03:22',
      },
      {
        id: 5,
        title: 'Inspecta',
        duration: '03:05',
      },
      {
        id: 6,
        title: 'Dream',
        duration: '03:04',
      },
      {
        id: 7,
        title: 'Star',
        duration: '03:01',
      },
      {
        id: 8,
        title: 'Feel It (Jain, Yodelice)',
        duration: '02:39',
      },
      {
        id: 9,
        title: 'Abu Dhabi',
        duration: '02:51',
      },
      {
        id: 10,
        title: 'Souldier',
        duration: '03:46',
      },
    ],

    photoCover: 'souldier.jpg',
  },
  {
    id: 3,
    title: 'The Fool',
    year: '2023',
    description:
      "The Fool est le troisième album studio de la chanteuse française Jain, sorti le 21 avril 2023. Après le succès de ses deux premiers albums, Jain s'accorde une pause en 2019 et décide de changer d'influences en allant plutôt vers la musique qu'elle écoute, marquée par les albums des années 19701. Pour l'écriture du disque, l'artiste s'isole dans une cabane de pêcheur à Marseille2, avec une guitare3. Chaque chanson est associée à une carte du tarot de Marseille2. Les textes autobiographiques sont plus intimistes et personnels que dans les albums précédents.",
    tracks: [
      {
        id: 1,
        title: 'The Fool',
        duration: '03:27',
      },
      {
        id: 2,
        title: 'Night Heights',
        duration: '04:09',
      },
      {
        id: 3,
        title: 'Maria',
        duration: '04:23',
      },
      {
        id: 4,
        title: 'Cosmic Love',
        duration: '03:12',
      },
      {
        id: 5,
        title: 'To All The People',
        duration: '04:20',
      },
      {
        id: 6,
        title: 'Take A Chance',
        duration: '03:24',
      },
      {
        id: 7,
        title: 'Falling',
        duration: '03:25',
      },
      {
        id: 8,
        title: 'Save The World',
        duration: '02:58',
      },
      {
        id: 9,
        title: 'I Feel Alive',
        duration: '02:42',
      },
      {
        id: 10,
        title: 'The Balance',
        duration: '02:26',
      },
      {
        id: 11,
        title: 'Goodbye',
        duration: '03:33',
      },
    ],
    photoCover: 'the_fool.jpg',
  },
];
