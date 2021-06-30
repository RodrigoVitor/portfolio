<template>
    <div>
        <h1 id="certificado" class="text-center mt-5">Certificados</h1>

        <div class="container mt-4">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="card" style="width: 14rem;">
                        <img class="card-img-top" src="../assets/js.png" alt="javascript">
                        <p class="mt-2 text-center fw-bold">Javascript</p>
                        <p class="text-center"><strong>Instituição:</strong> Curso em video</p>
                        <p class="text-center"><strong>Carga:</strong> 40 horas</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="card" style="width: 14rem;">
                        <img src="../assets/php.png" alt="PHP POO">
                        <p class="mt-2 text-center fw-bold"> PHP POO</p>
                        <p class="text-center"><strong>Instituição:</strong> NodeStudio Treinamentos</p>
                        <p class="text-center"><strong>Carga:</strong> 40 horas</p>
                    </div> 
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="card" style="width: 14rem;">
                        <img src="../assets/laravel.png" alt="Larvel">
                        <p class="mt-2 text-center fw-bold"> Laravel</p>
                        <p class="text-center"><strong>Instituição:</strong> EspecializaTi</p>
                        <p class="text-center"><strong>Carga:</strong> 40 horas</p>
                    </div>
                </div>
                <div class="col-lg-4 mt-5 col-sm-6">
                    <div class="card" style="width: 14rem;">
                        <img src="../assets/Mysql.png" alt="">
                        <p class="mt-2 text-center fw-bold"> MySql</p>
                        <p class="text-center"><strong>Instituição:</strong> Curso em video</p>
                        <p class="text-center"><strong>Carga:</strong> 40 horas</p>
                    </div>
                </div>
                <!--  -->
                <div class="col-lg-4 mt-5 col-sm-6">
                    <div class="card" style="width: 14rem;">
                         <img src="../assets/fcss.png" alt="Materialize">
                        <p class="mt-2 text-center fw-bold"> Materialize</p>
                        <p class="text-center"><strong>Instituição:</strong> NodeStudio Treinamentos</p>
                        <p class="text-center"><strong>Carga:</strong> 40 horas</p>
                    </div>
                </div>
                <div class="col-lg-3 mt-5 col-sm-6" >
                    <div class="card" style="width: 14rem;">
                        <img src="../assets/vue.png" alt="Vue.js">
                        <p class="mt-2 text-center fw-bold"> Vue.js Básico</p>
                        <p class="text-center"><strong>Instituição:</strong> João Ribeiro </p>
                        <p class="text-center"><strong>Carga:</strong> 10 horas</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            after: "<",
            next: ">"
        }
    }
}
</script>