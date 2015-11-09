var app = angular.module('app', []);

app.controller('paisAddController', ['$scope', '$http', paisAddController]);

function paisAddController($scope, $http) {
   
        $scope.postpais = function () {
            var pais = {
                "nm_pais": $scope.nm_pais
            }; var res = $http.post('http://localhost:61062/api/PaisWebAPI/PostPais', pais);
                res.success(function(data) {
                    toastr['success']("Pais cadastrado com sucesso", "SensorMed - Medições de Dados");
            });
                res.error(function(data) {
                    toastr['error']("Erro ao Cadastrar o Pais", "SensorMed - Medições de Dados");
                });
       }
}

app.controller('paisController', ['$scope', '$http', paisController]);

function paisController($scope, $http) {

    $scope.divPais = false;

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
        //
    }

    $scope.IncluirPaisDiv = function () {

        $scope.divPais = true;
    }

}

//app.controller('PaisAddController', ['$scope', '$http', function ($scope, $http) {
    //$scope.postpais = function () {
           //  if ($scope.Nome) {
               //  var pais = {
                  //   "Name": $scope.Nome
//
                //  }
//  $http.post('http://localhost:61062/api/PaisWebAPI/PostPais', pais).
               //   sucess(function (data, status, headers, config) {
                //      toastr["Error"]("Pais cadastrado com sucesso", "SensorMed - Medições de Dados")
                //  }).
                 // error(function (data, status, headers, config) {
                  //    toastr["Error"]("Erro ao cadastrar pais", "SensorMed - Medições de Dados")
                 // });
           //  }
  //  }
//}]);

app.controller('gruniController', ['$scope', '$http', gruniController]);

function gruniController($scope, $http) {

    $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
        $scope.listagruni = data;
    }).error(function () {
        //$scope.erro = "Erro: Não possível carregar a listagem de tipo de sensores.";
        toastr["error"]("Erro ao Obter os Grupos de Unidades", "SensorMed - Medições de Dados")
    });
}

app.controller('unidadeController', ['$scope', '$http', unidadeController]);

function unidadeController($scope, $http) {

    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
        $scope.listaunidade = data;
    }).error(function () {
        //$scope.erro = "Erro: Não possível carregar a listagem de tipo de sensores.";
        toastr["error"]("Erro ao Obter as Unidades", "SensorMed - Medições de Dados")
    });
}


app.controller('PaisAddController', ['$scope', '$http', function ($scope, $http) {
    $scope.submit = function () {
        if ($scope.Name) {
            var pais = {
                "Name": $scope.Name,

            }
            $http.post('http://localhost:61062/api/PaisWebAPI', pais).
			sucess(function (data, status, headers, config) {
			    alert('Product added Sucessfully')
			}).
			error(function (data, status, headers, config) {
			    alert('Erro');
			});
        }
    }
}]);