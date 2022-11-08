/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CharacterInfo,
  GenderSection,
  Image,
  ImageWrapper,
  LocationSection,
  Title,
  TitleSection,
} from './card-character.styles'

export const CardCharacter = () => {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          alt='Rick Sanchez'
        />
      </ImageWrapper>
      <CharacterInfo>
        <TitleSection>
          <Title>Rick Sanchez</Title>
          <span>
            <span>"Alive" - "Human"</span>
          </span>
        </TitleSection>
        <LocationSection>
          <span>Last Known location:</span>
          <span>Citadel of Ricks</span>
        </LocationSection>
        <GenderSection>
          <span>Gender:</span>
          <span>Male</span>
        </GenderSection>
      </CharacterInfo>
    </Card>
  )
}
