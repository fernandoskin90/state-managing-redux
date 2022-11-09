/* eslint-disable react/no-unescaped-entities */
import { Character } from '@/types'
import { FC } from 'react'
import {
  Card,
  CharacterInfo,
  Gender,
  GenderSection,
  GenderTitle,
  Image,
  ImageWrapper,
  LocationKnown,
  LocationName,
  LocationSection,
  StatusCharacter,
  StatusIcon,
  Title,
  TitleSection,
} from './card-character.styles'

interface CardCharacterProps {
  character: Character
}

export const CardCharacter: FC<CardCharacterProps> = ({ character }) => {
  const { gender, image, name, species, status, origin, id } = character
  return (
    <Card to={`/character/${id}`}>
      <ImageWrapper>
        <Image src={image} alt={name} />
      </ImageWrapper>
      <CharacterInfo>
        <TitleSection>
          <Title>{name}</Title>
          <StatusCharacter>
            <StatusIcon></StatusIcon>
            {`"${status}" - "${species}"`}
          </StatusCharacter>
        </TitleSection>
        <LocationSection>
          <LocationKnown>Last Known location:</LocationKnown>
          <LocationName>{origin.name}</LocationName>
        </LocationSection>
        <GenderSection>
          <GenderTitle>Gender:</GenderTitle>
          <Gender>{gender}</Gender>
        </GenderSection>
      </CharacterInfo>
    </Card>
  )
}
