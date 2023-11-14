<template>
    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="carousel-caption">
                    <h1 class="display-4">To Do Not To Do</h1>
                    <i>That is the question...</i>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/carousel/1.jpg" class="d-block w-100">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-4 text-white">Enchance You App</h1>
                    <p class="text-white">Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/carousel/2.jpg" class="d-block w-100">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-4">Future Start Here</h1>
                    <p class="text-danger">Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/images/carousel/3.jpg" class="d-block w-100">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-4 text-white">Sustainability</h1>
                    <p class="text-white">Some representative placeholder content for the first slide.</p>
                </div>
            </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<style scoped lang="scss">
.carousel-indicators {
    button {
        background-color: #f2f2f2;
    }

    button:hover {
        box-shadow: none;
    }
}

.carousel-inner {
    text-align: center;

    .carousel-item {
        height: 400px;
        
        .carousel-caption {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #000;

            i {
                color: #f42929
            }
        }

        img {
            min-height: 600px;;
        }
    }    
}

.carousel-control-prev, .carousel-control-next {
    box-shadow: none;
}
</style>