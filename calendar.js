
document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const messageContainer = document.getElementById('messageContainer')

    for (let day = 1; day <= 24; day++) {
        const openingDate = new Date(2023, 11, day)
        const door = document.createElement('div');
        door.className = 'calendar-door';
        door.innerText = day;
        if (openingDate > new Date()) {
            door.classList.add('future');
        } else {
            door.addEventListener('click', function () {
                openDoor(day);
            });
        }
        calendar.appendChild(door);
    }


    function openDoor(day) {
        const currentDate = new Date();
        console.log(day)
        console.log(currentDate.getDate())
        if (day <= currentDate.getDate()){
            const door = calendar.children[day - 1];
            door.classList.add('opened');

            const messages = [
                "Der erste Dezember, nun sind die Tage bis Weihnachten gezählt",
                "Noch 22 Tage",
                "In drei Tagen kommt der Nikolaus",
                "Frohe Weihnachtszeit! Möge dein Herz warm und deine Tasse heiß sein.",
                "Morgen kommt der Nikolaus, stell noch deinen Stiefel raus",
                "Genieße die festliche Zeit mit deinen Lieben und fröhlichen Liedern.",
                "Möge der Zauber der Weihnacht dein Zuhause erhellen.",
                "Fröhliche Weihnachten und ein glückliches neues Jahr!",
                "In dieser festlichen Saison sende ich dir warme Umarmungen und frohe Gedanken.",
                "Möge dein Herz mit Liebe gefüllt sein und dein Zuhause mit Glück strahlen.",
                "Weihnachten ist die Zeit der Liebe, Freude und festlichen Lichter.",
                "Gesegnete Weihnachten und ein glückliches neues Jahr voller Hoffnung!",
                "Lass uns die Magie der Weihnacht teilen und die Freude verbreiten.",
                "Die besten Wünsche für eine friedliche und fröhliche Weihnachtszeit!",
                "Genieße die festlichen Köstlichkeiten und die Gesellschaft guter Freunde.",
                "Möge der Glanz der Sterne dir Frieden und Freude bringen.",
                "Fröhliche Weihnachten! Möge der Geist der Großzügigkeit in deinem Herzen sein.",
                "In dieser festlichen Jahreszeit denke ich an dich und sende liebevolle Grüße.",
                "Möge die Weihnachtszeit dir besinnliche Momente und schöne Erinnerungen bringen.",
                "Frohe Weihnachten und ein glückliches neues Jahr voller Erfolg und Zufriedenheit.",
                "Möge das neue Jahr dir viele Gründe zum Lächeln bringen.",
                "Frohe Weihnachten! Möge die Liebe um dich herum wie ein Licht strahlen.",
                "Gesegnete Weihnachten! Möge der Frieden in dein Herz einziehen.",
                "In dieser festlichen Saison wünsche ich dir Liebe, Licht und Lachen.",

            ];

            console.log(messages[day - 1])
            const message = messages[day - 1];
            messageContainer.innerHTML = message;
            messageContainer.classList.remove('fade');
            void messageContainer.offsetWidth;
            messageContainer.classList.add('fade');
        } /*else {
            alert("HOHOHO Its not time yet")
        }*/
    }
});
