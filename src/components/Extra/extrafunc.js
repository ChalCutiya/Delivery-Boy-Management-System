function capitalizeEachWordFirst(inputString) {
    return inputString.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

export { capitalizeEachWordFirst };
