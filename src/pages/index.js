import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Aperture, Globe, Video } from 'react-feather';

import HeroVideo from '../components/HeroVideo';

import Page from '../components/Page';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Section from '../components/Section';
import BlockSet from '../components/BlockSet';
import IconBlock from '../components/IconBlock';

const IndexPage = () => (
  <Page>
    <SEO title="Home" />
    <HeroVideo
      title="Professional Video Editing"
      videoUrl="https://player.vimeo.com/video/393604471?background=1&autoplay=1&loop=1&byline=0&title=0"
    />
    <Section>
      <BlockSet
        xs={12}
        sm={6}
        md={4}
      >
        <IconBlock
          title="Consulting"
          description="We like to consult"
          iconName="users"
          href="/services/consulting"
        />
        <IconBlock
          title="Photography"
          description="We provide all kinds of services"
          iconName="aperture"
          href="/services/photography"
        />
        <IconBlock
          title="Video"
          description="We provide all kinds of services"
          iconName="video"
          href="/services/video"
        />
        <IconBlock
          title="Website and Apps"
          description="Marketing, Shopify, eCommerce, and custom built apps"
          iconName="globe"
          href="/services/web"
        />
        <IconBlock
          title="Print"
          description="T-shirts, posters, banners, oh my!"
          iconName="printer"
          href="/services/print"
        />
        <IconBlock
          title="Social"
          description="We provide all kinds of services"
          iconName="share"
          href="/services/social"
        />
      </BlockSet>
    </Section>
  </Page>
);

export default IndexPage;
