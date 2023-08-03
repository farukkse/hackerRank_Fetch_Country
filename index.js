// for(let i=1 ; i<= 25; i++){
//   for(let k=0; k < 10; k++){
//     fetch(`https://jsonmock.hackerrank.com/api/countries?page=${i}/`)
//     .then(res => res.json())
//     .then(data => {data.data.forEach(x => console.)})
//   }
// }

// fetch(`https://jsonmock.hackerrank.com/api/countries?page=1`)
//     .then(res => res.json())
//     .then(data => console.log(data))

// function fetchCountries(pageNumber) {
//   let omer;
//   fetch(`https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`)
//     .then(res => res.json())
//     .then(data => {
//       const countries = data.data;
//       countries.forEach(country => {
//         const countryDetailsURL = country.alpha2Code;
//         console.log(countryDetailsURL === "AF")
//         if(countryDetailsURL === "AF"){
//           omer = country.name
//         }
//       });
//       console.log(omer)

//       // Toplam sayfa sayısını alıp, mevcut sayfa numarasını güncelleme kontrolü yapabilirsiniz
//       const totalPages = data.total_pages;
//       if (pageNumber < totalPages) {
//         fetchCountries(pageNumber + 1); // Bir sonraki sayfayı almak için tekrar çağırın
//       }
//     })
//     .catch(error => {
//       console.error('Hata oluştu:', error);
//     });
// }

// fetchCountries(1)

// async function getCountryNameByCode(code) {
//   const url = `https://jsonmock.hackerrank.com/api/countries?code=${code}`;

//   try {
//     const response = await fetch(url);

//     if (response.ok) {
//       const data = await response.json();
//       const country = data.data[0] || {};
//       const countryName = country.name || 'Country not found';
//       return countryName;
//     } else {
//       console.log(`An error occurred: ${response.status}`);
//       return 'Error';
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//     return 'Error';
//   }
// }

// // Örnek olarak "AF" koduna karşılık gelen ülke ismini alıyoruz
// const countryCode = 'AF';
// getCountryNameByCode(countryCode)
//   .then((countryName) => {
//     console.log(`Country name for ${countryCode}: ${countryName}`);
//   })
//   .catch((error) => {
//     console.error('An error occurred:', error);
//   });

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

getCountryNameByCode('AF');
