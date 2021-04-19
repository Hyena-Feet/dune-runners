let Dune_Runner = sprites.create(assets.image`The DuneRunner`, SpriteKind.Player)
Dune_Runner.setStayInScreen(true)
controller.moveSprite(Dune_Runner, 50, 70)
forever(function () {
    Dune_Runner.setVelocity(-30, 0)
})
