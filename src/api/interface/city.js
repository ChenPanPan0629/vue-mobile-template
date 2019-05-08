// import axios from 'axios'

function getCityList () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cityList = [
        {
          id: 1,
          name: '北京'
        },
        {
          id: 2,
          name: '上海'
        }
      ]
      resolve(cityList)
    })
  })
}
export default { getCityList }
