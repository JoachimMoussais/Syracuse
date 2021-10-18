function syracuse(n) {
    var nbTimes = 0;
    while (n > 1) {
        if (n % 2 ===0)
        {return n / 2;
        }
        else {
            return n * 3 + 1;
        }
        nbTimes += 1;
    }
    return nbTimes;
}


