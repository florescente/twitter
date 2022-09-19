/* eslint-disable react/jsx-key */
import StickyBox from 'react-sticky-box'
import List from '../List'
import News from '../News'
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

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Luiz Bo" nickname="@luizbatana" />,
              <FollowSuggestion name="Luke Morais" nickname="@lukemorais" />,
              <FollowSuggestion
                name="Samantha Alta"
                nickname="@samanthaalta"
              />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar
