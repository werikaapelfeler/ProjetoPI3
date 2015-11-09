var app = angular.module('app', []);

// Todas os metodos relacionados ao Pais
app.controller('paisController', ['$scope', '$http', paisController]);

function paisController($scope, $http) {
   
       $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
           $scope.listapais = data;
       }).error(function () {
           //$scope.erro = "Erro: Não possível carregar a listagem de tipo de sensores.";
           toastr["error"]("Erro ao Obter os Paises", "SensorMed - Medições de Dados")
       });

       $scope.deletepais = function (Pais) {

           var res = $http.delete('http://localhost:61062/api/PaisWebAPI/DeletePais/' + JSON.stringify(Pais.cd_pais));

           res.success(function (data) {
               toastr["success"]("Pais excluido com sucesso", "SensorMed - Medições de Dados");
           });
           res.error(function (data) {
               toastr["error"]("Erro ao excluir o Pais", "SensorMed - Medições de Dados");
           });
       }
}

app.controller('paisAddController', ['$scope', '$http', paisAddController]);

function paisAddController($scope, $http) {

    $scope.postpais = function () {
        var pais = {
            "nm_pais": $scope.nm_pais
        }; var res = $http.post('http://localhost:61062/api/PaisWebAPI/PostPais', pais);
        res.success(function (data) {
            toastr['success']("Pais cadastrado com sucesso", "SensorMed - Medições de Dados");
        });
        res.error(function (data) {
            toastr['error']("Erro ao Cadastrar o Pais", "SensorMed - Medições de Dados");
        });
   }
}


// Todos os metodos relacionados ao Grupo de Unidade
app.controller('gruniController', ['$scope', '$http', gruniController]);

function gruniController($scope, $http) {

    $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
        $scope.listagruni = data;
    }).error(function () {
        //$scope.erro = "Erro: Não possível carregar a listagem de tipo de sensores.";
        toastr["error"]("Erro ao Obter os Grupos de Unidades", "SensorMed - Medições de Dados")
    });
}

// Todos os metodos relacionados as Unidades

app.controller('unidadeController', ['$scope', '$http', unidadeController]);

function unidadeController($scope, $http) {

    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
        $scope.listaunidade = data;
    }).error(function () {
        //$scope.erro = "Erro: Não possível carregar a listagem de tipo de sensores.";
        toastr["error"]("Erro ao Obter as Unidades", "SensorMed - Medições de Dados")
    });
}


