//region плавка через create
// osmium
AStages.addRestrictionForRecipe(
    "mekanism:furnace/osmium",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    'kubejs:mekanism/smelting_osmium'
)
AStages.addRestrictionForRecipe(
    "mekanism:furnace/blast/osmium",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_osmium"
)
// gold
AStages.addRestrictionForRecipe(
    "mekanism:furnace/gold",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    'kubejs:mekanism/smelting_gold'
)
AStages.addRestrictionForRecipe(
    "mekanism:furnace/blast/gold",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_gold"
)
// copper
AStages.addRestrictionForRecipe(
    "mekanism:furnace/copper",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    'kubejs:mekanism/smelting_copper'
)
AStages.addRestrictionForRecipe(
    "mekanism:furnace/blast/copper",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_copper"
)
// tin
AStages.addRestrictionForRecipe(
    "mekanism:furnace/tin",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    'kubejs:mekanism/smelting_tin'
)
AStages.addRestrictionForRecipe(
    "mekanism:furnace/blast/tin",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_tin"
)
// lead
AStages.addRestrictionForRecipe(
    "mekanism:furnace/lead",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    'kubejs:mekanism/smelting_lead'
)
AStages.addRestrictionForRecipe(
    "mekanism:furnace/blast/lead",    // Произвольный ID правила
    'meka_start',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_lead"
)
//endregion
//region крафт в печке
// osmium
AStages.addRestrictionForRecipe(
    "blasting_osmium_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_osmium_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "blasting_osmium_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_osmium_manual_only_2"
)

AStages.addRestrictionForRecipe(
    "smelting_osmium_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_osmium_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "smelting_osmium_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_osmium_manual_only_2"
)

// gold
AStages.addRestrictionForRecipe(
    "blasting_gold_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_gold_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "blasting_gold_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_gold_manual_only_2"
)

AStages.addRestrictionForRecipe(
    "smelting_gold_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_gold_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "smelting_gold_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_gold_manual_only_2"
)

// copper
AStages.addRestrictionForRecipe(
    "blasting_copper_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_copper_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "blasting_copper_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_copper_manual_only_2"
)

AStages.addRestrictionForRecipe(
    "smelting_copper_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_copper_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "smelting_copper_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_copper_manual_only_2"
)

// tin
AStages.addRestrictionForRecipe(
    "blasting_tin_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_tin_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "blasting_tin_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_tin_manual_only_2"
)

AStages.addRestrictionForRecipe(
    "smelting_tin_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_tin_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "smelting_tin_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_tin_manual_only_2"
)

// lead
AStages.addRestrictionForRecipe(
    "blasting_lead_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_lead_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "blasting_lead_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/blasting_lead_manual_only_2"
)

AStages.addRestrictionForRecipe(
    "smelting_lead_custom_1",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_lead_manual_only_1"
)

AStages.addRestrictionForRecipe(
    "smelting_lead_custom",    // Произвольный ID правила
    'meka_post_end',                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:mekanism/smelting_lead_manual_only_2"
)
//endregion

// region Recipe

// metallurgic_infuser
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:mekanism/metallurgic_infuser', 'meka_start')
// energized_smelter
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:mekanism/energized_smelter', 'meka_start')
//endregion