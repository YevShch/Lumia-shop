let items = []

$('#search').on('keyup', search);

$('.product').hide();

function toggle(image) {
  if ($(image).parent().hasClass('big')) {
    $(image).parent().removeClass('big');
    $('#cart').show();
  } else {
    $(image).parent().addClass('big');
    $('#cart').hide();
  }
}

function search(textField) {
  $('.product').hide();
  let searchText = $('#search').val().toLowerCase();
  $('.product h2').each(function () {
    let productText = $(this).text().toLowerCase();
    if (searchText && productText.indexOf(searchText) >= 0) {
      $(this).parent().parent().show();
    }
  });
}

function add(product) {
  let productName = $(product).parent().children('h2').text();
  let productPrice = $(product).children('span').text();
  let theItem = items.filter(item => item.name === productName)
  if (!theItem[0]) {
    items.push({ name: productName, price: productPrice, count: 1 })
  } else {
    theItem[0].count++;
  }
  let total = 0;
  $('#cart ul').html('');
  for (let item of items) {
    total += (item.count * item.price);
    $('#cart ul').append('<li>' + item.name + '<span>(' + item.price + 'kr,</span><span>' + item.count + 'st)</span><span>' + (item.count * item.price) + 'kr</span></li>')
  }
  $('#cart ul').append('<li class="total">Total <span>' + total + '</span></li>');
}


let total = 12345;

function renderCheckout(){
  $('#checkout').remove()
  $('#cart').append(`
    <div class="cover">
      <form id="checkout">
        <br>
        <h3>Dina uppgifter</h3>
        <ul>
          <li>Namn: <input type="text" id="name" required pattern="?{2,50}"></li>
          <li>Gatuadress: <input type="text" id="street" required pattern="?{2,50}"></li>
          <li>Postnr: <input type="text" id="zip" required pattern="[\\d\\s]{5,6}"></li>
          <li>Ort: <input type="text" id="city" required pattern="[\\wåäöÅÄÖ]{2,50}"></li>
        </ul>
        <ul>
          <li>Kortnr:  <input type="text" id="card-nr" required pattern="\\d{13,16}"></li>
          <li>Datum: <input type="text" id="card-date" required pattern="\\d{2}\\/\\d{2}" placeholder="mm/yy"></li>
          <li>CCV: <input type="text" id="card-ccv" required pattern="\\d{3}"></li>
        </ul>
        <button>Betala</button>
      </form>
    </div>    
  `);
}

$('body').on('submit', '#checkout', pay)

function pay(e){
  e.preventDefault()
  $('#checkout').remove()
  alert("paying " + total )
  items.length = 0
  $('#cart ul').html('');
}
