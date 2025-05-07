function removeAds() {
  document
    .querySelectorAll('[data-testid="ad-component"]')
    .forEach((el) => el.remove());
  document
    .querySelectorAll('[data-testid="stickyside-component"]')
    .forEach((el) => el.remove());

  const partialClassNames = [
    "Ad_placement",
    "Ad_articleResource",
    "StickySideAd_wideScreenAdAnchor",
    "StickySideAd_widescreenAd",
    "DesktopFeedPanoramaAd_adContainer",
    "DesktopFeedPanoramaAd_adContent"
  ];

  partialClassNames.forEach((partialName) => {
    document.querySelectorAll(`[class*="${partialName}"]`).forEach((el) => el.remove());
  });

  // Hidden adds shown as "News article"
  document
    .querySelectorAll('[class*="TeaserCluster_clusterContainer"]')
    .forEach((cluster) => {
      const containsAdMarker = cluster.textContent.includes("ANNONS");
      if (containsAdMarker) {
        cluster.remove();
      }
    });
}

removeAds();

const observer = new MutationObserver(() => {
  removeAds();
});

observer.observe(document.body, { childList: true, subtree: true });
