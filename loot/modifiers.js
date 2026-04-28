LootJS.modifiers((event) => {
    event
        .addBlockLootModifier([
            "#forge:ores/iron", 
            "#forge:ores/copper", 
            "#forge:ores/gold",
            "#forge:ores/tin"
        ])
        .matchMainHand(Item.of("notreepunching:flint_pickaxe"))
        .removeLoot([
            "#forge:raw_materials/iron", 
            "#forge:raw_materials/copper", 
            "#forge:raw_materials/gold",
            "#forge:raw_materials/tin"
        ]);
});
// ПРИМЕР КАК СДЕЛАТЬ ШАНС ВЫПАДЕНИЯ ОТ ЭРЫ
// LootJS.modifiers((event) => {
//     event
//         .addBlockLootModifier("#forge:ores/iron")
//         // Если стадии "stoneage" НЕТ, шанс  10%
//         .not((c) => c.hasAnyStage("stoneage")) 
//         .removeLoot(Ingredient.all)
//         .addAlternativesLoot(
//             LootEntry.of("#forge:raw_materials/iron").when((c) => c.randomChance(0.1))
//         );
// });
LootJS.modifiers((event) => {
    // Более широкий фильтр: любые сундуки, бочки и таблицы со словом loot
    event.addLootTableModifier(/.*/) 
        .removeLoot([
            "minecraft:iron_ingot",
            "minecraft:gold_ingot",
            "minecraft:emerald",
            "minecraft:gold_nugget",
            "minecraft:diamond",
            "minecraft:obsidian",
            "minecraft:iron_nugget",
            Item.of("minecraft:iron_axe").ignoreNBT(),
            Item.of("minecraft:iron_pickaxe").ignoreNBT(),
            Item.of("minecraft:iron_shovel").ignoreNBT(),
            Item.of("minecraft:iron_sword").ignoreNBT(),
            Item.of("minecraft:iron_chestplate").ignoreNBT(),
            Item.of("minecraft:iron_helmet").ignoreNBT(),
            Item.of("minecraft:iron_leggings").ignoreNBT(),
            Item.of("minecraft:iron_boots").ignoreNBT(),
            Item.of("minecraft:diamond_axe").ignoreNBT(),
            Item.of("minecraft:diamond_pickaxe").ignoreNBT(),
            Item.of("minecraft:diamond_shovel").ignoreNBT(),
            Item.of("minecraft:diamond_sword").ignoreNBT(),
            Item.of("minecraft:diamond_chestplate").ignoreNBT(),
            Item.of("minecraft:diamond_helmet").ignoreNBT(),
            Item.of("minecraft:diamond_leggings").ignoreNBT(),
            Item.of("minecraft:diamond_boots").ignoreNBT(),
            "infectious:flamethrower",
            "infectious:mk_556_ammunition",
            "infectious:mk_556",
            "infectious:flamethrower_fuel",
            "minecraft:golden_apple",
            Item.of("minecraft:chainmail_boots").ignoreNBT(),
            Item.of("minecraft:chainmail_helmet").ignoreNBT(),
            Item.of("minecraft:chainmail_chestplate").ignoreNBT(),
            Item.of("minecraft:chainmail_leggings").ignoreNBT(),
            Item.of("minecraft:bow").ignoreNBT(),
            "minecraft:enchanted_golden_apple",
            "infectious:grenade",
            Item.of("infectious:baton").ignoreNBT(),
            Item.of("infectious:swat_shield").ignoreNBT(),
            Item.of("spore:reaver").ignoreNBT(),
            "sophisticatedbackpacks:backpack",
            "sophisticatedbackpacks:iron_backpack",
            Item.of("minecraft:trident").ignoreNBT(),
            Item.of("minecraft:shield").ignoreNBT(),
            Item.of("minecraft:crossbow").ignoreNBT()
        ]);
});