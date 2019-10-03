import Sprite from 'sprite'

const SIZE = 100
const PLAYER_IMG_SRC='images/hero.png'
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

export default class Player extends Sprite{

  constructor(){
    super(PLAYER_IMG_SRC,SIZE, SIZE)
    this.x = screenWidth - 200
    this.y = screenHeight / 2 + 50
    this.invisible = false
    this.touched = false
    this.initEvent()
  }

  initEvent(){
    wx.onTouchStart((e) => {
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
    

      if (this.checkMovement(x, y)) {
        this.touched = true
        this.setInBoundary(x, y)
      }

    })
    wx.onTouchMove((e) => {
      let x = e.touches[0].clientX
      let y = e.touches[0].clientY
      if (this.touched) {
        this.setInBoundary(x, y)
      }
    })
    wx.onTouchEnd((e) => {
      this.touched = false
    })
  }

  setInBoundary(x,y){
    if (x < this.width / 2)
      x = this.width / 2
    else if (x > screenWidth - this.width/2)
      x = screenWidth - this.width / 2
    
    if (y < this.height / 2)
      y = this.height / 2
    else if (y > screenHeight- this.height / 2)
      y = screenHeight - this.height / 2

    this.x = x
    this.y = y
  }

  checkMovement(x,y){
    let deviation=SIZE / 2
    return !!(
      x >= this.x - deviation &&
      x <= this.x + deviation &&
      y >= this.y - deviation &&
      y <= this.y + deviation 
    )
  }

  drawPlayerToCanvas(ctx){
    if (this.img) {
      ctx.drawImage(
        this.img,
        this.x - this.width / 2,
        this.y - this.height / 2,
        this.width,
        this.height
      )
    }
  }

}