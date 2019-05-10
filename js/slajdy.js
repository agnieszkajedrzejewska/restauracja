//-------------------------------------------------------------------SLAJDY----------------------------------------------------------------
    var bannerStatus = 1;
        var bannerTimer = 5000;

        window.onload = function (){
            bannerLoop();
        }

        var startBannerLoop = setInterval(function(){
            bannerLoop();
        }, bannerTimer);

        function bannerLoop() {
            if(bannerStatus === 1) { 
                document.getElementById("imgban2").style.opacity ="0";
                //jak tylko wczytamy tę pętlę, musimy ustawić pierwszy obraz po lewej stronie, a opacity ustawić na zero, a następnie po pół sekundy będzie robił zdjęcia, aby je przenieść, więc trzeci obraz po lewej stronie jest idąc do tyłu, a następnie do następnej pętli, ustawimy opacity na jedną

                setTimeout(function(){//uswtawiamy pozycje img w conteiner, musi być 3 razy bo mamy 3 obrazki
                    document.getElementById("imgban1").style.rigth = "0px";
                    document.getElementById("imgban1").style.zIndex = "1000";
                    document.getElementById("imgban2").style.rigth = "-1400px"; //tzn. że znajduje się ten slide po lewej stronie -1200px w lewe
                    document.getElementById("imgban2").style.zIndex = "1500";
                    document.getElementById("imgban3").style.rigth = "1400px";
                    document.getElementById("imgban3").style.zIndex = "500";
                }, 500);

                setTimeout(function(){
                document.getElementById("imgban2").style.opacity ="1";
                 }, 1000);


                bannerStatus = 2;
            }

              else if(bannerStatus === 2) { //uswtawiamy pozycje img w conteiner 
                document.getElementById("imgban3").style.opacity ="0";
                //jak tylko wczytamy tę pętlę, musimy ustawić pierwszy obraz po lewej stronie, a opacity ustawić na zero, a następnie po pół sekundy będzie robił zdjęcia, aby je przenieść, więc trzeci obraz po lewej stronie jest idąc do tyłu, a następnie do następnej pętli, ustawimy opacity na jedną

                setTimeout(function(){
                    document.getElementById("imgban2").style.rigth = "0px";
                    document.getElementById("imgban2").style.zIndex = "1000";
                    document.getElementById("imgban3").style.rigth = "-1400px"; //tzn. że znajduje się ten slide po lewej stronie -1200px w lewe
                    document.getElementById("imgban3").style.zIndex = "1500";
                    document.getElementById("imgban1").style.rigth = "1400px";
                    document.getElementById("imgban1").style.zIndex = "500";
                }, 500);

                setTimeout(function(){
                document.getElementById("imgban3").style.opacity ="1";
                 }, 1000);


                bannerStatus = 3;
            }

             else if(bannerStatus === 3) { //uswtawiamy pozycje img w conteiner 
                document.getElementById("imgban1").style.opacity ="0";
                //jak tylko wczytamy tę pętlę, musimy ustawić pierwszy obraz po lewej stronie, a opacity ustawić na zero, a następnie po pół sekundy będzie robił zdjęcia, aby je przenieść, więc trzeci obraz po lewej stronie jest idąc do tyłu, a następnie do następnej pętli, ustawimy opacity na jedną

                setTimeout(function(){
                    document.getElementById("imgban3").style.rigth = "0px";
                    document.getElementById("imgban3").style.zIndex = "1000";
                    document.getElementById("imgban1").style.rigth = "-1400px"; //tzn. że znajduje się ten slide po lewej stronie -1200px w lewe
                    document.getElementById("imgban1").style.zIndex = "1500";
                    document.getElementById("imgban2").style.rigth = "1400px";
                    document.getElementById("imgban2").style.zIndex = "500";
                }, 500);

                setTimeout(function(){
                document.getElementById("imgban1").style.opacity ="1";
                 }, 1000);


                bannerStatus = 1;
            }
           
           
        }