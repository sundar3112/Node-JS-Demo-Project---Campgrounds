function average(scores)
{
    var total=0;
    scores.forEach(score => {
        total+=score;
    });
    var avg = total/scores.length;
    return Math.round(avg);
}
var scores= [90,98,95,92,92,80,75];
console.log(average(scores));
