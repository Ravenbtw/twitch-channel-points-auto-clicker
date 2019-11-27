setInterval(() => {
  if (document.querySelector('.claimable-bonus__icon')) {
    console.log('Found bonus button and pressed it.');
    document.querySelector('.claimable-bonus__icon').click();
  }
}, 1000*3)
