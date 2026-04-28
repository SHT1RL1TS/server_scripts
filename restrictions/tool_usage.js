const RESTRICTED_ITEMS = [
    'minecraft:stone_axe',
    'minecraft:stone_pickaxe',
    'minecraft:stone_shovel',
    'minecraft:stone_hoe',
    'minecraft:stone_sword'
]

RESTRICTED_ITEMS.forEach(item => {
    // ID правила, стадия, предмет
    AStages.addRestrictionForItem(`restrict_${item.replace(':', '_')}`, 'stone_age', item)
})

const RESTRICTED_ITEMS_IRON = [
        'minecraft:iron_axe',
        'minecraft:iron_shovel',
        'minecraft:iron_pickaxe',
        'minecraft:iron_hoe',
        'minecraft:iron_sword'
]
RESTRICTED_ITEMS_IRON.forEach(item => {
    // ID правила, стадия, предмет
    AStages.addRestrictionForItem(`restrict_${item.replace(':', '_')}`, 'post_create_age', item)
})
const RESTRICTED_ITEMS_DIAMOND = [
        'minecraft:diamond_axe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_hoe',
        'minecraft:diamond_sword'
]
RESTRICTED_ITEMS_DIAMOND.forEach(item => {
    // ID правила, стадия, предмет
    AStages.addRestrictionForItem(`restrict_${item.replace(':', '_')}`, 'post_create_age', item)
})
const RESTRICTED_ITEMS_NETHERITE = [
        'minecraft:netherite_axe',
        'minecraft:netherite_shovel',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_hoe',
        'minecraft:netherite_sword'
]
RESTRICTED_ITEMS_NETHERITE.forEach(item => {
    // ID правила, стадия, предмет
    AStages.addRestrictionForItem(`restrict_${item.replace(':', '_')}`, 'post_create_age', item)
})
const RESTRICTED_ITEMS_GOLD = [
        'minecraft:gold_axe',
        'minecraft:gold_shovel',
        'minecraft:gold_pickaxe',
        'minecraft:gold_hoe',
        'minecraft:gold_sword' 
]
RESTRICTED_ITEMS_GOLD.forEach(item => {
    // ID правила, стадия, предмет
    AStages.addRestrictionForItem(`restrict_${item.replace(':', '_')}`, 'post_create_age', item)
})
//блокирование открытие блоков до стадий
// 1. Единый список блоков для стадии post_create_age
const POST_CREATE_BLOCKS = [
    'minecraft:furnace',
    'minecraft:blast_furnace'
]

// 2. Регистрация в AStages (этот кусок у тебя работает)
POST_CREATE_BLOCKS.forEach(blockId => {
    AStages.addRestrictionForItem(
        `restrict_${blockId.replace(':', '_')}`, 
        'post_create_age', 
        blockId
    )
})

// 3. Исправленное событие клика
BlockEvents.rightClicked(event => {
    // Проверяем наличие стадии через прямое обращение к объектам события
    if (POST_CREATE_BLOCKS.includes(event.block.id)) {
        if (!event.player.stages.has('post_create_age')) {
            event.cancel() // Явный вызов отмены
            event.player.tell('Вам нужно освоить продвинутые технологии, чтобы использовать это.')
        }
    }
})
