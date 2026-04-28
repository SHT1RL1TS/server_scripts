ServerEvents.recipes(event => {
    // osmium
    event.recipes.create.splashing('mekanism:dust_osmium', 'mekanism:dirty_dust_osmium')
    event.recipes.create.crushing('mekanism:dirty_dust_osmium', 'mekanism:raw_osmium').id('kubejs:mekanism/dirty_dust_osmium')
    event.recipes.create.crushing('mekanism:dirty_dust_osmium', '#forge:ores/osmium').id('kubejs:mekanism/dirty_dust_osmium_2')
    event.blasting('mekanism:ingot_osmium', 'mekanism:dust_osmium', 0.7, 100).id('kubejs:mekanism/blasting_osmium')
    event.smelting('mekanism:ingot_osmium', 'mekanism:dust_osmium', 0.7, 100).id('kubejs:mekanism/smelting_osmium')

    event.blasting('mekanism:ingot_osmium', 'mekanism:raw_osmium', 0.7, 100).id('kubejs:mekanism/blasting_osmium_manual_only_1')
    event.blasting('mekanism:ingot_osmium', '#forge:ores/osmium', 0.7, 100).id('kubejs:mekanism/blasting_osmium_manual_only_2')
    event.smelting('mekanism:ingot_osmium', 'mekanism:raw_osmium', 0.7, 200).id('kubejs:mekanism/smelting_osmium_manual_only_1')
    event.smelting('mekanism:ingot_osmium', '#forge:ores/osmium', 0.7, 200).id('kubejs:mekanism/smelting_osmium_manual_only_2')
    
    // gold
    event.recipes.create.splashing('mekanism:dust_gold', 'mekanism:dirty_dust_gold')
    event.recipes.create.crushing('mekanism:dirty_dust_gold', 'minecraft:raw_gold').id('kubejs:mekanism/dirty_dust_gold')
    event.recipes.create.crushing('mekanism:dirty_dust_gold', '#forge:ores/gold').id('kubejs:mekanism/dirty_dust_gold_2')
    event.blasting('minecraft:gold_ingot', 'mekanism:dust_gold', 0.7, 100).id('kubejs:mekanism/blasting_gold')
    event.smelting('minecraft:gold_ingot', 'mekanism:dust_gold', 0.7, 100).id('kubejs:mekanism/smelting_gold' )

    event.blasting('minecraft:gold_ingot', 'minecraft:raw_gold', 0.7, 100).id('kubejs:mekanism/blasting_gold_manual_only_1')
    event.blasting('minecraft:gold_ingot', '#forge:ores/gold', 0.7, 100).id('kubejs:mekanism/blasting_gold_manual_only_2')
    event.smelting('minecraft:gold_ingot', 'minecraft:raw_gold', 0.7, 200).id('kubejs:mekanism/smelting_gold_manual_only_1')
    event.smelting('minecraft:gold_ingot', '#forge:ores/gold', 0.7, 200).id('kubejs:mekanism/smelting_gold_manual_only_2')

    // copper
    event.recipes.create.splashing('mekanism:dust_copper', 'mekanism:dirty_dust_copper')
    event.recipes.create.crushing('mekanism:dirty_dust_copper', 'minecraft:raw_copper').id('kubejs:mekanism/dirty_dust_copper')
    event.recipes.create.crushing('mekanism:dirty_dust_copper', '#forge:ores/copper').id('kubejs:mekanism/dirty_dust_copper_2')
    event.blasting('minecraft:copper_ingot', 'mekanism:dust_copper', 0.7, 100).id('kubejs:mekanism/blasting_copper')
    event.smelting('minecraft:copper_ingot', 'mekanism:dust_copper', 0.7, 100).id('kubejs:mekanism/smelting_copper' )

    event.blasting('minecraft:copper_ingot', 'minecraft:raw_copper', 0.7, 100).id('kubejs:mekanism/blasting_copper_manual_only_1')
    event.blasting('minecraft:copper_ingot', '#forge:ores/copper', 0.7, 100).id('kubejs:mekanism/blasting_copper_manual_only_2')
    event.smelting('minecraft:copper_ingot', 'minecraft:raw_copper', 0.7, 200).id('kubejs:mekanism/smelting_copper_manual_only_1')
    event.smelting('minecraft:copper_ingot', '#forge:ores/copper', 0.7, 200).id('kubejs:mekanism/smelting_copper_manual_only_2')

    // Tin
    event.recipes.create.splashing('mekanism:dust_tin', 'mekanism:dirty_dust_tin')
    event.recipes.create.crushing('mekanism:dirty_dust_tin', 'mekanism:raw_tin').id('kubejs:mekanism/dirty_dust_tin')
    event.recipes.create.crushing('mekanism:dirty_dust_tin', '#forge:ores/tin').id('kubejs:mekanism/dirty_dust_tin_2')
    event.blasting('mekanism:ingot_tin', 'mekanism:dust_tin', 0.7, 100).id('kubejs:mekanism/blasting_tin')
    event.smelting('mekanism:ingot_tin', 'mekanism:dust_tin', 0.7, 100).id('kubejs:mekanism/smelting_tin' )

    event.blasting('mekanism:ingot_tin', 'mekanism:raw_tin', 0.7, 100).id('kubejs:mekanism/blasting_tin_manual_only_1')
    event.blasting('mekanism:ingot_tin', '#forge:ores/tin', 0.7, 100).id('kubejs:mekanism/blasting_tin_manual_only_2')
    event.smelting('mekanism:ingot_tin', 'mekanism:raw_tin', 0.7, 200).id('kubejs:mekanism/smelting_tin_manual_only_1')
    event.smelting('mekanism:ingot_tin', '#forge:ores/tin', 0.7, 200).id('kubejs:mekanism/smelting_tin_manual_only_2')

    // Lead
    event.recipes.create.splashing('mekanism:dust_lead', 'mekanism:dirty_dust_lead')
    event.recipes.create.crushing('mekanism:dirty_dust_lead', 'mekanism:raw_lead').id('kubejs:mekanism/dirty_dust_lead')
    event.recipes.create.crushing('mekanism:dirty_dust_lead', '#forge:ores/lead').id('kubejs:mekanism/dirty_dust_lead_2')
    event.blasting('mekanism:ingot_lead', 'mekanism:dust_lead', 0.7, 100).id('kubejs:mekanism/blasting_lead')
    event.smelting('mekanism:ingot_lead', 'mekanism:dust_lead', 0.7, 100).id('kubejs:mekanism/smelting_lead' )

    event.blasting('mekanism:ingot_lead', 'mekanism:raw_lead', 0.7, 100).id('kubejs:mekanism/blasting_lead_manual_only_1')
    event.blasting('mekanism:ingot_lead', '#forge:ores/lead', 0.7, 100).id('kubejs:mekanism/blasting_lead_manual_only_2')
    event.smelting('mekanism:ingot_lead', 'mekanism:raw_lead', 0.7, 200).id('kubejs:mekanism/smelting_lead_manual_only_1')
    event.smelting('mekanism:ingot_lead', '#forge:ores/lead', 0.7, 200).id('kubejs:mekanism/smelting_lead_manual_only_2')

    // #region First tier
    event.recipes.create.mechanical_crafting('mekanism:metallurgic_infuser', [
        'IMRMI',
        'MLFLM',
        'ROBOR',
        'MLFLM',
        'IMRMI'
    ], {
        R: 'minecraft:redstone',
        M: 'create:iron_sheet',
        I: 'minecraft:iron_ingot',
        F: 'minecraft:furnace',
        O: 'mekanism:ingot_osmium',
        L: 'mekanism:ingot_lead',
        B: 'minecraft:iron_block'
    }).id('kubejs:mekanism/metallurgic_infuser')

    event.recipes.create.mechanical_crafting('mekanism:energized_smelter', [
        'RMLMR',
        'MIOIM',
        'LGCGL',
        'MIOIM',
        'RMLMR',
    ], {
        R: 'minecraft:redstone',
        M: 'create:iron_sheet',
        I: 'minecraft:iron_ingot',
        C: 'mekanism:steel_casing',
        O: 'mekanism:ingot_osmium',
        L: 'mekanism:basic_control_circuit',
        G: '#forge:glass'
    }).id('kubejs:mekanism/energized_smelter')

    event.recipes.create.mechanical_crafting('mekanism:enrichment_chamber', [
        'RMLMR',
        'MIOIM',
        'LGCGL',
        'MIOIM',
        'RMLMR',
    ], {
        R: 'minecraft:redstone',
        M: 'create:iron_sheet',
        I: 'minecraft:iron_ingot',
        C: 'mekanism:steel_casing',
        O: 'mekanism:ingot_osmium',
        L: 'mekanism:basic_control_circuit',
        G: '#forge:glass'
    }).id('kubejs:mekanism/enrichment_chamber')
    // #endregion
})