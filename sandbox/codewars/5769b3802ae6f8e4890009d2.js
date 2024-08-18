/* Removing Elements - 5769b3802ae6f8e4890009d2 */

function removeEveryOther(arr){
    let arrFiltered = arr.filter((item, index) => index % 2 == 0);
    return arrFiltered;
}