import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Gallery from '@browniebroke/gatsby-image-gallery';

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

export const pageQuery = graphql`
  query {
    images: allFile(filter: {dir: {regex: "/assets\/images\/photography\/gallery/"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    eventImages: allFile(filter: {dir: {regex: "/assets\/images\/photography\/event-gallery/"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    concertImages: allFile(filter: {dir: {regex: "/assets\/images\/photography\/concerts-gallery/"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    heroImage: allFile(filter: {relativeDirectory: {eq: "work"}}) {
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
`;

const PhotographyPage = ({
  data: {
    concertImages, eventImages, heroImage, images,
  },
}) => {
  // `images` is an array of objects with `thumb` and `full`
  const galleryImages = images.edges
    .map(({ node }) => node.childImageSharp)
    .filter((image) => image?.thumb);

  const eventGalleryImages = eventImages.edges
    .map(({ node }) => node.childImageSharp)
    .filter((image) => image?.thumb);

  const concertGalleryImages = concertImages.edges
    .map(({ node }) => node.childImageSharp)
    .filter((image) => image?.thumb);

  return (
    <Page headerColor="black">
      <SEO title="Work" />
      <HeroCarousel
        title="Professional Video Editing"
        images={heroImage?.edges?.map(({ node }) => node)}
      />
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <StaticImage
              src="../../assets/images/photography/event-photography.jpg"
            />
          </Grid>
          <Grid item xs={6}>
            <h2>Corporate Events &amp; Outings</h2>
          </Grid>
          <Grid item xs={12}>
            { eventGalleryImages?.length && <Gallery images={eventGalleryImages} /> }
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <h2>Senior Pictures</h2>
          </Grid>
          <Grid item xs={6}>
            <StaticImage
              src="../../assets/images/photography/senior-pictures.jpg"
            />
          </Grid>
          <Grid item xs={12}>
            { galleryImages?.length && <Gallery images={galleryImages} onClose={(e) => { e.preventDefault(); return false; }} /> }
          </Grid>
        </Grid>
      </Section>
      <Section>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <StaticImage
              src="../../assets/images/photography/concerts.jpg"
            />
          </Grid>
          <Grid item xs={4}>
            <h2>Concerts &amp; Music Festivals</h2>
          </Grid>
          <Grid item xs={12}>
            { concertGalleryImages?.length && <Gallery images={concertGalleryImages} /> }
          </Grid>
        </Grid>
      </Section>
    </Page>
  );
};

export default PhotographyPage;
