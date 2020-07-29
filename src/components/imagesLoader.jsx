/* eslint-disable react/prop-types */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const ImageLoader = props => {
  const { imageName } = props;
  const data = useStaticQuery(graphql`
    query {
      sectionB: file(relativePath: { eq: "sectionB-background.png" }) {
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[imageName].childImageSharp.fluid} {...props} />;
};

export default ImageLoader;
