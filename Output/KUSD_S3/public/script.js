document.getElementById('inputForm').onsubmit = function(event) {
  event.preventDefault();

  var input1 = document.getElementById('input1').value;
  var input2 = document.getElementById('input2').value;
  var address = document.getElementById('address-select').value;

  fetch('/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ input1: input1, input2: input2, address: address })
  })
  .then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
};

function updateAddress() {
  const addressSelect = document.getElementById('address-select');
  const walletAddress = document.getElementById('wallet-address');
  walletAddress.innerHTML = `${addressSelect.value} <img src="copy_symbol2.png" alt="Copy" onclick="copyAddress()" class="copy-icon">`;
}

function copyAddress() {
  var selectedAddress = document.getElementById('address-select').value;
  var addressText = document.getElementById('wallet-address').textContent.trim();
  var addressToCopy = addressText.split(' ')[0]; // 첫 번째 공백을 기준으로 문자열을 나누어 첫 번째 부분만 가져옴
  navigator.clipboard.writeText(addressToCopy).then(function() {
      alert('Address ' + selectedAddress + ' copied to clipboard');
  }, function(err) {
      console.error('Could not copy text: ', err);
  });
}

function loadHTML(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error('Error loading HTML:', error));
}


// Load main.html and policy.html
loadHTML('main.html', 'main-content');
loadHTML('policy.html', 'policy-content');