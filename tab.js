function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function toggleDropdown(dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    var button = dropdown.querySelector('.dropbtn');
    
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }

    var allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(function(dropdown) {
        if (dropdown !== dropdown) {
            dropdown.querySelector('.dropdown-content').style.display = 'none';
        }
    });

    button.classList.toggle('active');
}

function selectOption(option) {
  var selectedText = option.textContent;
  
  var dropdownButton = option.closest('.dropdown').querySelector('.dropbtn');
  dropdownButton.textContent = selectedText;

  dropdownButton.classList.add('selected-option');

  var dropdownContent = option.closest('.dropdown').querySelector('.dropdown-content');
  dropdownContent.style.display = 'block';
}

function selectIncome(button) {
  var buttons = document.querySelectorAll('.annual-income-options button');
  buttons.forEach(function(btn) {
      btn.classList.remove('active');
  });

  
  button.classList.add('active');

}