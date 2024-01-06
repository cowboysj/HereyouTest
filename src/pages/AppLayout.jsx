import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Navbar } from '../components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f2f2;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 768px;
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  min-height: 100vh;
`;

const AppLayout = () => {
  return (
    <AppContainer>
      <ContentContainer>
        <Navbar />
        <Outlet />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
};

export default AppLayout;
