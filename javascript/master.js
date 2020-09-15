const url =
  "https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/breakingbad";

const resultsContainer = document.querySelector(".resultsContainer");

async function makeApiCall() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const data = results.data;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      const allData = data[i];

      if (i == 7) {
        break;
      }

      resultsContainer.innerHTML += `
      <div class="userData">
      <div class="name">Name: ${allData.name}</div>
     <div class="birthday">Birthday: ${allData.birthday}</div>
     <div class="nickname">Nickname: ${allData.nickname}</div>
     <span class="occupation">Occupation: ${allData.occupation}</span>
     </div>`;
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

makeApiCall();
