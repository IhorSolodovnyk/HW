function userName() {
    const heroName = prompt(`Add user name`);

    if (heroName === null) {
        console.log(`Try again, please`);
    }
    if (heroName && heroName.length >= 2) {
        console.log(`Hello, ${heroName}`);
    }
}
