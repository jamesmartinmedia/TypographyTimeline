var decadeButtons = ['1','2','3','4','5','6','7','8','9','10'];
var decadeImage;
var buttonText;
var fontName;
var className;
var fontYear;



d3.select('#svg')                      
	.append('text')
 	.text('TIMELINE')
    .attr('id','title1')
	.attr('class','title')
	.attr('x',13)
    .attr('y',143)
    .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
    .style('font-family','Helvetica')
    .style('font-weight','regular')
    .style('font-style','Bold')
    .style('text-anchor','start')
	.style('font-size','40px')
    .style('letter-spacing',7)
    .style('stroke-width',0)
    .style('fill','rgb(255,255,255)')
	.style('pointer-events', 'none')
	d3.select('#title1').transition().delay(400).duration(500).style('fill','rgb(53, 53, 53)');
	
	
	
d3.select('#svg')                      
	.append('text')
 	.text('OF')
    .attr('id','title2')
	.attr('class','title')
	.attr('x',13)
    .attr('y',211)
    .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
    .style('font-family','Helvetica')
    .style('font-weight','regular')
    .style('font-style','Bold')
    .style('text-anchor','start')
	.style('font-size','40px')
    .style('letter-spacing',7)
    .style('stroke-width',0)
    .style('fill','rgb(255,255,255)')
	.style('pointer-events', 'none')
	d3.select('#title2').transition().delay(400).duration(500).style('fill','rgb(53, 53, 53)');
	
d3.select('#svg')                      
	.append('text')
 	.text('TYPOGRAPHY')
    .attr('id','title3')
	.attr('class','title')
	.attr('x',13)
    .attr('y',415)
    .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
    .style('font-family','Helvetica')
    .style('font-weight','regular')
    .style('font-style','Bold')
    .style('text-anchor','start')
	.style('font-size','40px')
    .style('letter-spacing',7)
    .style('stroke-width',0)
    .style('fill','rgb(255,255,255)')
	.style('pointer-events', 'none')
	d3.select('#title3').transition().delay(400).duration(500).style('fill','rgb(53, 53, 53)');
	

function drawBackTriangle(){
	d3.select('#svg')
		.append('path')
		.attr('id','backTriangle')
		.attr('class','backTriangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(-240,1352) rotate(270)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 20 20 l -40 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
		location.reload();
	})
	d3.select('.backTriangle').transition().duration(1200).style('opacity',.6);	
};

function drawDownTriangle19(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				d3.selectAll('.fontName').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.select('#year_0').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 200).style('pointer-events', 'auto');
				d3.select('#year_1').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 243).style('pointer-events', 'auto');
				d3.select('#year_2').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 350).style('pointer-events', 'auto');
				d3.select('#year_3').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 460).style('pointer-events', 'auto');
				d3.select('#year_4').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 502).style('pointer-events', 'auto');
				d3.select('#year_5').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 502).style('pointer-events', 'auto');
				d3.select('#year_6').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 545).style('pointer-events', 'auto');
				d3.select('#year_7').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 587).style('pointer-events', 'auto');
				d3.select('#year_8').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 633).style('pointer-events', 'auto');
				d3.select('#year_9').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 680).style('pointer-events', 'auto');
				d3.select('#year_10').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 725).style('pointer-events', 'auto');
				d3.select('#year_11').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 725).style('pointer-events', 'auto');
				d3.select('#year_12').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 770).style('pointer-events', 'auto');
				d3.select('#year_13').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 770).style('pointer-events', 'auto');
				d3.select('#year_14').transition().duration(200).attr("r", 20).attr('cy', 526).attr('cx', 770).style('pointer-events', 'auto');
				d3.select('#year_15').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 814).style('pointer-events', 'auto');
				d3.select('#year_16').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_17').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_18').transition().duration(200).attr("r", 20).attr('cy', 526).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_19').transition().duration(200).attr("r", 20).attr('cy', 480).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_20').transition().duration(200).attr("r", 20).attr('cy', 433).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_21').transition().duration(200).attr("r", 20).attr('cy', 386).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_22').transition().duration(200).attr("r", 20).attr('cy', 339).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_23').transition().duration(200).attr("r", 20).attr('cy', 292).attr('cx', 857).style('pointer-events', 'auto');
				d3.select('#year_24').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 900).style('pointer-events', 'auto');
				d3.select('#year_25').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 900).style('pointer-events', 'auto');
				d3.select('#year_26').transition().duration(200).attr("r", 20).attr('cy', 526).attr('cx', 900).style('pointer-events', 'auto');
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};

function drawDownTriangle18(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.select('#year_0').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 150).style('pointer-events', 'auto');
				d3.select('#year_1').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 195).style('pointer-events', 'auto');
				d3.select('#year_2').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 250).style('pointer-events', 'auto');
				d3.select('#year_3').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 500).style('pointer-events', 'auto');
				d3.select('#year_4').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 600).style('pointer-events', 'auto');
				d3.select('#year_5').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 670).style('pointer-events', 'auto');
				d3.select('#year_6').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 770).style('pointer-events', 'auto');
				
				
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};

function drawDownTriangle17(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.select('#year_0').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 120).style('pointer-events', 'auto');
				d3.select('#year_1').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 350).style('pointer-events', 'auto');
				d3.select('#year_2').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 520).style('pointer-events', 'auto');
				d3.select('#year_3').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 830).style('pointer-events', 'auto');
				d3.select('#year_4').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 890).style('pointer-events', 'auto');
				
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};

function drawDownTriangle15(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.select('#year_0').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 120).style('pointer-events', 'auto');
				d3.select('#year_1').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 165).style('pointer-events', 'auto');
				d3.select('#year_2').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 315).style('pointer-events', 'auto');
				d3.select('#year_3').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 500).style('pointer-events', 'auto');
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};

function drawDownTriangle14(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.select('#year_0').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 120).style('pointer-events', 'auto');
				d3.select('#year_1').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 510).style('pointer-events', 'auto');
				d3.select('#year_2').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 650).style('pointer-events', 'auto');
				d3.select('#year_3').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 790).style('pointer-events', 'auto');
				d3.select('#year_4').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 890).style('pointer-events', 'auto');
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};

function drawDownTriangle11(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.select('#year_0').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 190).style('pointer-events', 'auto');
				d3.select('#year_1').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 190).style('pointer-events', 'auto');
				
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};
	
function drawDownTriangle00(){
	d3.select('#svg')
		.append('path')
		.attr('id','triangle')
		.attr('class','triangle')
		.attr("anchor", "middle")
		.attr("transform", "translate(1190,920) rotate(180)")
		.style('opacity','0')
		.attr('d', function(d) { 
        var x = 690, y = 290;
        return 'M' + x +' '+ y + ' l 25 25 l -50 0 ';
      })
	.on('mouseover',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.3');
			})
			
	.on('mouseout',function(d,i) {
				//d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','.5');
			})
	
	.on('click',function(d,i) {
				d3.selectAll('.pText').remove();
				d3.selectAll('#fontName').remove();
				d3.selectAll('#className').remove();
				decadesToTimeline()
				d3.selectAll('#triangle').remove()
				drawBackTriangle()
				d3.selectAll('#year_0').transition().duration(200).attr("r", 20).attr('cy', 526).attr('cx', 150).style('pointer-events', 'auto');
				d3.selectAll('#year_1').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 150).style('pointer-events', 'auto');
				d3.selectAll('#year_2').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 150).style('pointer-events', 'auto');
				d3.selectAll('#year_3').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 250).style('pointer-events', 'auto');
				d3.selectAll('#year_4').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 550).style('pointer-events', 'auto');
				d3.selectAll('#year_5').transition().duration(200).attr("r", 20).attr('cy', 573).attr('cx', 550).style('pointer-events', 'auto');
				d3.selectAll('#year_6').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 760).style('pointer-events', 'auto');
				d3.selectAll('#year_7').transition().duration(200).attr("r", 20).attr('cy', 620).attr('cx', 870).style('pointer-events', 'auto');
				
	})
	d3.select('#triangle').transition().duration(1200).style('opacity',.5);	
};
	
function moveTitleTopLeft(){
				d3.select('#title1').transition().delay(300).duration(400).attr('y', 35);
				d3.select('#title2').transition().delay(300).duration(400).attr('y', 75);
				d3.select('#title3').transition().delay(300).duration(400).attr('y', 115);
}

function moveTitleTopAcross(){
				d3.select('#title2').transition().duration(400).attr('x', 271);
				d3.select('#title3').transition().duration(400).attr('x', 355);
				d3.select('#title1').transition().delay(400).duration(300).attr('y', 35);
				d3.select('#title2').transition().delay(400).duration(300).attr('y', 35);
				d3.select('#title3').transition().delay(400).duration(300).attr('y', 35);
}

function timelineToBorder(){
				d3.selectAll('.decadeButtons').transition().duration(300).style('fill','rgb(79,79,79)').style('fill-opacity',1).attr('height', 10).attr('width', 980).attr('x',20).attr('y', 680).attr('rx',0).attr('ry',0);
				d3.select('#decade_0').transition().delay(300).duration(150).attr('width', 10);
				d3.select('#decade_0').transition().delay(500).duration(220).attr('y', 50).attr('height', 640);
}
	
	
function decadesToTimeline(){	
				d3.selectAll('.decadeButtons').transition().duration(300).attr('y', 650).attr('height', 20).style('pointer-events', 'none').style('fill-opacity',1);			
				d3.selectAll('.decadeButtons').transition().duration(300).delay(300).attr('x', 100).attr('width', 824).style('fill','rgb(165, 165, 165)')
				}
				
				
function drawDecades() {
		
	//attributes
		d3.select('#svg')
		.selectAll('decadeButtons')
		.data(decadeButtons)
		.enter()
		.append('rect')
		//.attr('id',"decades")
		.attr('id',function(d,i) { return 'decade_' + i; })
		.attr('class','decadeButtons')
		.attr('x',-10)
		.attr('y',function(d,i) { return 40 + i * 68; })
		//.attr('y',370)
		.attr('rx',5)
		.attr('ry',5)
		.attr('width',function(d,i) { return 250 + i * 80; })
		//.attr('width',100)
		.attr('height',40)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',.60) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
			decadeImage = i
				drawDecadeImage1()
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#decadeImage1').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) {
					//1100s
				drawYears11()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				 moveTitleTopLeft()
				 drawBackTriangle();
				//drawTimeline()
				}
				
				if(i == 1) {
					//1200s
				//drawTimeline()
				}
				
				if(i == 2) {
					//1300s
				//drawTimeline()
				}
				
				if(i == 3) {
					//1400s
				drawYears14()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				 moveTitleTopLeft()
				 drawBackTriangle();
				//drawTimeline()
				}
				
				if(i == 4) {
					//1500s
				drawYears15()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				 moveTitleTopLeft()
				 drawBackTriangle();
				//drawTimeline()
				}
				
				if(i == 5) {
					//1600s
				//drawTimeline()
				}
				
				if(i == 6) {
					//1700s
				drawYears17()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				drawBackTriangle()
				 moveTitleTopLeft();
				//drawTimeline()
				}
				
				if(i == 7) {
					//1800s
				drawYears18()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				moveTitleTopLeft()
				 drawBackTriangle();
				//drawTimeline()
				}
				
				if(i == 8) {
					//1900s
				drawYears19()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				 moveTitleTopLeft()
				 drawBackTriangle();
				//drawTimeline()
				}
				
				if(i == 9) {
					//2000s
				drawYears00()
				d3.selectAll('#decadeImage1').remove()
				decadeImage = i
				drawDecadeImage2()
				decadesToTimeline()
				moveTitleTopLeft()
				 drawBackTriangle();
				 //drawTimeline()
				}
				
				
				
		})
 d3.select('#decade_1').style('opacity', '.35').style('pointer-events', 'none');
 d3.select('#decade_2').style('opacity', '.35').style('pointer-events', 'none');
 d3.select('#decade_5').style('opacity', '.35').style('pointer-events', 'none');	
d3.selectAll('.decadeButtons').attr('x',-1000).transition().duration(550).attr('x',-10);	
}




function drawDecadeImage1() {
	d3.select('#svg')
		.append('image')
		.attr('id','decadeImage1')
		.attr('xlink:href',function(){return decadeDataset[decadeImage][0];})
		.attr('x', 888)
		.attr('y', 15)
		.style('opacity',.7)
		.attr('position', 'absolute')
		.style('pointer-events', 'none');
			
}

function drawDecadeImage2() {
	d3.select('#svg')
		.append('image')
		.attr('id','decadeImage2')
		.attr('xlink:href',function(){return decadeDataset[decadeImage][0];})
		.attr('x', 888)
		.attr('y', 15)
		.style('opacity',1)
		.attr('position', 'absolute')
		.style('pointer-events', 'none')
		
		d3.selectAll('#decadeImage2').transition().duration(550).attr('y',-90);	

			
}

function drawTimeline() {
		
	//attributes
		d3.select('#svg')
		.append('rect')
		.attr('id',"timeline")
		.attr('class','timeline')
		.attr('x',100)
		.attr('y',590)
		.attr('rx',5)
		.attr('ry',5)
		.attr('width',824)
		.attr('height',20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',.01) 
		.style('pointer-events', 'none');
		
}

function drawYears00() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset00)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 2) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 3) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 4) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 5) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 6) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 7) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle00()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
		})
		d3.select('#year_0').attr('cy', 526).attr('cx', 150);
		d3.select('#year_1').attr('cy', 573).attr('cx', 150);
		d3.select('#year_2').attr('cy', 620).attr('cx', 150);
		d3.select('#year_3').attr('cy', 620).attr('cx', 250);
		d3.select('#year_4').attr('cy', 620).attr('cx', 550);
		d3.select('#year_5').attr('cy', 573).attr('cx', 550);
		d3.select('#year_6').attr('cy', 620).attr('cx', 760);
		d3.select('#year_7').attr('cy', 620).attr('cx', 870);
}

function drawYears19() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset19)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 2) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 3) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 4) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 5) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 6) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 7) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 8) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 9) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 10) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 11) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
			
				if(i == 12) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 13) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 14) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 15) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 16) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 17) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 18) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');;
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 19) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 20) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 21) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
		
				if(i == 22) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 23) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 24) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 25) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 26) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 27) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_7').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_8').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_9').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_10').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_11').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_12').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_13').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_14').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_15').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_16').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_17').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_18').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_19').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_20').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_21').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_22').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_23').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_24').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_25').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_26').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_27').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle19()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
		})
		d3.select('#year_0').attr('cy', 620).attr('cx', 200);
		d3.select('#year_1').attr('cy', 620).attr('cx', 243);
		d3.select('#year_2').attr('cy', 620).attr('cx', 350);
		d3.select('#year_3').attr('cy', 620).attr('cx', 460);
		d3.select('#year_4').attr('cy', 620).attr('cx', 502);
		d3.select('#year_5').attr('cy', 573).attr('cx', 502);
		d3.select('#year_6').attr('cy', 620).attr('cx', 545);
		d3.select('#year_7').attr('cy', 620).attr('cx', 587);
		d3.select('#year_8').attr('cy', 620).attr('cx', 633);
		d3.select('#year_9').attr('cy', 620).attr('cx', 680);
		d3.select('#year_10').attr('cy', 620).attr('cx', 725);
		d3.select('#year_11').attr('cy', 573).attr('cx', 725);
		d3.select('#year_12').attr('cy', 620).attr('cx', 770);
		d3.select('#year_13').attr('cy', 573).attr('cx', 770);
		d3.select('#year_14').attr('cy', 526).attr('cx', 770);
		d3.select('#year_15').attr('cy', 620).attr('cx', 814);
		d3.select('#year_16').attr('cy', 620).attr('cx', 857);
		d3.select('#year_17').attr('cy', 573).attr('cx', 857);
		d3.select('#year_18').attr('cy', 526).attr('cx', 857);
		d3.select('#year_19').attr('cy', 480).attr('cx', 857);
		d3.select('#year_20').attr('cy', 433).attr('cx', 857);
		d3.select('#year_21').attr('cy', 386).attr('cx', 857);
		d3.select('#year_22').attr('cy', 339).attr('cx', 857);
		d3.select('#year_23').attr('cy', 292).attr('cx', 857);
		d3.select('#year_24').attr('cy', 620).attr('cx', 900);
		d3.select('#year_25').attr('cy', 573).attr('cx', 900);
		d3.select('#year_26').attr('cy', 526).attr('cx', 900);
}

function drawYears18() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset18)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 2) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				fontName = d[0]
				drawFontName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 3) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 4) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 5) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 6) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 7) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_5').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_6').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle18()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
		})
		d3.select('#year_0').attr('cy', 620).attr('cx', 150);
		d3.select('#year_1').attr('cy', 620).attr('cx', 195);
		d3.select('#year_2').attr('cy', 620).attr('cx', 250);
		d3.select('#year_3').attr('cy', 620).attr('cx', 500);
		d3.select('#year_4').attr('cy', 620).attr('cx', 600);
		d3.select('#year_5').attr('cy', 620).attr('cx', 670);
		d3.select('#year_6').attr('cy', 620).attr('cx', 770);
}

function drawYears17() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset17)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle17()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle17()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 2) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle17()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 3) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle17()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				fontName = d[0]
				drawFontName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 4) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle17()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
		})
		d3.select('#year_0').attr('cy', 620).attr('cx', 120);
		d3.select('#year_1').attr('cy', 620).attr('cx', 350);
		d3.select('#year_2').attr('cy', 620).attr('cx', 520);
		d3.select('#year_3').attr('cy', 620).attr('cx', 830);
		d3.select('#year_4').attr('cy', 620).attr('cx', 890);
}

function drawYears15() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset15)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle15()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle15()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 2) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle15()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 3) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle15()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
		})
		d3.select('#year_0').attr('cy', 620).attr('cx', 120);
		d3.select('#year_1').attr('cy', 620).attr('cx', 165);
		d3.select('#year_2').attr('cy', 620).attr('cx', 315);
		d3.select('#year_3').attr('cy', 620).attr('cx', 500);
}

function drawYears14() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset14)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {
			
				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle14()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle14()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 2) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle14()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 3) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle14()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 4) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_2').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_3').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_4').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle14()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
		})
		d3.select('#year_0').attr('cy', 620).attr('cx', 120);
		d3.select('#year_1').attr('cy', 620).attr('cx', 510);
		d3.select('#year_2').attr('cy', 620).attr('cx', 650);
		d3.select('#year_3').attr('cy', 620).attr('cx', 790);
		d3.select('#year_4').attr('cy', 620).attr('cx', 890);
}

function drawYears11() {
		
	//attributes
		d3.select('#svg')
		.selectAll('yearButtons')
		.data(dataset11)
		.enter()
		.append('circle')
		.attr('id',function(d,i) { return 'year_' + i; })
		.attr('class','yearButtons')
		.attr("cx", function(d,i) { return 159 + i * 100; })
        .attr("cy", 580)
		.attr("r", 20)
		.style('fill','rgb(79,79,79)')
		.style('fill-opacity',1) 
		.style('cursor','pointer')
		
		.on('mouseover',function(d,i) {
				buttonText = d[0]
				drawButtonText();
				d3.select(this).style('opacity','0.5');
			})
			
		.on('mouseout',function(d,i) {
				d3.selectAll('#buttonText').remove()
				d3.select(this).style('opacity','1');
			})
		
		.on('click',function(d,i) {

				if(i == 0) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle11()
				fontYear = d[1]
				drawFontYear()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
				timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				if(i == 1) { 
				d3.selectAll('#buttonText').remove()
				d3.selectAll('#backTriangle').remove()
				d3.selectAll('#year_0').transition().duration(300).attr("r", 10).attr('cy', 710).style('pointer-events', 'none');
				d3.selectAll('#year_1').transition().duration(450).attr("r", 300).attr('cy', 350).attr('cx', 500).style('pointer-events', 'none');
				d3.selectAll('#buttonText').remove()
				d3.selectAll('.bottomLine').transition().duration(300).attr('y', 600).attr('x', 50).attr('height', 20).style('fill','rgb(239, 191, 112)').style('stroke-width' , 2)
				drawDownTriangle11()
				fontYear = d[1]
				drawFontYear()
				fontName = d[0]
				drawFontName()
				className = d[2]
				drawClassName()
				paragraphText = d[3]
                timelineToBorder()
				moveTitleTopAcross()
				drawParagraphText();
				}
				
				
		})
		d3.select('#year_0').attr('cy', 620).attr('cx', 190);
		d3.select('#year_1').attr('cy', 573).attr('cx', 190);
}

function drawFontYear() {
   	d3.select('#svg')                      
		.append("text")
 		.text(fontYear)
        .attr("id","fontName")
        .attr("x",500) 
        .attr("y",245) 
        .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
		.style('font-family','Helvetica')
		.style('font-weight','light')
		.style('font-style','light')
        .style("font-size","20px")
        .style("text-anchor","middle")
		.style("fill",'rgb(255,255,255)')
		.style('pointer-events', 'none');
} 


function drawFontName() {
   	d3.select('#svg')                      
		.append("text")
 		.text(fontName)
        .attr("id","fontName")
        .attr("x",500) 
        .attr("y",300) 
        .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
		.style('font-family','Helvetica')
		.style('font-weight','light')
		.style('font-style','light')
        .style("font-size","40px")
        .style("text-anchor","middle")
		.style("fill",'rgb(255,255,255)')
		.style('pointer-events', 'none');
}

function drawClassName() {
   	d3.select('#svg')                      
		.append("text")
 		.text(className)
        .attr("id","className")
        .attr("x",500) 
        .attr("y",340) 
        .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
		.style('font-family','Helvetica')
		.style('font-weight','light')
		.style('font-style','light')
        .style("font-size","15px")
        .style("text-anchor","middle")
		.style("fill",'rgb(255,255,255)')
		.style('pointer-events', 'none');
}		
	
function drawButtonText() {
   	d3.select('#svg')                      
		.append("text")
 		.text(buttonText)
        .attr("id","buttonText")
        .attr("x",510) 
        .attr("y",700) 
        .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
		.style('font-family','Helvetica')
		.style('font-weight','light')
		.style('font-style','light')
        .style("font-size","35px")
        .style("text-anchor","middle")
		.style("fill",'rgb(0,0,0)')
		.style('pointer-events', 'none');
		
}
var paragraphText;

function drawParagraphText() {
    d3.select('#pTextDIV')                      
		.append("p")
 		.text(paragraphText)
		.attr('class','pText')
        .style('font-family',"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", 'Helvetica', 'Arial', "Lucida Grande")
		.style('font-family','Helvetica')
		.style('font-weight','light')
		.style('font-style','normal')
        .style("font-size","12px")
        .style("color",'rgb(255,255,255)')
		.style('pointer-events', 'none');		
}


// Controls what code is executed on window load.
window.onload = function() {
	//drawTitle()
	//drawBackTriangle()
	drawDecades()
	//drawTraingle()
	//drawDecades00s();
	//drawDecades();
    
 }