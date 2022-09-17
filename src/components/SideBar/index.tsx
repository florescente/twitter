/* eslint-disable react/jsx-key */
import List from '../List'
import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'
import FollowSuggestion from '../FollowSuggestion'

function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Luiz Bo" nickname="@luizbatana" />,
            <FollowSuggestion name="Luke Morais" nickname="@lukemorais" />,
            <FollowSuggestion name="Samantha Alta" nickname="@samanthaalta" />,
          ]}
        />
        <List title="Talvez você curta" elements={['asdfsdf', 'asdsdf']} />
      </Body>
    </Container>
  )
}

export default SideBar
