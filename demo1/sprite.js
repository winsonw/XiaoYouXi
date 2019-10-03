export default class Sprite{
  constructor(imgSrc = '', width, height, x = 0, y = 0, color = '#0000FF'){
    this.width = width
    this.height = height
    if (imgSrc != ''){
      this.img = new Image()
      this.img.src = imgSrc
    }
    this.x = x
    this.y = y
    this.color = color
  }

  drawToCanvas(ctx){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
  }
}