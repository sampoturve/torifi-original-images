// Standalone image page.
javascript: (function() {
  openOriginalSizeImagesFromCurrentPage();
}());

/**
 * Redirect an image URL to its "original" variant.
 */
function redirectImageUrlToOriginal(url) {
  const originalImageUrl = getOriginalImageUrl(url);
  if (url !== originalImageUrl) {
    window.location = originalImageUrl;
  }
}

/**
 * Get url for the original size of the image, from any other size.
 */
function getOriginalImageUrl(url) {
  const  matches = url.match(/rule=([^&]*)/);
  if (matches[1] && matches[1] !== 'original') {
    return url.replace(matches[1], 'original');
  }
  return null;
}

/**
 * Open original sizes of all the ad images.
 */
function openOriginalSizeImagesFromCurrentPage() {
  // @todo Images in the "Big images" popup are in .ad_images_image > img.

  // Ad page thumbnails.
  const thumbnails = document.getElementsByClassName('thumb');
  thumbnails.forEach(thumb => {
    const src = thumb.getAttribute('src');
    const originalImageUrl = getOriginalImageUrl(src);
    if (originalImageUrl) {
      window.open(originalImageUrl);
    }
  });
}
