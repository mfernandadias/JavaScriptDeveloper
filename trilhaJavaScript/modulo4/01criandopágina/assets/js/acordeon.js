const acordeonTrigers = document.querySelectory('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentelement

        acordeon.classList.contains('open')

        if (isOpen) {
            acordeon.classList.remove('open')
            acordeon.classList = Array.of(acordeon.classList).filter(className => className !== 'open')
        } else {
            acordeon.clasList.add('open')
        }
    })
})