const spoilersArr = document.querySelectorAll('[data-spoilers]');

if (spoilersArr.length > 0) {
  const spoilersRegular = Array.from(spoilersArr).filter((item) => {
    return !item.dataset.spoilers.split(',')[0];
  });

  if (spoilersRegular.length > 0) {
    initSpoilers(spoilersRegular);
  }

  const spoilersMedia = Array.from(spoilersArr).filter((item) => {
    return item.dataset.spoilers.split(',')[0];
  });

  // console.log(spoilersMedia);
}
