const select = document.querySelectorAll(".currency"),
      input_currency = document.getElementById('currency_input'),
      output_currency = document.getElementById('currency_output');

fetch(`https://api.frankfurter.app/currencies`)
  .then(data => data.json())
  .then(data => {
    for (const [key] of Object.entries(data)) {
      select[0].innerHTML += `<option value="${key}">${key}</option>`;
      select[1].innerHTML += `<option value="${key}">${key}</option>`;
    }
});

const convert = () => {
	const [from, to] = select;
	if (from.value !== to.value) {
	  fetch(`https://api.frankfurter.app/latest?amount=${input_currency.value}&from=${from.value}&to=${to.value}`)
		.then(res => res.json())
		.then(({ rates }) => {
		  output_currency.value = rates[to.value];
		  console.log(rates[to.value]);
		});
	}
  }
