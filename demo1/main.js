import Player from 'player'

let ctx = canvas.getContext('2d')

export default class Main{
  constructor(){
    this.restart()
    this.aniId = 0
  }
  restart(){
    this.player = new Player()
    this.bindloop = this.loop.bind(this)
    window.cancelAnimationFrame(this.aniID)
    this.aniId = window.requestAnimationFrame(
      this.bindloop,
      canvas
    )
  }
  render(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    this.player.drawPlayerToCanvas(ctx)
  }

  update(){
  }

  loop(){
    this.update()
    this.render()

    this.aniId = window.requestAnimationFrame(this.bindloop, canvas)
  }
}