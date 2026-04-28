ServerEvents.recipes(event => {
    event.recipes.create.splashing('mekanism:dust_iron', 'mekanism:dirty_dust_iron')
    event.recipes.create.crushing('mekanism:dirty_dust_iron', 'minecraft:raw_iron').id('kubejs:create/dirty_dust_iron')
    event.recipes.create.crushing('mekanism:dirty_dust_iron', '#forge:ores/iron').id('kubejs:create/dirty_dust_iron_2')
    event.blasting('minecraft:iron_ingot', 'mekanism:dust_iron', 0.7, 100).id('kubejs:create/blasting_iron_1')
    event.smelting('minecraft:iron_ingot', 'mekanism:dust_iron', 0.7, 100).id('kubejs:create/blasting_iron_2')

    event.blasting('minecraft:iron_ingot', 'minecraft:raw_iron', 0.7, 100).id('kubejs:blasting_iron_1_manual_only')
    event.blasting('minecraft:iron_ingot', '#forge:ores/iron', 0.7, 100).id('kubejs:blasting_iron_2_manual_only')
    event.smelting('minecraft:iron_ingot', 'minecraft:raw_iron', 0.7, 200).id('kubejs:smelting_iron_1_manual_only')
    event.smelting('minecraft:iron_ingot', '#forge:ores/iron', 0.7, 200).id('kubejs:smelting_iron_2_manual_only')
    //region Железные инструменты
    event.recipes.create.mechanical_crafting('minecraft:iron_axe', [
        ' AAX  ',
        ' AAC  ',
        ' A X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:iron_ingot',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_iron_axe')
    event.recipes.create.mechanical_crafting('minecraft:iron_pickaxe', [
        '  ACA ',
        ' A X A',
        '   X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:iron_ingot',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_iron_pickaxe')
    event.recipes.create.mechanical_crafting('minecraft:iron_shovel', [
        '   A  ',
        '  ACA ',
        '   X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:iron_ingot',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_iron_shovel')
    event.recipes.create.mechanical_crafting('minecraft:iron_hoe', [
        '  AX  ',
        ' A C  ',
        '   X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:iron_ingot',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_iron_hoe')
    //endregion
    //region алмазные инструменты
    event.recipes.create.mechanical_crafting('minecraft:diamond_axe', [
        ' AAX  ',
        ' AAC  ',
        ' A X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:diamond',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_diamond_axe')
    event.recipes.create.mechanical_crafting('minecraft:diamond_pickaxe', [
        '  ACA ',
        ' A X A',
        '   X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:diamond',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_diamond_pickaxe')
    event.recipes.create.mechanical_crafting('minecraft:diamond_shovel', [
        '   A  ',
        '  ACA ',
        '   X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:diamond',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_diamond_shovel')
    event.recipes.create.mechanical_crafting('minecraft:diamond_hoe', [
        '  AX  ',
        ' A C  ',
        '   X  ',
        '   X  ',
    ], {
        C: 'farmersdelight:rope',
        A: 'minecraft:diamond',
        X: 'minecraft:stick'
    }).id('kubejs:create/custom_diamond_hoe')
    //endregion
})
