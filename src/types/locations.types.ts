export interface ResponseLocation {
  info: InfoLocation
  results: Locations[]
}

export interface InfoLocation {
  count: number
  pages: number
  next: string
  prev: null
}

export interface Locations {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: Date
}
