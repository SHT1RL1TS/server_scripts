EntityEvents.spawned(event => {
    // Проверяем, является ли моб враждебным (монстром)
    if (event.entity.monster) {
        // Проверяем время мира (1 игровые сутки = 24000 тиков)
        if (event.level.time < 24000) {
            // Отменяем спавн
            event.cancel()
        }
    }
})
LevelEvents.tick(event => {
    // Обновляем раз в секунду
    if (event.level.dimension == "minecraft:overworld" && event.level.time % 20 == 0) {
        let time = event.level.time;
        let limit = 24000;

        if (time < limit) {
            // Рассчитываем игровые часы. 
            // В майнкрафте 0 тиков = 6 утра.
            let totalHours = (Math.floor(time / 1000) + 6) % 24;
            let totalMinutes = Math.floor((time % 1000) * 60 / 1000);

            // Форматируем для красоты (06:05 вместо 6:5)
            let h = totalHours < 10 ? "0" + totalHours : totalHours;
            let m = totalMinutes < 10 ? "0" + totalMinutes : totalMinutes;

            let timeString = h + ":" + m;

            event.level.players.forEach(player => {
                // Выводим только одну надпись
                player.setStatusMessage(Text.gold(`Текущее время: `).append(Text.white(timeString)).append(Text.gray(" (До 06:00 безопасно)")));
            });
        }
    }
});