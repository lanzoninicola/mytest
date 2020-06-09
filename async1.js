let videoName
let i=0

let name
let videoArray=[]

function getVideos() {
    const writeVideoTitle = () => {
        videoName = 'video nr. ' + i++
        //console.log(videoName)
        return videoName
      }
      
    const delay = () => {
        return setTimeout(writeVideoTitle, 800)
      }
      
    delay()  
    
}

function looping () {
    while (i<=5) {
        getVideos()
    }
}

looping()


videoArray.push(name)

console.log(videoArray)

