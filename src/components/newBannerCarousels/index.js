import React from "react";
import PhotoGalleryCarousel from "./photoGalleryCarousel";

export default function NewBannerCarousels({
  photoGalleryImages,
  featuredVlogVideos,
  featuredVideos, 
}) { 
  return (
    <div className="new-banner-carousels w-full h-auto flex-col md:flex-row md:flex md:justify-between">
      {photoGalleryImages && (
        <PhotoGalleryCarousel photoGalleryImages={photoGalleryImages} />
      )}

      {featuredVlogVideos && (
        <PhotoGalleryCarousel photoGalleryImages={photoGalleryImages} />
      )}

      {featuredVideos && (
        <PhotoGalleryCarousel photoGalleryImages={photoGalleryImages} />
      )}
    </div>
  );
}
