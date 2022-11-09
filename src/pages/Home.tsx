import { CardCharacter } from '@/Components'
import { useCharacters } from '@/hooks'
import { RootState } from '@/redux'
import { useSelector } from 'react-redux'
import { HomeSection } from './styles/home.styles'

const Home = () => {
  const { characters, error, loading, info } = useSelector(
    (state: RootState) => state.characters
  )
  useCharacters()

  console.log({ characters, error, loading, info })
  return (
    <HomeSection>
      {characters.map((character) => (
        <CardCharacter key={character.id} character={character} />
      ))}
    </HomeSection>
  )
}

export default Home
