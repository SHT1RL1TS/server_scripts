ServerEvents.recipes(event => {
    event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:bone_block"
  },
  "mana": 450,
  "output": {
    "item": "minecraft:quartz"
  }
    }).id('kubejs:botania/custom_quertz')
    event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:red_wool"
  },
  "mana": 450,
  "output": {
    "item": "minecraft:redstone"
  }
    }).id('kubejs:botania/custom_redstone')
})