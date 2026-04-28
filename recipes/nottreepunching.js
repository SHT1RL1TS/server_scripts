ServerEvents.recipes(event => {
    event.remove({ output: Item.of('notreepunching:gold_knife', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:diamond_knife', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:netherite_knife', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:diamond_mattock', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:gold_mattock', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:iron_mattock', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:netherite_mattock', '{Damage:0}') })
    event.remove({ output: Item.of('notreepunching:gold_saw') })
    event.remove({ id: 'farmersdelight:rope' })
    event.shapeless(
        Item.of('farmersdelight:rope', 1),
        [
            '3x farmersdelight:straw'
        ]
    )
    event.campfireCooking('farmersdelight:straw', 'notreepunching:plant_fiber', 0.35, 100)
})
