/** 
@author {Ed}
@date { 13/03/2023 }
*/

/**
 * 
 * @param {Context} ctx 
 * @param {Number} minor 
 * @param {Number} major 
 * @param {string} stroke 
 * @param {string} fill 
 */


/**
 * 
 * @param {Context} ctx 
 * @param {Object} vertices 
 * @param {string} stroke 
 * @param {string} fill 
 */
function draw_trapezium(ctx,vertices,stroke,fill){
    stroke = stroke || 'black'
    fill = fill || 'white'

    // Save context state
    ctx.save()

    ctx.fillStyle = fill
    ctx.strokeStyle = stroke 

    // Draw the trapezium
    ctx.beginPath()
    ctx.moveTo(vertices.x1,vertices.y1)
    ctx.lineTo(vertices.x2,vertices.y2)
    ctx.lineTo(vertices.x3,vertices.y3)
    ctx.lineTo(vertices.x4,vertices.y4)
    ctx.closePath()
    ctx.stroke()
    //ctx.fill()

    // Restore to previous context state
    ctx.restore()


}

/**
 * 
 * @param {Context} ctx 
 */
function draw_roof(ctx){

        // draw roof
        var vertices = {
            x1:100,
            y1:100,
            x2:250,
            y2:100,
            x3:280,
            y3:150,
            x4:70,
            y4:150
        }



        // draw outer trapezium
        draw_trapezium(ctx,vertices)
        
        // draw inner trapezium

        var vertices = {
            x1:110,
            y1:110,
            x2:240,
            y2:110,
            x3:260,
            y3:140,
            x4:90,
            y4:140
        }


        draw_trapezium(ctx,vertices)

        // draw ventilator
        var x,y,width,height
        x= 160
        y= 120
        height = 10
        width = 30
        
        ctx.rect(x,y,width,height)
        ctx.stroke()


}

/**
 * 
 * @param {Context} ctx 
 */

function draw_house(ctx){

    ctx.save()

    draw_roof(ctx)

    //draw bottom of house
    var x,y,width,height

    // draw outer rectangle

    ctx.fillStyle = 'orange'

    x=90
    y=150
    width=170
    height=150
    ctx.rect(x,y,width,height)
    ctx.stroke()
    ctx.fill()

    // draw window
    x=120
    y=170
    width=40
    height=40


    ctx.rect(x,y,width,height)
    ctx.stroke()


    x=165
    y=170
    width=40
    height=40


    ctx.rect(x,y,width,height)
    ctx.stroke()


    x=165
    y=215
    width=40
    height=40


    ctx.rect(x,y,width,height)
    ctx.stroke()


    x=120
    y=215
    width=40
    height=40


    ctx.rect(x,y,width,height)
    ctx.stroke()


    x=115
    y=165
    width=95
    height=95


    ctx.rect(x,y,width,height)
    ctx.stroke()
    // draw sideview

    ctx.beginPath()
    ctx.moveTo(260,300)
    ctx.lineTo(300,250)
    ctx.stroke()


    ctx.beginPath()
    ctx.moveTo(250,100)
    ctx.lineTo(300,130)
    ctx.lineTo(330,160)
    ctx.lineTo(280,150)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(310,220)
    ctx.lineTo(310,160)
    ctx.closePath()
    ctx.stroke()

    ctx.restore()
}

/**
 * 
 * @param {Context} ctx 
 */
function draw_car(ctx){


        //draw car
        var x,y,width,height

        x=300
        y=210
        width=100
        height=40
        ctx.rect(x,y,width,height)
        ctx.stroke()
        ctx.fill()

        var verticles = {
            x1:312,
            y1:210,
            x2:323,
            y2:185,
            x3:379,
            y3:185,
            x4:388,
            y4:210

        }

        draw_trapezium(ctx,verticles)

        // draw tires
        x=310
        y=250
        width=30
        height=20
        ctx.rect(x,y,width,height)
        ctx.stroke()


        x=320
        y=250
        width=10
        height=20
        ctx.rect(x,y,width,height)

        x=370
        y=250
        width=10
        height=20
        ctx.rect(x,y,width,height)

        x=360
        y=250
        width=30
        height=20
        ctx.rect(x,y,width,height)
        ctx.stroke()

        // draw car lights

        ctx.fillStyle = 'white'

        var c1,c2,radius
        c1= 320
        c2= 230
        radius = 10
        startAngle = 0
        endAngle = Math.PI*2
        ctx.beginPath()
        ctx.arc(c1,c2,radius,startAngle,endAngle)
        ctx.stroke()
        ctx.fill()


        c1= 380
        c2= 230
        radius = 10
        startAngle = 0
        endAngle = Math.PI*2
        ctx.beginPath()
        ctx.arc(c1,c2,radius,startAngle,endAngle)
        ctx.stroke()

        ctx.closePath()

        // draw plate
        x=340
        y=225
        width=20
        height=10
        ctx.rect(x,y,width,height)
        ctx.stroke()
        ctx.fill()

}