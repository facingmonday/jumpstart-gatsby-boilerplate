import React from 'react';
import { graphql } from 'gatsby';
import Page from '../components/Page';
import Section from '../components/Section';
import HeroImage from '../components/HeroImage';

export default function BlogTemplate({
  data: { markdownRemark: { frontmatter, html } },
}) {
  console.log('frontmatter', frontmatter);
  return (
    <Page headerColor="black">
      <HeroImage
        image={frontmatter?.featuredImage?.childImageSharp?.fluid}
        superTitle={frontmatter.date}
        title={frontmatter.title}
      />
      <Section>
        <div className="blog-post-container">
          <div className="blog-post">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Section>
    </Page>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
