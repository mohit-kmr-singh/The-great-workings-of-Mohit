  document.querySelectorAll('.card').forEach(card => {
    const cardBack = card.querySelector('.card-back');
    let rotateX = 0, rotateY = 0;
    let targetX = 0, targetY = 0;

    function animate() {
      rotateX += (targetX - rotateX) * 0.1; // easing factor
      rotateY += (targetY - rotateY) * 0.1;
      cardBack.style.transform = `rotateY(180deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      requestAnimationFrame(animate);
    }
    animate();

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      targetX = ((y - centerY) / centerY) * 10;
      targetY = ((x - centerX) / centerX) * 10;
    });

    card.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });
  });