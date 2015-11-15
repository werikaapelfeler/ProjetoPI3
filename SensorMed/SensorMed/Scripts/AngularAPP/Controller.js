var app = angular.module('app', []);

// Todos os metodos relacionados as Micros Regiões
app.controller('microregiaoController', ['$scope', '$http', microregiaoController]);

function microregiaoController($scope, $http) {

    $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao').success(function (data) {
        $scope.listamicroregiao = data;
    }).error(function () {
    });

    $scope.deletemicroregiao = function (MicroRegiao) {

        var res = $http.delete('http://localhost:61062/api/MicroRegioesWebAPI/DeleteMicroRegiao/' + JSON.stringify(MicroRegiao.cd_microregiao));

        res.success(function (data) {
            GetAllMicroRegiao()
        });
        res.error(function (data) {
        });
    }

    $scope.postmicroregiao = function () {
        var microregiao = {
            "nm_microregiao": $scope.nm_microregiao
        }; var res = $http.post('http://localhost:61062/api/MicroRegioesWebAPI/PostMicroRegiao', microregiao);
        res.success(function (data) {
        });
        res.error(function (data) {
        });

        $scope.listamicroregiao.push(microregiao);
    }

    $scope.ClearFields = function () {
        $scope.cd_microregiao = "";
        $scope.nm_microregiao = "";
    }

    function GetAllMicroRegiao() {
        $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao').success(function (data) {
            $scope.listamicroregiao = data;
        }).error(function () {
        });

    }

    $scope.obterMicroRegiaoPorId = function (MicroRegiao) {

        var res = $http.get('http://localhost:61062/api/MicroRegioesWebAPI/GetMicroRegiao/' + JSON.stringify(MicroRegiao.cd_microregiao));

        res.success(function (MicroRegiao) {
            $scope.microregiao = MicroRegiao.data;
            $scope.cd_microregiao = MicroRegiao.cd_microregiao;
            $scope.nm_microregiaoi = MicroRegiao.nm_microregiao;
            console.log(MicroRegiao);
        });
        res.error(function (MicroRegiao) {
        });

    }

    $scope.atualizamicroregiao = function () {
        var microregiao = {
            cd_microregiao: $scope.cd_microregiao,
            nm_microregiao: $scope.nm_microregiao
        };

        console.log(microregiao);

        var res = $http.put('http://localhost:61062/api/MicroRegioesWebAPI/PutMicroRegiao/' + $scope.cd_microregiao, microregiao);
        res.success(function (data) {
            console.log(data);
            GetAllGruni();

        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(microregiao);

    }
}

// Todas os metodos relacionados ao Pais
app.controller('paisController', ['$scope', '$http', paisController]);

function paisController($scope, $http) {


    $scope.ClearFields = function () {
        $scope.cd_pais = "";
        $scope.nm_pais = "";
    }

    $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
        $scope.listapais = data;
    }).error(function () {
    });

    $scope.deletepais = function (Pais) {

        var res = $http.delete('http://localhost:61062/api/PaisWebAPI/DeletePais/' + JSON.stringify(Pais.cd_pais));

        res.success(function (data) {

            GetAllPais();

        });
        res.error(function (data) {

        });

    }

    function GetAllPais() {
        $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
            $scope.listapais = data;
        }).error(function () {
        });

    }

    $scope.obterPaisPorId = function (Pais) {

        var res = $http.get('http://localhost:61062/api/PaisWebAPI/GetPais/' + JSON.stringify(Pais.cd_pais));

        res.success(function (Pais) {
            $scope.pais = Pais.data;
            $scope.cd_pais = Pais.cd_pais;
            $scope.nm_pais = Pais.nm_pais;
            console.log(Pais);
        });
        res.error(function (Pais) {
        });

    }

    $scope.atualizapais = function (){
        var pais = {
            cd_pais: $scope.cd_pais,
            nm_pais: $scope.nm_pais
        };

        console.log(pais);

        var res = $http.put('http://localhost:61062/api/PaisWebAPI/PutPais/' + $scope.cd_pais, pais);
        res.success(function (data) {
            console.log(data);
            GetAllPais();
            
        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(pais);

    }

    $scope.postpais = function () {
        var pais = {
            "nm_pais": $scope.nm_pais
        }; var res = $http.post('http://localhost:61062/api/PaisWebAPI/PostPais', pais);
        res.success(function (data) {
            toastr['success']("Pais cadastrado com sucesso", "SensorMed - Medições de Dados");
        });
        res.error(function (data) {
        });

        $scope.listapais.push(pais);
    }
}

// Todos os metodos relacionados aos Estados

app.controller('estadoController', ['$scope', '$http', estadoController]);

function estadoController($scope, $http) {

    $scope.ClearFields = function () {
        $scope.cd_estado = "";
        $scope.nm_estado = "";
        $scope.cd_pais = "";
    }


    function ObterEstado()
    {
        var CelularesData = $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado');

        CelularesData.then(function (Estado) {
                $scope.listaestado = Estado.data;

            }, function()
            {
                toastr["Error"]("Erro ao Obter os Celulares", "DevMedia - Crud com MVC e AngularJs")
            })
    }


    function GetAllEstados() {
        $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
            $scope.listaestado = data;
        }).error(function () {
        });
    }

    function GetAllPais() {
        $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
            $scope.myOptions = data;
        }).error(function () {
        });

    }


    $scope.obterEstadoPorId = function (Estado) {

        var res = $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado/' + JSON.stringify(Estado.cd_estado));

        res.success(function (Estado) {
            $scope.estado = Estado.data;
            $scope.cd_estado = Estado.cd_estado;
            $scope.nm_estado = Estado.nm_estado;
            $scope.cd_pais = Estado.cd_pais;
            console.log(Estado);
        });
        res.error(function (estado) {
        });

    }

    $scope.atualizaestado = function (){
        var estado = {
            cd_estado: $scope.cd_estado,
            nm_estado: $scope.nm_estado,
            cd_pais: $scope.cd_pais
        };

        console.log(estado);

        var res = $http.put('http://localhost:61062/api/EstadosWebAPI/PutEstado/' + $scope.cd_estado, estado);
        res.success(function (data) {
            console.log(data);

            GetAllEstados();

            GetAllPais();

            
        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(estado);

    }
    
    $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
        $scope.myOptions = data;
    }).error(function () {
    });

    $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
        $scope.listaestado = data;
    }).error(function () {
    });
	
    $http.get('http://localhost:61062/api/PaisWebAPI/GetPais').success(function (data) {
        $scope.NomePais = data;
    }).error(function () {
    });

    $scope.deleteestado = function (Estado) {

        var res = $http.delete('http://localhost:61062/api/EstadosWebAPI/DeleteEstado/' + JSON.stringify(Estado.cd_estado));

        res.success(function (data) {
            console.log(data);
            $http.get('http://localhost:61062/api/EstadosWebAPI/GetEstado').success(function (data) {
                $scope.listaestado = data;
            }).error(function () {
            });
        });
        res.error(function (data) {
            console.log(data);
        });


    }

    $scope.postestado = function (cd_pais) {
        var estado = {
            "nm_estado": $scope.nm_estado,
            "cd_pais": cd_pais
        }; var res = $http.post('http://localhost:61062/api/EstadosWebAPI/PostEstado', estado);
        res.success(function (data) {
            console.log(data);
        });
        res.error(function (data) {
            console.log(data);
        });

        $scope.listaestado.push(estado);
    }
}
// Todos os metodos relacionados ao Grupo de Unidade
app.controller('gruniController', ['$scope', '$http', gruniController]);

function gruniController($scope, $http) {

    $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
        $scope.listagruni = data;
    }).error(function () {
    });

    $scope.deletegruni = function (Gruni) {

        var res = $http.delete('http://localhost:61062/api/GrunisWebAPI/DeleteGruni/' + JSON.stringify(Gruni.cd_gruni));

        res.success(function (data) {
            GetAllGruni()
        });
        res.error(function (data) {
        });
    }

    $scope.postgruni = function () {
        var gruni = {
            "nm_gruni": $scope.nm_gruni
        }; var res = $http.post('http://localhost:61062/api/GrunisWebAPI/PostGruni', gruni);
        res.success(function (data) {
        });
        res.error(function (data) {
        });

        $scope.listagruni.push(gruni);
    }

    $scope.ClearFields = function () {
        $scope.cd_gruni = "";
        $scope.nm_gruni = "";
    }

    function GetAllGruni() {
        $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni').success(function (data) {
            $scope.listagruni = data;
        }).error(function () {
        });

    }

    $scope.obterGruniPorId = function (Gruni) {

        var res = $http.get('http://localhost:61062/api/GrunisWebAPI/GetGruni/' + JSON.stringify(Gruni.cd_gruni));

        res.success(function (Gruni) {
            $scope.gruni = Gruni.data;
            $scope.cd_gruni = Gruni.cd_gruni;
            $scope.nm_gruni = Gruni.nm_gruni;
            console.log(Gruni);
        });
        res.error(function (Gruni) {
        });

    }

    $scope.atualizagruni = function () {
        var gruni = {
            cd_gruni: $scope.cd_gruni,
            nm_gruni: $scope.nm_gruni
        };

        console.log(gruni);

        var res = $http.put('http://localhost:61062/api/GrunisWebAPI/PutGruni/' + $scope.cd_gruni, gruni);
        res.success(function (data) {
            console.log(data);
            GetAllGruni();

        });
        res.error(function (data) {
            console.log(data);
        });

        console.log(gruni);

    }
}

// Todos os metodos relacionados as Unidades

app.controller('unidadeController', ['$scope', '$http', unidadeController]);

function unidadeController($scope, $http) {

    $http.get('http://localhost:61062/api/UnidadesWebAPI/GetUnidade').success(function (data) {
        $scope.listaunidade = data;
    }).error(function () {
    });
}
/*
app.controller('dashboardController', ['$scope', '$http', dashboardController]);

function dashboardController($scope, $http) {
    this.$scope = $scope;
    $scope.chartConfig = {
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
                        title: {
                text: 'USD to EUR exchange rate from 2006 through 2008'
            },            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
            },
            yAxis: { title: { text: 'Temperature (Celsius)' } },
            tooltip: { valueSuffix: ' celsius' },
            legend: { align: 'center', verticalAlign: 'bottom', borderWidth: 0 },
               plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
              type:'area',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }]
    };

    app.directive('chart', chartDirective);

    var chartDirective = function () {
        return {
            restrict: 'E',
            replace: true,
            template: '<div></div>',
            scope: {
                config: '='
            },
            link: function (scope, element, attrs) {
                var chart;
                var process = function () {
                    var defaultOptions = {
                        chart: { renderTo: element[0] },
                    };
                    var config = angular.extend(defaultOptions, scope.config);
                    chart = new Highcharts.Chart(config);
                };
                process();
                scope.$watch("config.series", function (loading) {
                    process();
                });
                scope.$watch("config.loading", function (loading) {
                    if (!chart) {
                        return;
                    }
                    if (loading) {
                        chart.showLoading();
                    } else {
                        chart.hideLoading();
                    }
                });
            }
        };
    };
}*/
