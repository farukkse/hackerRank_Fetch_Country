async function getCountryNameByCode(code) {
  const response = await fetch(
    `https://jsonmock.hackerrank.com/api/countries?alpha2Code=${code}`
  );

  const data = await response.json();
  const country = data.data[0] || null;
  // console.log(data.data);

  if (country) {
    return console.log(country.name);
  } else {
    console.log(`No country found with code ${code}`);
    return null;
  }
}

getCountryNameByCode('TR');
