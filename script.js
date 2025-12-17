// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
START
SET summa = 0;
SET total = 0;
SET person = 0;
SET dricks = 0;

INPUT "ange total kostnad:" = total;
INPUT "hur många personer?" = person;
INPUT "hur mycket dricks?" = dricks;

    IF person > 0 {
    CALCULATE (total + dricks)/person = summa;
        PRINT "Varje person ska betala: " + summa;
    } ELSE {
        PRINT "Antal personer måste vara mer än 0"
        }
    ENDIF
END
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*
START
SET variabel ordbok = ["FOUR", "FOUL", "FOOL", "FOOT", "FORT", "FORE", "FIRE", "FIVE"]; // Innehåller ALLA ord i det engelska språket
SET variabel startOrd till "FOUR";
SET variabel slutOrd till "FIVE";
SET variabel gissadeOrd = [];
ADD startOrd TO gissadeOrd;

PRINT startOrd;
PRINT "gissa nästa ord";

    FUNCTION isOneLetterApart(wordOne, wordTwo)
        IF (length(wordOne) !== length(wordTwo)) THEN
            PRINT "orden måste vara lika långa";    
            return FALSE;
            ENDIF

    SET variabel diffCount till 0;

    // Här behöver du skriva koden för din funktion
    FOR i = 0 TO length(wordOne) - 1 DO
        IF (wordOne[i] !== wordTwo[i]) THEN
        diffCount ++;
        ENDIF
    ENDFOR

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt

    ENDFUNCTION

    WHILE startOrd !== slutOrd DO
        INPUT gissa

    IF gissa FINNS I ordbok AND
        gissa FINNS INTE I gissadeOrd AND
        isOneLetterApart(startOrd, gissa) THEN

        ADD gissa TO gissadeOrd;
        SET startOrd = gissa;
        PRINT "Bra! Fortsätt så!";

    ELSE
        PRINT "tyvärr, fel ord. Försök igen";
    ENDIF
    ENDWHILE

    PRINT "Du klarade det! Grattis";
    PRINT gissadeOrd;
SLUT
*/
