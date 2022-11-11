import { CardCharacter } from '@/Components'
import { useCharacters, useIntersectionObserver } from '@/hooks'
import { fetchCharacters, RootState } from '@/redux'
import { CharacterInitialState } from '@/types'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ElementObserver, HomeSection } from './styles/home.styles'

const Home = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting
  const dispatch = useDispatch()
  const { characters, info }: CharacterInitialState = useSelector(
    (state: RootState) => state.characters
  )
  useCharacters()

  useEffect(() => {
    if (isVisible && info.next) {
      dispatch(fetchCharacters(info.next))
    }
  }, [isVisible, info.next])
  return (
    <HomeSection>
      {characters.map((character) => (
        <CardCharacter key={character.id} character={character} />
      ))}
      <ElementObserver ref={ref} />
    </HomeSection>
  )
}

export default Home
