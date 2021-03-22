import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { convertToBgImage } from 'gbimage-bridge';
import GatsbyBackgroundImage from 'gatsby-background-image';

const BackgroundImage = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(name: { eq: "blog-1" }) {
          childImageSharp {
            gatsbyImageData(
              formats: [JPG]
            )
          }
        }
      }
    `,
  );
  console.log('data', data);
  const image = getImage(data?.placeholderImage);

  const bgImage = convertToBgImage(image);
  console.log('bgImage', data);
  return (
    <GatsbyBackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      <div style={{ minHeight: 1000, minWidth: 1000 }}>
        {children}
      </div>
    </GatsbyBackgroundImage>
  );
};

export default BackgroundImage;
