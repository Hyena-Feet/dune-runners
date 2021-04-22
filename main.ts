controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jumps < 2) {
        Dune_Runner.vy = -325
        Jumps += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(200)
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
	
})
let Dune_Runner: Sprite = null
let Jumps = 0
Jumps = 0
game.splash("You are the", "Dune Runner")
game.splash("Run Against the Wind")
game.splash("Or Die Trying...")
info.setLife(5)
scene.setBackgroundColor(9)
Dune_Runner = sprites.create(assets.image`The DuneRunner`, SpriteKind.Player)
Dune_Runner.setStayInScreen(true)
Dune_Runner.ay = 1250
Dune_Runner.ax = -500
controller.moveSprite(Dune_Runner, 50, 0)
forever(function () {
    if (Dune_Runner.y > 111) {
        Jumps = 0
    }
})
forever(function () {
	
})
