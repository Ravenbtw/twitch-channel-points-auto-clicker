setInterval(() => {
  if (document.querySelector('.claimable-bonus__icon')) {
    console.log('Found bonus button and pressed it.');
    document.querySelector('.claimable-bonus__icon').click();
  } else {
    console.log('No bonus button yet.');
  }
}, 1000*5)
