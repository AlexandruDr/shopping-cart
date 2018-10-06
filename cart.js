var sum = 0;
$('.prod').append('<button class="btn">Add</button>');
$('.cart').append('<output id="tax">Tax here<output>');
$('.cart').append('<output id="total">Total<output>');
$('body').append("<input placeholder = 'Full address here'></input>")
$('.cart').append('<button id="place">Place order</button>');

$('.btn').click(function() {
  
  sum += parseInt((event.target.previousElementSibling.innerHTML).substring(1));
  ($('.prod').eq($('.btn').index(this)).find('p')).clone().appendTo($('.cart'));

  $('#tax').val((sum * (0.1)).toFixed(1));
  $('#total').val(sum * (0.1) + sum);

});

$('.cart').append('<button id="res">Reset</button>');
$('#res').click(function(){$('.cart p').text('');
                            $('.cart #tax').text('Tax here');
                                $('.cart #total').text('Total');
                                    sum=0;});

var prices = $('.prod p');
for (var i=1; i<=prices.length; i+=2) prices[i].innerHTML = '$' + Math.floor(Math.random() * 255);

$('#place').click(function() {alert('Order placed');})