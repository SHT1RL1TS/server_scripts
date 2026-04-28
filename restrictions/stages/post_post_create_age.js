//region КРАФТ В ПЕЧКЕ НАХУЙ (ЖЕЛЕЗА)
AStages.addRestrictionForRecipe(
    "kubejs:blasting_iron_1_manual_only_custom",    // Произвольный ID правила
    "post_post_create_age",                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:blasting_iron_1_manual_only"
)
AStages.addRestrictionForRecipe(
    "kubejs:blasting_iron_2_manual_only_custom",    // Произвольный ID правила
    "post_post_create_age",                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:blasting_iron_2_manual_only"
)
AStages.addRestrictionForRecipe(
    "kubejs:smelting_iron_1_manual_only_custom",    // Произвольный ID правила
    "post_post_create_age",                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:smelting_iron_1_manual_only"
)

AStages.addRestrictionForRecipe(
    "kubejs:smelting_iron_2_manual_only_custom",    // Произвольный ID правила
    "post_post_create_age",                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:smelting_iron_2_manual_only"
)
//endregion















//region алмазные инструменты криэйт
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_diamond_axe', 'post_post_create_age')
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_diamond_pickaxe', 'post_post_create_age')
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_diamond_shovel', 'post_post_create_age')
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_diamond_hoe', 'post_post_create_age')
//endregion