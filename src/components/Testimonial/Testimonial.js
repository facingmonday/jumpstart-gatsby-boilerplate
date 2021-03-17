import React, { Component } from 'react';
import Avatar from '../Avatar';

import { StaticImage } from "gatsby-plugin-image"

import * as styles from './Testimonial.module.scss';

const Testimonial = ({ quote, name, title, logo }) => (
  <div class={styles.testimonial__container}>
    <div class={styles.testimonial__quote_container}>
        <i class={styles.testimonial__quote_left}></i> 
        <blockquote class={styles.testimonial__quote}>{quote}</blockquote>                            
    </div>
    <div class={styles.testimonial__meta}>
      <div class={styles.testimonial__profile}>
        <Avatar />
        <p class={styles.testimonial__name}>{name}</p>
        <p class={styles.testimonial__title}>{title}</p>
      </div>
      <div class={styles.testimonial__logo}>
        <StaticImage
          src={logo.url}
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt={logo.alt}
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
  </div>  
)

export default Testimonial;