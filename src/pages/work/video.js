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

const VideoPage = () => {
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
            <h1 className={styles.sectionTitle}>Video</h1>
            <p className={styles.sectionDescription}>
              Inspired by the hard list by Andy Fricella. Keep track of your critical tasks that need to be done each day.
            </p>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/X7VMtUum7wY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/366383639" width="640" height="360" frameBorder="0" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Wedding Videos</h1>
            <p className={styles.sectionDescription}>
              Inspired by the hard list by Andy Fricella. Keep track of your critical tasks that need to be done each day.
            </p>
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/366383639" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/367436881" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/365427097" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12}>
            <SectionHeading
              title="Social Videos"
            />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://www.youtube.com/embed/iih-oBTlbo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://www.youtube.com/embed/iih-oBTlbo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://www.youtube.com/embed/iih-oBTlbo0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={8} style={{ padding: '40px' }}>
          <Grid item xs={12} sm={4}>
            <h1 className={styles.sectionTitle}>Live Events</h1>
            <p className={styles.sectionDescription}>
              Inspired by the hard list by Andy Fricella. Keep track of your critical tasks that need to be done each day.
            </p>
          </Grid>
          <Grid item xs={12} sm={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src="https://player.vimeo.com/video/400112514" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Facebook.mp4" />

          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/351035091" frameBorder="0" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/290144468" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
          <Grid item xs={12} sm={12} sm={6} md={4}>
            <iframe src="https://player.vimeo.com/video/294892756" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default VideoPage;
