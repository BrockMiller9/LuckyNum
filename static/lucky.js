/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
  evt.preventDefault();
  let name = $("#name").val();
  let year = $("#year").val();
  let email = $("#email").val();
  let color = $("#color").val();
  let data = { name, year, email, color };
  //   create this request using axios
  await axios.post("/api/get-lucky-num", data).then(handleResponse);
  //   $.post("/api/get-lucky-num", data, handleResponse);
}

/** handleResponse: deal with response from our lucky-num API. */

function handleResponse(resp) {
  let num = resp.data.num.num;
  let fact = resp.data.num.fact;
  let year = resp.data.year;
  let color = resp.data.color;
  $("#lucky-results").html(
    `<p>Your lucky number is ${num}</p>
        <p>Your birth year ${year} fact is: ${fact}</p>
        <p>Your favorite color is ${color}</p>`
  );
}

$("#lucky-form").on("submit", processForm);
