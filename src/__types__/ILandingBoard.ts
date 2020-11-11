export interface ILandingBoard {
  header: string,
  description: string,
  BoardData: ILandingCard[]
}

interface ILandingCard {
  icon: string,
  description: string,
  alt: string,
}