/**
 * Given is a string hangmanString. Replace every second letter with an underscore and return the result as a string. The first character must be an underscore.
 */

function hangman(hangmanString) {
    let result = `_${hangmanString[1]}`;
    let i = 2;
    while (i < hangmanString.length) {
        if (i % 2 === 0) {
            result += '_';
        } else {
            result += hangmanString[i];   
        }
        i++;
    }
    return result;
}


//  Test case                                           Expected
    console.log(hangman('TestString'));                 // _e_t_t_i_g
    console.log(hangman('Foobar'));                     // _o_b_r
    console.log(hangman('Demo'));                       // _e_o
    console.log(hangman('JS is fancy'));                // _S_i__a_c_
    console.log(hangman('ThisIsAnFancyString'));        // _h_s_s_n_a_c_S_r_n_
