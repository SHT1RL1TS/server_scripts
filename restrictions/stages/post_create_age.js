
//region открытия крафта печки
AStages.addRestrictionForRecipe(
    "furnace_custom",    // Произвольный ID правила
    "post_create_age",                   // Стадия
    "minecraft:crafting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:furnace_1_manual_only"
)
AStages.addRestrictionForRecipe(
    "blast_furnace_custom",    // Произвольный ID правила
    "post_create_age",                   // Стадия
    "minecraft:crafting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:blast_furnace_manual_only"
)
//endregion
//region крафт в печке
AStages.addRestrictionForRecipe(
    "blasting_iron_custom",    // Произвольный ID правила
    "post_create_age",                   // Стадия
    "minecraft:blasting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:create/blasting_iron_1"
)

AStages.addRestrictionForRecipe(
    "smelting_iron_custom",    // Произвольный ID правила
    "post_create_age",                   // Стадия
    "minecraft:smelting",  // ИСПРАВЛЕНО: нижний регистр
    "kubejs:create/blasting_iron_2"
)
//endregion
//region железные инструменты криэйт
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_iron_axe', 'post_create_age')
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_iron_pickaxe', 'post_create_age')
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_iron_shovel', 'post_create_age')
RecipeMachineStage.addRecipe('create:mechanical_crafting', 'kubejs:create/custom_iron_hoe', 'post_create_age')
//endregion