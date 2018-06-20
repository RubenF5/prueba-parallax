var app = new Vue({
    el: '#app',
    data: {
        message: 'Hola Mundo!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });


$('#click').click(function(e){
  e.preventDefault();
    $('body,html').animate({
      scrollTop: 0
    },5000);

});
