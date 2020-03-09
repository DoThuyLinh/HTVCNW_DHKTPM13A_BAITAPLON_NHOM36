function getItemById(id) {
    var x = parseInt(id);
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.id === x) {
            return element;
        }
    }
}
function getClassicWatchs() {
    var results = [];
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.category == 1) {
            results.push(element);
        }
    }
    return results;
}
function getDapperWatchs() {
    var results = [];
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.category == 2) {
            results.push(element);
        }
    }
    return results;
}
function getItemByName(name) {
    var results = [];
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.name.search(name)) {
            results.push(element);
        }
    }
    return results;
}
function getMenWatch() {
    var results = [];
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.size >= 34 && element.category != 3) {
            results.push(element);
        }
    }
    return results;
}
function getWomenWatch() {
    var results = [];
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.size <= 34 && element.category != 3) {
            results.push(element);
        }
    }
    return results;
}
function getGiftSet() {
    var results = [];
    for (let i = 0; i < watchs.length; i++) {
        const element = watchs[i];
        if (element.category == 3) {
            results.push(element);
        }
    }
    return results;
}
function getCategoryById(id) {
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        if (element.id == id) {
            return element;
        }
    }
    return undefined;
}
function getItemsByCategoryId(categoryId) {
    if(categoryId == 1) {
        return getClassicWatchs();
    }
    if(categoryId == 2) {
        return getDapperWatchs();
    }
    if(categoryId == 3) {
        return getGiftSet();
    }
    if(categoryId == 4) {
        return getMenWatch();
    }
    if(categoryId == 5) {
        return getWomenWatch();
    }
}