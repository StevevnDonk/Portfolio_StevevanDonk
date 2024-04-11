// Wacht tot het DOM (Document Object Model) volledig is geladen voordat de code wordt uitgevoerd
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer belangrijke elementen uit de DOM en wijs ze toe aan variabelen
    const body = document.querySelector('body');          // Selecteer het <body> element
    const navbar = document.querySelector('.navbar');      // Selecteer de navigatiebalk (.navbar)
    const menu = document.querySelector('.menu-list');     // Selecteer de lijst met menu-items (.menu-list)
    const menuBtn = document.querySelector('.icon.menu-btn'); // Selecteer de menuknop (.icon.menu-btn)
  
    // Voeg een 'click' eventlistener toe aan de menuknop
    menuBtn.addEventListener('click', function() {
      // Toggle de 'active' class op de menu-lijst en menuknop bij elke klik
      menu.classList.toggle('active');        // Schakel de 'active' class van de menu-lijst in/uit
      menuBtn.classList.toggle('active');     // Schakel de 'active' class van de menuknop in/uit
      body.classList.toggle('disabledScroll'); // Schakel de 'disabledScroll' class van het <body> element in/uit
    });
  
    // Voeg een 'click' eventlistener toe aan alle menu-items
    const menuItems = document.querySelectorAll('.menu-list li a');
    menuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        // Verwijder de 'active' class van de menu-lijst en menuknop wanneer een menu-item wordt geklikt
        menu.classList.remove('active');      // Verwijder de 'active' class van de menu-lijst
        menuBtn.classList.remove('active');   // Verwijder de 'active' class van de menuknop
        body.classList.remove('disabledScroll'); // Verwijder de 'disabledScroll' class van het <body> element
      });
    });
  
    // Voeg een eventlistener toe aan het scrollen van het venster (window)
    window.addEventListener('scroll', function() {
      // Voeg de 'sticky' class toe aan de navigatiebalk (.navbar) wanneer er wordt gescrold meer dan 20 pixels vanaf de top
      navbar.classList.toggle('sticky', window.scrollY > 20);
    });
  });
  