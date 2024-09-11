function changeMap(inspectorId){

    const maps = document.querySelectorAll('.fisca--div-flex-img')

    maps.forEach(map=> {

        map.classList.remove('display-block')
        map.classList.add('display-none')

    })

    const selectedMap = document.getElementById(inspectorId)

        selectedMap.classList.remove('display-none')
        
        selectedMap.classList.add('display-block')

    }