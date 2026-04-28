ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:stone_pickaxe'),
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: '#minecraft:stone_tool_materials',
            B: 'farmersdelight:rope',
            C: 'minecraft:stick'
        }).id('kubejs:stone_pickaxe_manual_only')
    event.shaped(
        Item.of('minecraft:stone_shovel'),
        [
            ' A ',
            ' B ',
            ' C '
        ],
        {
            A: '#minecraft:stone_tool_materials',
            B: 'farmersdelight:rope',
            C: 'minecraft:stick'
        }).id('kubejs:stone_shovel_manual_only')
    event.shaped(
        Item.of('minecraft:stone_sword'),
        [
            ' A ',
            ' A ',
            ' C '
        ],
        {
            A: '#minecraft:stone_tool_materials',
            B: 'farmersdelight:rope',
            C: 'minecraft:stick'
        }).id('kubejs:stone_sword_manual_only')
    event.shaped(
        Item.of('minecraft:stone_axe'),
        [
            'AB ',
            'AC ',
            ' C '
        ],
        {
            A: '#minecraft:stone_tool_materials',
            B: 'farmersdelight:rope',
            C: 'minecraft:stick'
        }).id('kubejs:stone_axe_manual_only')
    event.shaped(
        Item.of('minecraft:furnace'),
    [
        'AAA',
        'BFB',
        'CCC'
    ],
    {
        A: '#minecraft:stone_tool_materials',
        B: 'minecraft:stone',
        F: 'minecraft:iron_ingot',
        C: 'minecraft:bricks'
    }).id('kubejs:furnace_1_manual_only')
    event.shaped(
        Item.of('minecraft:blast_furnace', 1),
    [
        'AAA',
        'ABA',
        'CCC'
    ],
    {
        A: 'minecraft:iron_ingot',
        B: 'minecraft:furnace',
        C: 'minecraft:smooth_stone'
    }).id('kubejs:blast_furnace_manual_only')
    event.campfireCooking('minecraft:leather', 'minecraft:rotten_flesh', 0.35, 250)
    //iron
    event.campfireCooking('5x minecraft:iron_nugget', 'minecraft:raw_iron', 0.7, 2000).id('kubejs:iron_manual2')
    event.campfireCooking('5x minecraft:iron_nugget', '#minecraft:iron_ores', 0.7, 2000).id('kubejs:iron_manual3')
        // copper
    event.campfireCooking('5x create:copper_nugget', 'minecraft:raw_copper', 0.7, 2000).id('kubejs:copper_manual')
    event.campfireCooking('5x create:copper_nugget', '#forge:ores/copper', 0.7, 2000).id('kubejs:copper_manual_2')

    // #region Mekanism
    // osmium
    event.campfireCooking('5x mekanism:nugget_osmium', 'mekanism:raw_osmium', 0.7, 2000).id('kubejs:campfire/osmium')
    event.campfireCooking('5x mekanism:nugget_osmium', '#forge:ores/osmium', 0.7, 2000).id('kubejs:campfire/osmium_2')
    // tin
    event.campfireCooking('5x mekanism:nugget_tin', 'mekanism:raw_tin', 0.7, 2000).id('kubejs:campfire/tin')
    event.campfireCooking('5x mekanism:nugget_tin', '#forge:ores/tin', 0.7, 2000).id('kubejs:campfire/tin_2')
    // lead
    event.campfireCooking('5x mekanism:nugget_lead', 'mekanism:raw_lead', 0.7, 2000).id('kubejs:campfire/lead')
    event.campfireCooking('5x mekanism:nugget_lead', '#forge:ores/lead', 0.7, 2000).id('kubejs:campfire/lead_2')
    // #endregion
})
