setInterval(() => {
  if (!document.querySelector('.claimable-bonus__icon')) return;

  console.log(
    `[${new Date()
      .toISOString()
      .replace('T', ' ')
      .replace('Z', '')}] Found Channel Points bonus chest and pressed it.`
  );
  document.querySelector('.claimable-bonus__icon').click();
}, 1000);
