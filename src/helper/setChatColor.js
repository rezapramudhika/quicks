const colors = [{
    color: '#E5A443',
    backgroundColor: '#FCEED3'
}, {
    color: '#43B78D',
    backgroundColor: '#D2F2EA'
}];


export const setChatColor = (origin) => {
    for (let i = 0; i < origin.length; i++) {
        let data = origin[i].data;
        const unique = data.filter(
            (obj, index) =>
                data.findIndex((item) => item.userId === obj.userId) === index
        );
        origin[i].data = unique
    }

    let manipulated = []
    for (let i = 0; i < origin.message.length; i++) {
        manipulated.push(...origin.message[i].data)
    }

    const noDuplicateIds = manipulated.filter(
        (obj, index) =>
            manipulated.findIndex((item) => item.userId === obj.userId) === index
    );
    let temp = [];
    noDuplicateIds.forEach((item, i) => {
        temp.push({
            userId: item.userId,
            colors: colors[i<2 ? i : 0]
        })
    });
    localStorage.setItem(`inbox-${origin.id}`, JSON.stringify(temp))
}