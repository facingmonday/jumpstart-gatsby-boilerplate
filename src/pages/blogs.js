import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import HeroVideo from '../components/HeroVideo';

import Page from '../components/Page';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Section from '../components/Section';
import HeroCarousel from '../components/HeroCarousel';
import IconBlock from '../components/IconBlock';
import SectionHeading from '../components/SectionHeading';
import HeroImage from '../components/HeroImage';

import * as styles from './blogs.module.scss';

export const query = graphql`
  query {
    blogs: allMarkdownRemark(
      filter: {},
      limit: 4,
      sort: {
        fields: frontmatter___date
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date
            description
            featuredImage {
              publicURL
            }
          }
        }
      }
    }
    topBlogs: allMarkdownRemark(
      limit: 4
      sort: {fields: frontmatter___date}
      filter: {frontmatter: {title: {regex: "/Gatsby/"}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date
            featuredImage {
              publicURL
            }
          }
        }
      }
    }
    heroImage: allFile(filter: {absolutePath: {regex: "/blog\/hero/"}}) {
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

const BlogsPage = ({ data: { heroImage, blogs, topBlogs } }) => (
  <Page headerColor="black">
    <SEO title="Home" />
    {/* <HeroImage
        image={data?.heroImage?.childImageSharp?.gatsbyImageData?.images?.fallback}
        superTitle="Want to chat?"
        title="Reach out and (get in) touch (with) me."
    /> */}
    <HeroCarousel
      title="Blogs"
      images={heroImage?.edges?.map(({ node }) => node)}
    />
    <Section containerStyle={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Recent Blog Posts</h1>
        </Grid>
        <Grid item xs={9}>
          { blogs?.edges?.length && blogs.edges.map(({ node }) => (
            <Link to={node.frontmatter.slug} style={{ textDecoration: 'none', color: 'black' }}>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <img src={node.frontmatter.featuredImage.publicURL} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={7}>
                  <h4 className={styles.blogs__title}>{node.frontmatter.title}</h4>
                  <p className={styles.blogs__description}>{node.frontmatter.description}</p>
                </Grid>
              </Grid>
            </Link>
          ))}
        </Grid>
        <Grid item xs={3}>
          <Grid container>
            <Grid xs={12}>
              <h2>Top Blog Posts</h2>
            </Grid>
            <Grid xs={12}>
              { topBlogs?.edges?.length && topBlogs.edges.map(({ node }) => (
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Link to={node.frontmatter.slug}>
                      <h4 className={styles.blogs__title}>{node.frontmatter.title}</h4>
                    </Link>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  </Page>
);

export default BlogsPage;
