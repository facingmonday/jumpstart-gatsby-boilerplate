import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image'; // to take image data and render it
import HeroCarousel from '../../components/HeroCarousel';
import Page from '../../components/Page';
import SEO from '../../components/SEO';
import Section from '../../components/Section';
import BlockSet from '../../components/BlockSet';
import IconBlock from '../../components/IconBlock';
import SectionHeading from '../../components/SectionHeading';

import * as styles from './work.module.scss';

const WorkPage = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "work"}}) {
        edges {
          node {
            id
            name
            absolutePath
            publicURL
          }
        }
      }
    }
  `);
  return (
    <Page headerColor="black">
      <SEO title="Work" />
      <HeroCarousel
        title="Professional Video Editing"
        images={allFile?.edges?.map(({ node }) => node)}
      />
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/apps/hero/app.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <p className={styles.sectionUpperTitle}>On the app store</p>
            <h1 className={styles.sectionTitle}>Mobile Apps</h1>
            <p className={styles.sectionDescription}>
              Since the first app store came into existance, I've been involved. A lot has changed since the iPhone 3, but I'm sticking with it.
            </p>
            <Button variant="contained" onClick={() => navigate('/work/apps')}><p style={{ margin: '5px 10px' }}>View More</p></Button>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={5}>
            <p className={styles.sectionUpperTitle}>Everything in motion</p>
            <h1 className={styles.sectionTitle}>Video</h1>
            <p className={styles.sectionDescription}>
              Activist group known as The Woovs risk everything to overthrow a tyrannical social media empire and save society from the Information Blues.
            </p>
            <p className={styles.sectionDescription}>
              No but seriously it's just a music video I filmed with some friends.
            </p>
            <Button variant="contained" onClick={() => navigate('/work/video')}><p style={{ margin: '5px 10px' }}>View More</p></Button>
          </Grid>
          <Grid item xs={12} sm={7} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X7VMtUum7wY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/apps/hero/app.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <p className={styles.sectionUpperTitle}>Power the internet</p>
            <h1 className={styles.sectionTitle}>Websites and APIs</h1>
            <p className={styles.sectionDescription}>
              I like building websites. I'm not be best designer in the world but I can piece it together for you. My specialty is API's though. Giving those apps data to work with is something I've been doing for a while now.
            </p>
            <Button variant="contained" onClick={() => navigate('/work/web')}><p style={{ margin: '5px 10px' }}>View More</p></Button>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={4}>
            <p className={styles.sectionUpperTitle}>A picture is worth a thousand words</p>
            <h1 className={styles.sectionTitle}>Photography</h1>
            <p className={styles.sectionDescription}>
              Inspired by the hard list by Andy Fricella. Keep track of your critical tasks
              that need to be done each day. When you complete them, cross them off the list. Once you've accomplished all your tasks for that day, we'll mark it as a W. Otherwise, we'll chalk it up as an L and we all know what that means.
            </p>
            <Button variant="contained" onClick={() => navigate('/work/photography')}><p style={{ margin: '5px 10px' }}>View More</p></Button>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/photography/event-photography.jpg"
            />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/print/tshirtpress.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <p className={styles.sectionUpperTitle}>A picture is worth a thousand words</p>
            <h1 className={styles.sectionTitle}>Graphic Design</h1>
            <p className={styles.sectionDescription}>
              Social media ads, printing t-shirts, designing flyers, branding content.
            </p>
            <Button variant="contained" onClick={() => navigate('/work/graphicdesign')}><p style={{ margin: '5px 10px' }}>View More</p></Button>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default WorkPage;
