import { Animator, ScrollContainer, ScrollPage, batch, Sticky, Fade, MoveOut} from 'react-scroll-motion';
import AboutPage from './components/pages/AboutPage';
import LandingPage from './components/pages/LandingPage';
import ProjectsPage from './components/pages/ProjectsPage';
import Layout from './layouts/Layout';
import ContactPage from './components/pages/ContactPage';

export default function App(){
  return(
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <Layout>
            <LandingPage />
          </Layout>
        </Animator>
      </ScrollPage>
      <ScrollPage>
      <Animator>
          <AboutPage />
          </Animator>
      </ScrollPage>
      <ScrollPage>
        <ProjectsPage />
      </ScrollPage>
      <ScrollPage>
        <ContactPage />
      </ScrollPage>
  </ScrollContainer>
  );
};
