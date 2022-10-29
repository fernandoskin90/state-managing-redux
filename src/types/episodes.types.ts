export interface ResponseEpisode {
  info: InfoEpisode
  results: Episodes[]
}

export interface InfoEpisode {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Episodes {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: Date
}
