import React from 'react'
import carroImg from './img/carimbo.jpg'
import $ from 'jquery'

try{
    $('#recipeCarousel').carousel({
        interval: 100
      })
      
      $('.carousel .carousel-item').each(function(){
          var minPerSlide = 3;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });
      
}catch(e){
    alert(e);
}

export default function Bloco4(){
return(
	<>
    
	<div className="container text-center my-3">
    <h2 className="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
    <div className="row mx-auto my-auto">
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
            <div className="carousel-inner w-100" role="listbox">
                <div className="carousel-item active">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src={carroImg}></img>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src={carroImg}></img>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src={carroImg}></img>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src={carroImg}></img>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src={carroImg}></img>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-md-4">
                        <div className="card card-body">
                            <img className="img-fluid" src={carroImg}></img>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
    <h5 className="mt-2">Advances one slide at a time</h5>
</div>
	</>
)
}