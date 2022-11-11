import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Status } from '@/types'

const colorStatus = (statusCharacter: Status) => {
  const vv: Record<Status, string> = {
    Alive: '#55CC44',
    Dead: 'red',
    unknown: 'yellow',
  }
  return vv[statusCharacter]
}

interface PropsStatus {
  status: Status
}

export const Card = styled(Link)`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  text-decoration: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  span {
    margin: 0px;
    padding: 0px;
    font-size: 16px;
    font-weight: 500;
  }
`

export const ImageWrapper = styled.div`
  flex: 2 1 0%;
  width: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0px;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
`

export const CharacterInfo = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
`

export const TitleSection = styled.section`
  flex: 1 1 0%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const Title = styled.h2`
  color: rgb(245, 245, 245);
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`

export const StatusCharacter = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-transform: capitalize;
`

export const StatusIcon = styled.span<PropsStatus>`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: ${(props) => colorStatus(props.status)};
  border-radius: 50%;
`

export const LocationSection = styled.section`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`

export const LocationKnown = styled.span`
  color: rgb(158, 158, 158);
`

export const LocationName = styled.span`
  color: rgb(245, 245, 245);
`

export const GenderSection = styled.section`
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  flex-direction: column;
`

export const GenderTitle = styled.span`
  color: rgb(158, 158, 158);
`

export const Gender = styled.span`
  color: rgb(245, 245, 245);
`
