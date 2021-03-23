---
slug: "/blog/gatsby-cheat-sheet"
date: "2017-11-07"
title: "Gatsby Cheat Sheet"
description: "Gatsby can have some quircky ways of dealing with your data and it's dangerous to go alone. Take this."
featuredImage: "../../assets/images/blog/gatsby.jpg"
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