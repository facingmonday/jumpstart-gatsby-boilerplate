---
slug: "/blog/gatsby-cheat-sheet"
date: "2017-11-07"
title: "My first blog post"
featuredImage: "../../assets/images/blog/blog-1.jpg"
---

# Gatsby Cheatsheet

### Specific File by Name
```
const { heroImage } = useStaticQuery(
  graphql`
    query {
      heroImage: file(name: { eq: "contact-hero" }) {
        childImageSharp {
          gatsbyImageData(
            formats: [JPG]
          )
        }
      }
    }
  `,
);
```

### All files in directory
```
query AllFilesInDirectory {
  allFile(filter: {dir: {regex: "/assets\/images\/social/"}}) {
    edges {
      node {
        id
        name
        sourceInstanceName
        dir
      }
    }
  }
}
```