// import axios from 'axios'

function getUserInfo () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userInfo = {
        name: 'guangyan',
        city: '北京',
        qq: 392151426
      }
      resolve(userInfo)
    })
  })
}
export default { getUserInfo }
