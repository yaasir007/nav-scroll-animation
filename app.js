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
  console.log(currentScrollPos);
  if (currentScrollPos > 45) {
    nav.style.backgroundColor = 'lightblue';
    nav.classList.add('fadeIn')
  } else {
    nav.style.backgroundColor = 'lightseagreen';
  }
})

logMovies();
