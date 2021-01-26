import { Muscles } from './muscles';

//sides and front

const generateVideoLink = (id: string) => `https://streamable.com/e/${id}`;
const generateThumbnailLink = (id: string) =>
  `https://thumbs-east.streamable.com/image/${id}.jpg`;

export const MuscleExerciseGifs: any = {
  [Muscles.TEMPORALIS]: {
    gif: generateVideoLink('gboq69'),
    thumbnail: generateThumbnailLink('gboq69'),
  },
  [Muscles.SUBOCCIPITAL]: {
    gif: generateVideoLink('92hbl9'),
    thumbnail: generateThumbnailLink('92hbl9'),
  },
  [Muscles.FRONTALIS]: {
    gif: generateVideoLink('6yfd66'),
    thumbnail: generateThumbnailLink('6yfd66'),
  },
  [Muscles.INFRASPINATUS]: {
    gif: generateVideoLink('lqncdz'),
    thumbnail: generateThumbnailLink('lqncdz'),
  },
  [Muscles.INTERCOSTAL]: {
    gif: generateVideoLink('qudolc'),
    thumbnail: generateThumbnailLink('qudolc'),
  },
  [Muscles.LATISSIMUSDORSI]: {
    gif: generateVideoLink('xgk7rg'),
    thumbnail: generateThumbnailLink('xgk7rg'),
  },
  [Muscles.TRAPEZIUS]: {
    gif: generateVideoLink('rdpeag'),
    thumbnail: generateThumbnailLink('rdpeag'),
  },
  [Muscles.SCALENE]: {
    gif: generateVideoLink('ma2jtk'),
    thumbnail: generateThumbnailLink('ma2jtk'),
  },
  [Muscles.TERESMAJOR]: {
    gif: generateVideoLink('zvn2js'),
    thumbnail: generateThumbnailLink('zvn2js'),
  },
  [Muscles.SERRATUSANTERIOR]: {
    gif: generateVideoLink('e5v6he'),
    thumbnail: generateThumbnailLink('e5v6he'),
  },
  [Muscles.LEVATOR]: {
    gif: generateVideoLink('chpa05'),
    thumbnail: generateThumbnailLink('chpa05'),
  },
  [Muscles.SUPRASPINATUS]: {
    gif: generateVideoLink('u142s5'),
    thumbnail: generateThumbnailLink('u142s5'),
  },
  [Muscles.RHOMBOID]: {
    gif: generateVideoLink('uj8xa0'),
    thumbnail: generateThumbnailLink('uj8xa0'),
  },
  [Muscles.STERNOCLEIDOMASTERTOID]: {
    gif: generateVideoLink('i2wph9'),
    thumbnail: generateThumbnailLink('i2wph9'),
  },
  [Muscles.SUBSCAPULARIS]: {
    gif: generateVideoLink('484tqm'),
    thumbnail: generateThumbnailLink('484tqm'),
  },
  [Muscles.RECTUSABDOMINIS]: {
    gif: generateVideoLink('vqtfij'),
    thumbnail: generateThumbnailLink('vqtfij'),
  },
  [Muscles.GLUTEUSMAXIMUS]: {
    gif: generateVideoLink('mwsk85'),
    thumbnail: generateThumbnailLink('mwsk85'),
  },
  [Muscles.QUADRATUSLUMBORUM]: {
    gif: generateVideoLink('hbdyy4'),
    thumbnail: generateThumbnailLink('hbdyy4'),
  },
  [Muscles.ILIOPSOAS]: {
    gif: generateVideoLink('w4ys0r'),
    thumbnail: generateThumbnailLink('w4ys0r'),
  },
  [Muscles.GLUTEUSMEDIUS]: {
    gif: generateVideoLink('qoykwz'),
    thumbnail: generateThumbnailLink('qoykwz'),
  },
  [Muscles.CLAVICULARPECMAJOR]: {
    gif: generateVideoLink('xfspi3'),
    thumbnail: generateThumbnailLink('xfspi3'),
  },
};
