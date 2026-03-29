export const categories = ['All', 'Residential', 'Commercial', 'Hospitality']

/** Place `Untitled design (2).mp4` in the `public/` folder (same level as favicon). */
export const BAYT_MARYAM_VIDEO = '/main_video.mp4'

/**
 * Images: capped width in URL for faster loads. Optional `video` + `videoPoster` for walkthroughs.
 */
export const projects = [
  {
    id: 'bayt-maryam',
    title: 'Bayt Maryam',
    location: 'Kerala, India',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=900&q=80',
    blurb: 'Featured residence — calm massing, layered light, and a plan shaped around family ritual.',
    spotlight: true,
    video: BAYT_MARYAM_VIDEO,
    videoPoster:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=960&q=75',
  },
  {
    id: 'villa-1',
    title: 'Villa Project 1',
    location: 'Kerala, India',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    blurb: 'Tranquil home with generous overhangs and indoor–outdoor flow.',
    video:
      'https://videos.pexels.com/video-files/5182920/5182920-hd_720_1280_25fps.mp4',
    videoPoster:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=960&q=75',
  },
  {
    id: 'villa-2',
    title: 'Villa Project 2',
    location: 'Kerala, India',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    blurb: 'Courtyard-led living with timber screens and monsoon-ready detailing.',
    video:
      'https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4',
    videoPoster:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=960&q=75',
  },
  {
    id: '1',
    title: 'Monsoon House',
    location: 'Calicut, Kerala',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    blurb: 'Deep overhangs and breathable brick shell tuned to the tropics.',
    video:
      'https://videos.pexels.com/video-files/5182920/5182920-hd_720_1280_25fps.mp4',
    videoPoster:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=960&q=75',
  },
  {
    id: '2',
    title: 'Harbourline Office',
    location: 'Kochi, Kerala',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    blurb: 'Daylight-driven workspace with layered acoustic zones.',
  },
  {
    id: '3',
    title: 'Laterite Retreat',
    location: 'Wayanad, Kerala',
    category: 'Hospitality',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80',
    blurb: 'Low-slung villas framing valley views and local stone craft.',
  },
  {
    id: '5',
    title: 'Studio & Gallery',
    location: 'Kannur, Kerala',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    blurb: 'Adaptive reuse with gallery lighting and flexible studio bays.',
  },
  {
    id: '6',
    title: 'Backwater Pavilion',
    location: 'Alappuzha, Kerala',
    category: 'Hospitality',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80',
    blurb: 'Lightweight roof planes opening to breeze and water reflections.',
  },
]

export const featuredIds = ['bayt-maryam', 'villa-1', 'villa-2']

export function projectsWithVideo(list = projects) {
  return list
    .filter((p) => Boolean(p.video))
    .sort((a, b) => Number(!!b.spotlight) - Number(!!a.spotlight))
}
