async function logMovies() {
  const response = await fetch("https://date.nager.at/api/v3/publicholidays/2023/US");
  const movies = await response.json();
  const holidays = document.querySelector('.holidays');

  movies.forEach(element => {    
    holidays.innerHTML += `<div class="holiday">
                            <p>Date: ${element.date}</p>
                            <div class="holiday-name">${element.name}</div>
                          </div>`;

  });
}

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  let currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 45) {
    nav.style.backgroundColor = '#98a0e2';
  } else {
    nav.style.backgroundColor = '#565d87';
  }
})

logMovies();
