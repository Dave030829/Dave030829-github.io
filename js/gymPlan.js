document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn.onclick = function(){
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    }
});

function showTable(tableId) {
    const tableContainers = document.querySelectorAll('.table-container');
    tableContainers.forEach(container => container.classList.remove('show'));

    const selectedTable = document.getElementById(tableId);
    selectedTable.classList.add('show');
  }

  function checkSelection() {
    const allRadioButtons = document.getElementsByName('tableSelect');
    const isAnyRadioButtonSelected = [...allRadioButtons].some(radio => radio.checked);

    if (!isAnyRadioButtonSelected) {
      const tableContainers = document.querySelectorAll('.table-container');
      tableContainers.forEach(container => container.classList.remove('show'));
    }
  }

  // Add event listeners to radio buttons to handle the case when none is selected
  const radioButtons = document.getElementsByName('tableSelect');
  radioButtons.forEach(radio => radio.addEventListener('click', checkSelection));
