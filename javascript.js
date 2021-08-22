

const jsonFile = 'data.json'
const createRLabel = {}
const createFestival = {}
const festivalNames = document.querySelector(".festival")


const callApiData = () => {
  fetch(jsonFile)
    .then(response => response.json())
    .then((data) => {
      // console.log(data)
      grabFestival(data)
    });
};

const grabFestival = (data) => {
  data.forEach((festival) => {
    festival.bands.forEach((band) => {
      createFestival[band.name] = festival.name
      if (createRLabel.hasOwnProperty(band.recordLabel)) {
        let newArr = []
        newArr.push(createRLabel[band.recordLabel])
        newArr.push(band.name)
        createRLabel[band.recordLabel] = newArr
      } else {
        createRLabel[band.recordLabel] = band.name
      }
    })
  })
   displayData()
}

const displayData = () => {
  const festivalNames = document.querySelector(".festival")
  Object.entries(createFestival).forEach(
    ([key, value]) => {
      festivalNames.insertAdjacentHTML("beforeend", `<h3>${key}</h3>`)
    }
  );
}




const callApi = async () => {
  try {
    callApiData()
  }
  catch (err) {
    console.log("wrong")
  }
}

callApi()
