FTBQuestsEvents.completed('6564AF4E1E82EE4F', event => {
    var { player, server } = event
    var stageId = 'stone_age'

    // 1. Выдача стадии для Astages (для крафтов)
    server.runCommandSilent(`astages add ${player.username} ${stageId}`)

    // 2. Выдача стадии для KubeJS (чтобы твой скрипт тултипов её видел)
    if (!player.stages.has(stageId)) {
        player.stages.add(stageId)
    }

    // 3. Синхронизация напарников
    let myTeam = String(player.nbt.FTBTeamsId)
    if (myTeam && myTeam !== "null" && myTeam !== "") {
        server.players.forEach(p => {
            if (p.username !== player.username && String(p.nbt.FTBTeamsId) === myTeam) {
                server.runCommandSilent(`astages add ${p.username} ${stageId}`)
                if (!p.stages.has(stageId)) {
                    p.stages.add(stageId)
                }
                server.runCommandSilent(`execute as ${p.username} run kubejs reload client_scripts`)
            }
        })
    }

    // Обновляем клиент у того, кто сдал квест
    server.runCommandSilent(`execute as ${player.username} run kubejs reload client_scripts`)
})
FTBQuestsEvents.completed('3B1B98AD646B3FCA', event => {
    var { player, server } = event
    var stageId = 'in_create'

    // 1. Выдача стадии для Astages (для крафтов)
    server.runCommandSilent(`astages add ${player.username} ${stageId}`)

    // 2. Выдача стадии для KubeJS (чтобы твой скрипт тултипов её видел)
    if (!player.stages.has(stageId)) {
        player.stages.add(stageId)
    }

    // 3. Синхронизация напарников
    let myTeam = String(player.nbt.FTBTeamsId)
    if (myTeam && myTeam !== "null" && myTeam !== "") {
        server.players.forEach(p => {
            if (p.username !== player.username && String(p.nbt.FTBTeamsId) === myTeam) {
                server.runCommandSilent(`astages add ${p.username} ${stageId}`)
                if (!p.stages.has(stageId)) {
                    p.stages.add(stageId)
                }
                server.runCommandSilent(`execute as ${p.username} run kubejs reload client_scripts`)
            }
        })
    }

    // Обновляем клиент у того, кто сдал квест
    server.runCommandSilent(`execute as ${player.username} run kubejs reload client_scripts`)
})
    