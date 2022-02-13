import React from 'react';
import { LightgalleryItem } from "react-lightgallery";

const PhotoItem = ({ image, thumb, group='a' }) => (
  <LightgalleryItem group={group} src={image} thumb={thumb}>
    <img src={image} style={{ width: "100%" }} />
  </LightgalleryItem>
);

export default PhotoItem;
