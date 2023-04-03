
/**
 * Open original sizes of the ad images.
 */
function openOriginalSizeImagesFromCurrentPage() {
  if (isStandaloneImagePage()) {
    const originalImageUrl = getOriginalImageUrl(window.location.href);
    if (originalImageUrl) {
      window.open(originalImageUrl, '_self');
    }
    return true;
  }

  // Ad page thumbnails.
  const thumbnails = document.querySelectorAll('.thumb, .ad_images_image img');
  thumbnails.forEach(thumb => {
    const src = thumb.getAttribute('src');
    const originalImageUrl = getOriginalImageUrl(src);
    if (originalImageUrl) {
      window.open(originalImageUrl);
    }
  });
}

/**
 * Get url for the original size of the image, from any other size.
 */
function getOriginalImageUrl(url) {
  const matches = url.match(/rule=([^&]*)/);

  // Images must always have the rule parameter.
  if (!matches[1]) {
    alert('🦆 TOI: No rule parameter found.');
  }

  if (matches[1] === 'original') {
    alert('🦆 TOI: Image is already the original one.');
    return null;
  }

  return url.replace(matches[1], 'original');
}

/**
 * Check if the current page is a standalone one (has the ?rule param).
 */
function isStandaloneImagePage() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('rule') !== null;
}
