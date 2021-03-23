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

import * as styles from './apps.module.scss';

const AppsPage = () => {
  const { heroImages } = useStaticQuery(graphql`
    query {
      heroImages: allFile(filter: {dir: {regex: "/assets\/images\/apps\/hero/"}}) {
        edges {
          node {
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
        images={heroImages?.edges?.map(({ node }) => node)}
      />
      <Section>
        <Grid container spacing={2}>
          <Grid item xs={4} />
          <Grid item xs={8} />
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} className={styles.toolContainer}>
            <StaticImage className={styles.toolImage} src="../../assets/images/apps/expo-icon.png" />
            <h4 className={styles.toolName}>Expo</h4>
            <p className={styles.toolDescription}>
              I use expo for applications for basic applications whose feature set doesn't extend beyond the capabilities of the Expo SDK's APIs.
            </p>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.toolContainer}>
            <StaticImage className={styles.toolImage} src="../../assets/images/apps/react-native2.png" />
            <h4 className={styles.toolName}>React Native</h4>
            <p className={styles.toolDescription}>
              For applications that require more direct access to iOS and Android features like bluetooth and cast or mirroring, I'll use a React Native application, often ejected from Expo.
            </p>
          </Grid>
          <Grid item xs={12} sm={4} className={styles.toolContainer}>
            <StaticImage className={styles.toolImage} src="../../assets/images/apps/firebase.png" />
            <h4 className={styles.toolName}>Firebase</h4>
            <p className={styles.toolDescription}>
              As far as API's go, Firebase is my go to solution for Auth and NoSQL databases. I'm also well versed in Node and Python using MySQL, Postgress, and MongoDB.
            </p>
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8}>
            <p className={styles.sectionUpperTitle}>Check out my latest app.</p>
            <h1 className={styles.sectionTitle}>Get. Stuff. Done.</h1>
            <p className={styles.sectionDescription}>
              Inspired by the hard list by Andy Fricella. Keep track of your critical tasks that need to be done each day. When you complete them, cross them off the list. Once you've accomplished all your tasks for that day, we'll mark it as a W. Otherwise, we'll chalk it up as an L and we all know what that means.
            </p>
            <p style={{ marginLeft: 10 }}>
              <ul>
                <li>Track up to 5 tasks a day</li>
                <li>Schedule critical tasks for today or tomorrow</li>
                <li>Daily notifications to keep you on track</li>
                <li>Earn rewards for consistancy and perserveraence</li>
                <li>Share progress with friends</li>
              </ul>
            </p>
            <p className={styles.sectionDescription}>
              Download the app today and start on a path to conquoring yourself
            </p>
            <div style={{ display: 'flex' }}>
              <Link to="https://store.apple.com">
                <StaticImage style={{ marginRight: 20 }} src="../../assets/images/apps/iosappstore.png" />
              </Link>
              <Link to="https://store.apple.com">
                <StaticImage style={{ marginRight: 20 }} src="../../assets/images/apps/playstore.png" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              src="../../assets/images/home/phone.png"
            />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <StaticImage
              imgStyle={{ objectFit: 'contain' }}
              src="../../assets/images/apps/blaze-capital.png"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <p className={styles.sectionUpperTitle}>A simple Chrome Extension</p>
            <h1 className={styles.sectionTitle}>Blaze Capital Stock Adder ...thing</h1>
            <p className={styles.sectionDescription}>
              If you're a member of the Blaze capital community you might benefit from this chrome extension. Just highlight the ticker on the page and click the BC icon. Then you can add it to your watch lists.
            </p>
            <div style={{ display: 'flex' }}>
              <Button onClick={() => navigate('https://github.com/facingmonday/blaze-capital-chrome-extension', { target: 'blank' })} variant="contained" color="default" size="md"><p style={{ margin: 0, padding: 0 }}>View on Github</p></Button>
            </div>
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default AppsPage;
