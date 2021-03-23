import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {
  navigate, Link, useStaticQuery, graphql,
} from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import HeroCarousel from '../../components/HeroCarousel';

import Page from '../../components/Page';
import SEO from '../../components/SEO';
import Section from '../../components/Section';

import * as styles from './work.module.scss';

const WebsitesPage = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {absolutePath: {regex: "/web\/hero/"}}) {
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
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Websites and APIs</h1>
            <p className={styles.sectionDescription} />
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/home/deviceshomepage.jpg"
            />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/home/gswlaptop.png"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Guerrilla Sportswear</h1>
            <p className={styles.sectionDescription}>A clothing company by fighters for fighters. I built this site with shopify</p>
            <div>
              <Button variant="contained" onPress={() => navigate('https://guerrillasportswear.com')}><p style={{ margin: '5px 10px', color: 'black' }}>Visit Site</p></Button>
            </div>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default WebsitesPage;
