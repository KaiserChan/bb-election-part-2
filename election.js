document.addEventListener("DOMContentLoaded", function() {

  // Imagination!
  var allCandidates = document.querySelector('#all-candidates');

  $.ajax ({
      url: "https://bb-election-api.herokuapp.com/",
      method: "GET",
      dataType: "JSON"
  }).done(function (data) {

    var candidates = data['candidates']
    for (i = 0; i < candidates.length; i++) {
      var candidate = document.createElement('div');

      var name = document.createElement('li');
      name.setAttribute('class', 'candidate-name');

      var votes = document.createElement('p');
      votes.setAttribute('class', 'candidate-vote');

      name.innerHTML = 'Name: ' + candidates[i]['name'];
      votes.innerHTML = ' Votes: ' + candidates[i]['votes'];

      var lineBreak = document.createElement('br');

      var voteForm = document.createElement('form');
      voteForm.action = "https://bb-election-api.herokuapp.com/vote";
      voteForm.method = "POST";

      var hiddenInput = document.createElement('input');
      hiddenInput.value = candidates[i]['name'];
      hiddenInput.type = 'hidden';
      hiddenInput.name = 'name';

      voteForm.appendChild(hiddenInput);

      var voteButton = document.createElement('button');


      voteButton.innerHTML = 'Place your vote!'
      voteForm.appendChild(voteButton);
      candidate.appendChild(name);
      candidate.appendChild(votes);
      candidate.appendChild(voteForm);

      allCandidates.appendChild(candidate);
      allCandidates.appendChild(lineBreak);

      voteButton.addEventListener('click',function(event) {
          event.preventDefault();
          // $.ajax({
          //   url:
          // })
      })
    }

  });

});
