import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image'; // to take image data and render it
import HeroCarousel from '../../components/HeroCarousel';
import Page from '../../components/Page';
import SEO from '../../components/SEO';
import Button from '../../components/Button';
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
          <Grid item xs={12} sm={4}>
            <p className={styles.sectionUpperTitle}>Everything in motion</p>
            <h1 className={styles.sectionTitle}>Video</h1>
            <p className={styles.sectionDescription}>
              Inspired by the hard list by Andy Fricella. Keep track of your critical tasks
              that need to be done each day. When you complete them, cross them off the list. Once you've accomplished all your tasks for that day, we'll mark it as a W. Otherwise, we'll chalk it up as an L and we all know what that means.
            </p>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X7VMtUum7wY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section containerStyle={{ backgroundColor: 'black', height: '90px', padding: '20 10' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: 5 }}>
            <h1 className={styles.bannerText}>
              Need help with anything? Reach out and say hi!
            </h1>
          </div>
          <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button>Contact Us</Button>
          </div>
        </div>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={4}>
            <StaticImage
              src="../assets/images/home/markleach.png"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <h1 className={styles.sectionTitle}>Mark Leach</h1>
            <h4>Here&apos;s looking at you, kid.</h4>
            <p className={styles.sectionDescription}>
              A landing site for country artist Mark Leach for his upcoming single.
            </p>
            <div>
              <Link to="http://markleachmusic.com" style={{ textDecoration: 'none' }}><h4>Visit Site</h4></Link>
            </div>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={6}>
            <h1 className={styles.sectionTitle}>Guerrilla Sportswear</h1>
            <h4>Clothing for fighters</h4>
            <p className={styles.sectionDescription}>
              A landing site for country artist Mark Leach for his upcoming single.
            </p>
            <div>
              <Link to="http://markleachmusic.com" style={{ textDecoration: 'none' }}><h4>Visit Site</h4></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StaticImage
              src="../assets/images/home/gswlaptop.png"
            />
          </Grid>
        </Grid>
      </Section>
      <Section containerStyle={{ backgroundColor: 'black', height: '90px', padding: '20 10' }}>
        <div style={{ display: 'flex', width: '100%' }}>
          <div style={{ flex: 5 }}>
            <h1 className={styles.bannerText}>
              Need help with anything? Reach out and say hi!
            </h1>
          </div>
          <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button>Contact Us</Button>
          </div>
        </div>
      </Section>
      <Section containerStyle={{
        display: 'block', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd',
      }}
      >
        <SectionHeading
          title="Clients"
          subtitle="I get by with a little help from my friends"
        />
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-1.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-2.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-3.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-4.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-5.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-6.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-7.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <StaticImage
              src="../assets/images/logos/logo-8.png"
            />
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default WorkPage;
