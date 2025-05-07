function removeAds() {
  document
    .querySelectorAll('[data-testid="ad-component"]')
    .forEach((el) => el.remove());
  document
    .querySelectorAll('[data-testid="stickyside-component"]')
    .forEach((el) => el.remove());

  const classNamesToRemove = [
    "Ad_placement__QjKHs",
    "Ad_articleResource__4MgjU",
    "StickySideAd_wideScreenAdAnchor__nwcyQ",
    "StickySideAd_widescreenAd__AQRun",
  ];

  classNamesToRemove.forEach((className) => {
    document.querySelectorAll(`.${className}`).forEach((el) => el.remove());
  });

  // Hidden adds shown as "News article"
  document
    .querySelectorAll(".TeaserCluster_clusterContainer__o70EC")
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
