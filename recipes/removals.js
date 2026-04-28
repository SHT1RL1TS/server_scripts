ServerEvents.recipes(event => {
    const toolsToRemove = [
        'ftbquests:screen_1',
        'ftbquests:loot_crate_opener',
        'ftbquests:screen_3',
        'ftbquests:screen_5',
        'ftbquests:screen_7',
        'ftbquests:screen_7',
        'ftbquests:task_screen_configurator',
        'minecraft:furnace',
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_pickaxe',
        'minecraft:iron_hoe',
        'minecraft:iron_sword',
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_hoe',
        'minecraft:diamond_sword',
        'minecraft:gold_axe',
        'minecraft:gold_shovel',
        'minecraft:gold_pickaxe',
        'minecraft:gold_hoe',
        'minecraft:gold_sword'
    ]
    toolsToRemove.forEach(id => event.remove({ output: id }))

    // Удаление конкретных рецептов Create
    event.remove({ id: 'create:crushing/leather_horse_armor' })
    event.remove({ id: 'create:crushing/iron_horse_armor' })
    event.remove({ id: 'create:crushing/golden_horse_armor' })
    event.remove({ id: 'create:crushing/diamond_horse_armor' })
    event.remove({ id: 'create:milling/saddle' })
    // Полностью удаляем ванильную плавку руды в слитки (Smelting и Blasting)
    // Мы заменим их кастомными рецептами позже, чтобы контролировать стадии
    event.remove({ output: 'minecraft:iron_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'minecraft:iron_ingot', type: 'minecraft:blasting' })
    event.remove({id: 'create:crushing/raw_iron'})
    event.remove({output: 'minecraft:blast_furnace'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})

        // #region Mekanism
    event.remove({id: 'create:crushing/raw_osmium'})
    event.remove({ output: 'mekanism:ingot_osmium', type: 'minecraft:smelting' })
    event.remove({ output: 'mekanism:ingot_osmium', type: 'minecraft:blasting' })
    
    event.remove({id: 'create:crushing/raw_gold'})
    event.remove({ output: 'minecraft:gold_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'minecraft:gold_ingot', type: 'minecraft:blasting' })

    event.remove({id: 'create:crushing/raw_copper'})
    event.remove({ output: 'minecraft:copper_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'minecraft:copper_ingot', type: 'minecraft:blasting' })

    event.remove({id: 'create:crushing/raw_tin'})
    event.remove({ output: 'mekanism:tin_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'mekanism:tin_ingot', type: 'minecraft:blasting' })

    event.remove({id: 'create:crushing/raw_lead'})
    event.remove({ output: 'mekanism:ingot_lead', type: 'minecraft:smelting' })
    event.remove({ output: 'mekanism:ingot_lead', type: 'minecraft:blasting' })

    event.remove({ output: 'mekanism:metallurgic_infuser'})
    event.remove({ output: 'mekanism:energized_smelter'})
    // #endregion

})