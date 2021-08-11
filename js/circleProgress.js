const pi = Math.PI
        var cnv = document.getElementById('result-canvas')
        var cnvPercent = document.getElementById('canvas-percent')
        var c = cnv.getContext('2d')
        var posX = cnv.width/2
        var posY = cnv.height/2
        var percent = 100
        var radPercent = 360/100 // Persentase per 360
        var res = radPercent * 64

        c.lineCap = "round"
        arcMove()

        function arcMove(){
            var deg = 0
            var arcInterval = setInterval(function(){

                percent--
                c.clearRect(0,0,cnv.width,cnv.height)
                // percent = deg/radPercent
                deg = percent*radPercent
                cnvPercent.innerHTML = percent.toFixed()

                // Draw Rail
                c.beginPath()
                c.arc(posX,posY,69,(pi/180)*270,(pi/180)*(270+360))
                c.strokeStyle = '#63BCF4'
                c.lineWidth = '2'
                c.stroke()

                // Draw Progress
                c.beginPath()
                c.arc(posX,posY,69,(pi/180)*270,(pi/180)*(270+deg))
                c.strokeStyle = '#479FD7'
                c.lineWidth = '5'
                c.stroke()

                if( deg <= 0){
                    clearInterval(arcInterval)
                }
            },1000)
        }