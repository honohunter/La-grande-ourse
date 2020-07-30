/* eslint-disable react/prop-types */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImageLoader = props => {
  const { imageName } = props;
  const data = useStaticQuery(graphql`
    query {
      sectionBImage: file(relativePath: { eq: "sectionB-image.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sectionCImage1: file(relativePath: { eq: "sectionC-image-1.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sectionCImage2: file(relativePath: { eq: "sectionC-image-2.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sectionCImage3: file(relativePath: { eq: "sectionC-image-3.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sectionCImage4: file(relativePath: { eq: "sectionC-image-4.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sectionDImage: file(relativePath: { eq: "sectionD-image.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[imageName].childImageSharp.fluid} {...props} />;
};

export default ImageLoader;
