import { Container, Avatar, Info, FollowedButton } from './styles'

interface Props {
  name: string
  nickname: string
}

function FollowSuggestion({ name, nickname }: Props) {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowedButton outlined>Seguir</FollowedButton>
    </Container>
  )
}

export default FollowSuggestion
