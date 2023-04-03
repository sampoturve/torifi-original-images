
/**
 * Get url for the original size of the image, from any other size.
 */
function getOriginalImageUrl(url) {
  const matches = url.match(/rule=([^&]*)/);

  if (matches[1] === 'original') {
    alert('🦆 Image is already the original one.');
    return null;
  }

  if (matches[1] && matches[1] !== 'original') {
    return url.replace(matches[1], 'original');
  }
  return null;
}

/**
 * Open original sizes of all the ad images.
 */
function openOriginalSizeImagesFromCurrentPage() {
  if (isStandaloneImagePage()) {
    const standaloneImageUrl = window.location.href;
    const originalImageUrl = getOriginalImageUrl(standaloneImageUrl);
    if (originalImageUrl) {
      window.open(originalImageUrl);
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
 * Check if the current page is a standalone one.
 */
function isStandaloneImagePage() {
  // Check if the current URL has a `?rule` parameter
  const urlParams = new URLSearchParams(window.location.search);
  const ruleParam = urlParams.get("rule");
  return ruleParam !== null;
}
