import Main from '../Main'
import { Container, Wrapper } from './styles'
import MenuBar from '../MenuBar'
import SideBar from '../SideBar'

function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}

export default Layout
