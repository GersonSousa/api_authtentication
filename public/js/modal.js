const modal = document.querySelector('.modal-container');
function openModal() {
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

const search = () => {
  const searchIpt = document.getElementById('protocolo').value.toUpperCase();
  const protocolo = document.querySelectorAll('.table-body');
  const protocoloNumero = document.getElementsByTagName('p');

  for (let index = 0; index < protocoloNumero.length; index++) {
    let igual = protocolo[index].getElementsByTagName('p')[0];

    if (igual) {
      let textValue = igual.textContent || igual.innerHTML;

      if (textValue.toUpperCase().indexOf(searchIpt) > -1) {
        protocolo[index].style.display = '';
      } else {
        protocolo[index].style.display = 'none';
      }
    }
  }
};
