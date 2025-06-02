function exploreNow() {
  // Scroll ke bagian eksplorasi (Section 2)
  const section = document.querySelector(".section-explore");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

document.querySelectorAll('.destination-card').forEach(card => {
  card.addEventListener('click', () => {
    const title = card.querySelector('h3').textContent;
    alert(`Kamu memilih: ${title}`);
  });
});

const benuaCards = document.querySelectorAll('.explore-card[data-benua]');
const negaraCards = document.querySelectorAll('.country-card');
const hidanganCards = document.querySelectorAll('.dish-icon');

benuaCards.forEach(card => {
  card.addEventListener('click', () => {
    const selectedBenua = card.getAttribute('data-benua');

    // Filter negara
    negaraCards.forEach(negara => {
      negara.style.display = negara.getAttribute('data-benua') === selectedBenua ? 'block' : 'none';
    });

    // Filter hidangan
    hidanganCards.forEach(hidangan => {
      hidangan.style.display = hidangan.getAttribute('data-benua') === selectedBenua ? 'block' : 'none';
    });
  });
});
