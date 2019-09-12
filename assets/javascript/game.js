$(document).ready(function() {

    // random number
    var pcPick = Math.floor(Math.random() * 120) + 19;
        console.log("pcPick: " + pcPick);
        $(".randNum").html(pcPick);

    

    // gem random number

    var gOne = Math.floor(Math.random() * 12) +1;
        console.log("Gem 1:" + gOne);
        $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gOne + ">");

    var gTwo = Math.floor(Math.random() * 12) +1;
        console.log("Gem 2:" + gTwo);
        $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gTwo + ">");

    var gThree = Math.floor(Math.random() * 12) +1;
        console.log("Gem 2:" + gTwo);
        $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gThree + ">");

    var gFour = Math.floor(Math.random() * 12) +1;
        console.log("Gem 2:" + gTwo);
        $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gFour + ">");

    var wins = 0;
        console.log("wins: " + wins);
    
    var losses = 0;
        console.log("losses: " + losses);

    var score = 0;
        console.log("score: " + score);

    //Reset numbers

    function reset () {

        pcPick = Math.floor(Math.random() * 120) + 19;
            console.log("pcPick: " + pcPick);
            $(".randNum").html(pcPick);

        score = 0;
        $(".sd").html(score);

        gOne = Math.floor(Math.random() * 12) +1;
            console.log("Gem 1:" + gOne);
            $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + gOne + ">");

        gTwo = Math.floor(Math.random() * 12) +1;
            console.log("Gem 2:" + gTwo);
            $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + gTwo + ">");

        gThree = Math.floor(Math.random() * 12) +1;
            console.log("Gem 2:" + gTwo);
            $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + gThree + ">");

        gFour = Math.floor(Math.random() * 12) +1;
            console.log("Gem 2:" + gTwo);
            $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + gFour + ">");  

        $("img").on("click" , function () {
            var nScore = score += parseInt($(this).attr("value"));
                console.log("New Score: " + nScore);
            $(".sd").html(nScore);

            if(nScore === pcPick) {
                alert("You Win!!!");
                wins++ ;
                $(".wins").html("wins: " + wins);
                    console.log("wins: " + wins);
                    reset();

            }

            else if(nScore > pcPick) {
                alert("You lose try again!!!");
                losses++ ;
                $(".losses").html("losses: " + losses);
                    console.log("losses: " + losses);
                    reset();
            }

        });        
    }


    //Click
    $("img").on("click" , function () {
        var nScore = score += parseInt($(this).attr("value"));
            console.log("New Score: " + nScore);
        $(".sd").html(nScore);

        if(nScore === pcPick) {
            alert("You Win!!!");
            wins++ ;
            $(".wins").html("wins: " + wins);
                console.log("wins: " + wins);
                reset();

        }

        else if(nScore > pcPick) {
            alert("You lose try again!!!");
            losses++ ;
            $(".losses").html("losses: " + losses);
                console.log("losses: " + losses);
                reset();
        }
    
    });



});